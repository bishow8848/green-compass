"use client";

import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { FAQBlock } from "@/components/admin/tiptap/FAQBlock";
import {
  Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered,
  Quote, Undo, Redo, Code, Strikethrough, Underline as UnderlineIcon,
  Link, Image, AlignLeft, AlignCenter, AlignRight, Minus, Pilcrow, Loader2,
  Table2, Plus, ListPlus, Trash2, ChevronDown, ListTree
} from "lucide-react";
import { countWords } from "@/lib/seo-analysis";
import { useState, useCallback, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export interface RichTextEditorHandle {
  /** Upload all pending (data URL) images to Cloudinary, replace them in the editor, and return the final HTML */
  processPendingImages: () => Promise<string>;
}

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
  /** Hide the word count / heading outline bar under the editor */
  hideStatusBar?: boolean;
}

/** Live document stats, recomputed (debounced) as the author types. */
interface DocStats {
  words: number;
  readingMinutes: number;
  headings: { level: number; text: string; pos: number }[];
  images: number;
  imagesMissingAlt: number;
}

const EMPTY_DOC_STATS: DocStats = {
  words: 0,
  readingMinutes: 0,
  headings: [],
  images: 0,
  imagesMissingAlt: 0,
};

const HEADING_OPTIONS = [
  { level: 0, label: "Paragraph" },
  { level: 1, label: "Heading 1" },
  { level: 2, label: "Heading 2" },
  { level: 3, label: "Heading 3" },
] as const;

/** Extract the Cloudinary publicId from a Cloudinary image URL */
function publicIdFromUrl(url: string): string | null {
  const match = url.match(/\/image\/upload\/(?:v\d+\/)?(.+)/);
  return match ? match[1] : null;
}

/** Extract all <img src="..."> URLs from HTML */
function extractImageUrls(html: string): string[] {
  const urls: string[] = [];
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Image extension that supports an optional caption.
 *
 * Images with a caption render as <figure><img><figcaption>…</figcaption></figure>
 * so the caption is visible in the rendered content on the front-end.
 * Plain images (no caption) keep rendering as a simple <img>, and existing
 * content in either form round-trips correctly.
 */
const CaptionImage = ImageExtension.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      dataCaption: {
        default: null,
        parseHTML: (el) =>
          el.getAttribute("data-caption") || el.getAttribute("datacaption"),
        // ProseMirror writes attribute keys verbatim and HTML lowercases them,
        // so without an explicit renderHTML the camelCase "dataCaption" becomes
        // "datacaption" (no hyphen) in the saved HTML — breaking round-trips.
        // Force the proper kebab-case attribute instead.
        renderHTML: (attrs) =>
          attrs.dataCaption ? { "data-caption": attrs.dataCaption } : {},
      },
      width: {
        default: null,
        parseHTML: (el) => {
          const value = el.getAttribute("width");
          return value ? Number(value) : null;
        },
        renderHTML: (attrs) => (attrs.width ? { width: attrs.width } : {}),
      },
      height: {
        default: null,
        parseHTML: (el) => {
          const value = el.getAttribute("height");
          return value ? Number(value) : null;
        },
        renderHTML: (attrs) => (attrs.height ? { height: attrs.height } : {}),
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: "img",
        getAttrs: (el) => {
          if (typeof el === "string") return {};
          return {
            src: el.getAttribute("src"),
            alt: el.getAttribute("alt"),
            title: el.getAttribute("title"),
            width: el.getAttribute("width") ? Number(el.getAttribute("width")) : null,
            height: el.getAttribute("height") ? Number(el.getAttribute("height")) : null,
            dataCaption:
              el.getAttribute("data-caption") || el.getAttribute("datacaption"),
          };
        },
      },
      {
        tag: "figure",
        getAttrs: (el) => {
          if (typeof el === "string") return false;
          const img = el.querySelector("img");
          if (!img) return false;
          const figcaption = el.querySelector("figcaption");
          return {
            src: img.getAttribute("src"),
            alt: img.getAttribute("alt"),
            title: img.getAttribute("title"),
            width: img.getAttribute("width") ? Number(img.getAttribute("width")) : null,
            height: img.getAttribute("height") ? Number(img.getAttribute("height")) : null,
            dataCaption: figcaption
              ? figcaption.textContent || ""
              : img.getAttribute("data-caption") || img.getAttribute("datacaption"),
          };
        },
      },
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    const caption = node.attrs.dataCaption;
    if (caption) {
      return [
        "figure",
        {},
        ["img", HTMLAttributes],
        ["figcaption", {}, caption],
      ];
    }
    return ["img", HTMLAttributes];
  },
});

export const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  function RichTextEditor({ content, onChange, placeholder, hideStatusBar }, ref) {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  // Heading controls + live outline
  const [showHeadingMenu, setShowHeadingMenu] = useState(false);
  const headingMenuRef = useRef<HTMLDivElement>(null);
  const [showOutline, setShowOutline] = useState(false);
  const [docStats, setDocStats] = useState<DocStats>(EMPTY_DOC_STATS);

  // Alt text + caption state
  const [altText, setAltText] = useState("");
  const [caption, setCaption] = useState("");
  const [showAltInput, setShowAltInput] = useState(false);
  const [altImagePreview, setAltImagePreview] = useState<string | null>(null);
  const altInputRef = useRef<HTMLInputElement>(null);

  // Track all image URLs currently in the editor content (Cloudinary + data URLs)
  const trackedUrlsRef = useRef<string[]>(extractImageUrls(content));
  // Track pending (data URL → File) for images not yet uploaded to Cloudinary
  const pendingImagesRef = useRef<Record<string, File>>({});

  // Sync tracked URLs when content changes externally
  useEffect(() => {
    trackedUrlsRef.current = extractImageUrls(content);
  }, [content]);

  const editor = useEditor({
    immediatelyRender: true,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: false,
        underline: false,
      }),
      Underline,
      TextStyle,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      CaptionImage.configure({ inline: false }),
      LinkExtension.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: placeholder || "Start writing..." }),
      // Tables — insert/edit anywhere in the article
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      // FAQ block — a draggable block that can sit mid-article
      FAQBlock,
    ],
    content,
    onUpdate: ({ editor }) => {
      const newHtml = editor.getHTML();
      const newUrls = extractImageUrls(newHtml);
      const oldUrls = trackedUrlsRef.current;

      // Detect Cloudinary images that were removed by the user and delete from Cloudinary
      for (const url of oldUrls) {
        if (!newUrls.includes(url) && !url.startsWith("data:")) {
          const publicId = publicIdFromUrl(url);
          if (publicId) {
            fetch("/api/delete-image", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ publicId }),
            }).catch(() => {});
          }
        }
      }

      // If a data URL was removed, stop tracking the pending file
      for (const url of oldUrls) {
        if (!newUrls.includes(url) && url.startsWith("data:")) {
          delete pendingImagesRef.current[url];
        }
      }

      trackedUrlsRef.current = newUrls;
      onChange(newHtml);
    },
    editorProps: {
      attributes: {
        class: "prose prose-xs max-w-none min-h-[300px] px-4 py-3 focus:outline-none",
      },
    },
  });

  // Close the block-type dropdown when clicking anywhere else — it floats over
  // the writing area, so leaving it open gets in the way.
  useEffect(() => {
    if (!showHeadingMenu) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!headingMenuRef.current?.contains(event.target as Node)) setShowHeadingMenu(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [showHeadingMenu]);

  // Recompute the outline + word count from the document, debounced so a long
  // article doesn't re-walk the whole doc on every keystroke.
  useEffect(() => {
    if (!editor) return;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const compute = () => {
      if (editor.isDestroyed) return;
      const headings: DocStats["headings"] = [];
      let images = 0;
      let imagesMissingAlt = 0;
      editor.state.doc.descendants((node, pos) => {
        if (node.type.name === "heading") {
          headings.push({ level: node.attrs.level, text: node.textContent, pos });
        } else if (node.type.name === "image") {
          images += 1;
          if (!String(node.attrs.alt || "").trim()) imagesMissingAlt += 1;
        }
      });
      const words = countWords(editor.getText({ blockSeparator: " " }));
      setDocStats({
        words,
        readingMinutes: words > 0 ? Math.max(1, Math.round(words / 200)) : 0,
        headings,
        images,
        imagesMissingAlt,
      });
    };

    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(compute, 250);
    };

    compute();
    editor.on("update", schedule);
    return () => {
      clearTimeout(timer);
      editor.off("update", schedule);
    };
  }, [editor]);

  // Expose processPendingImages to parent forms
  useImperativeHandle(ref, () => ({
    async processPendingImages() {
      try {
        // Editor might be null (SSR) or destroyed (component unmounted), bail early
        if (!editor || editor.isDestroyed) return "";

        const pending = pendingImagesRef.current || {};
        const entries = Object.entries(pending);
        if (entries.length === 0) {
          return editor.getHTML() || "";
        }

        let html = editor.getHTML() || "";
        for (const [dataUrl, file] of entries) {
          try {
            const fd = new FormData();
            fd.set("file", file);
            fd.set("folder", "mardi-treks/content");
            const res = await fetch("/api/upload", { method: "POST", body: fd });
            const data = await res.json();
            const cloudinaryUrl = data.publicId
              ? `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${data.publicId}`
              : data.url;

            if (cloudinaryUrl) {
              html = html.replaceAll(dataUrl, cloudinaryUrl);
            }
          } catch (err) {
            console.error("Failed to upload pending editor image", err);
          }
        }

        // Update editor content with Cloudinary URLs (triggers onUpdate → onChange)
        if (!editor.isDestroyed) {
          editor.commands.setContent(html);
        }
        pendingImagesRef.current = {};
        return html;
      } catch (err) {
        console.error("processPendingImages failed:", err);
        return "";
      }
    },
  }), [editor, onChange]);

  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileSelected = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    setUploading(true);
    // Read file as data URL for local preview — no Cloudinary upload yet
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const preview = new window.Image();
      preview.onload = () => {
        editor.chain().focus().setImage({
          src: dataUrl,
          width: preview.naturalWidth,
          height: preview.naturalHeight,
        }).run();
        setUploading(false);

        // Show alt text + caption input after the dimensioned image is inserted.
        setAltImagePreview(dataUrl);
        setAltText("");
        setCaption("");
        setShowAltInput(true);
        setTimeout(() => altInputRef.current?.focus(), 100);
      };
      preview.onerror = () => {
        console.error("Failed to read image dimensions");
        setUploading(false);
      };
      preview.src = dataUrl;
      // Track for later upload
      pendingImagesRef.current[dataUrl] = file;
    };
    reader.onerror = () => {
      console.error("Failed to read file");
      setUploading(false);
    };
    reader.readAsDataURL(file);
    // Reset input so same file can be selected again
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [editor]);

  const handleSetLink = useCallback(() => {
    if (!editor) return;
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkUrl("");
      setShowLinkInput(false);
    }
  }, [editor, linkUrl]);

  const handleRemoveLink = useCallback(() => {
    editor?.chain().focus().unsetLink().run();
    setShowLinkInput(false);
    setLinkUrl("");
  }, [editor]);

  // --- Alt text handlers ---
  const handleSetAltText = useCallback(() => {
    if (!editor || !altImagePreview) return;

    // Traverse the document to find the image node by its src attribute.
    // This is more reliable than updateAttributes (which depends on selection),
    // because the alt dialog may have shifted focus away from the image.
    // We find the position first, then apply the update — never mutate state
    // while iterating over it.
    let targetPos: number | undefined;
    editor.state.doc.descendants((node, pos) => {
      if (node.type.name === "image" && node.attrs.src === altImagePreview) {
        targetPos = pos;
        return false; // stop traversal
      }
    });

    if (targetPos !== undefined) {
      editor
        .chain()
        .focus()
        .setNodeSelection(targetPos)
        .updateAttributes("image", { alt: altText, dataCaption: caption })
        .run();
    }

    setShowAltInput(false);
    setAltImagePreview(null);
    setAltText("");
    setCaption("");
  }, [editor, altText, caption, altImagePreview]);

  const handleCancelAltText = useCallback(() => {
    setShowAltInput(false);
    setAltImagePreview(null);
    setAltText("");
    setCaption("");
  }, []);

  // Detect when an image is clicked in the editor to show alt edit popup
  const handleEditorClick = useCallback((e: React.MouseEvent) => {
    if (!editor) return;
    // Read attributes directly from the clicked DOM element — more reliable
    // than editor.getAttributes() which depends on the editor's selection state.
    const target = e.target as HTMLElement;
    if (target.tagName !== "IMG") return;

    const src = target.getAttribute("src");
    const alt = target.getAttribute("alt") || "";
    // Prefer the surrounding <figure>/<figcaption> text (most reliable), then
    // fall back to the img's data-caption attribute.
    const figure = target.closest("figure");
    const existingCaption =
      figure?.querySelector("figcaption")?.textContent?.trim() ||
      target.getAttribute("data-caption") ||
      target.getAttribute("datacaption") ||
      "";
    if (!src) return;

    setAltImagePreview(src);
    setAltText(alt);
    setCaption(existingCaption);
    setShowAltInput(true);
    setTimeout(() => altInputRef.current?.focus(), 100);
  }, [editor]);

  if (!editor) return null;

  const ToolButton = ({ onClick, active, children, title }: any) => (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`rounded-lg p-1.5 transition-all ${
        active
          ? "bg-teal-100 text-teal-700 shadow-sm"
          : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"
      }`}
    >
      {children}
    </button>
  );

  const Divider = () => <span className="mx-0.5 h-5 w-px bg-slate-200" />;

  // Which block the caret sits in — shown in the toolbar at all times
  const activeHeadingLevel = [1, 2, 3].find((level) => editor.isActive("heading", { level })) ?? 0;
  const activeBlockLabel =
    HEADING_OPTIONS.find((option) => option.level === activeHeadingLevel)?.label ?? "Paragraph";

  const applyHeading = (level: number) => {
    if (level === 0) editor.chain().focus().setParagraph().run();
    else editor.chain().focus().setHeading({ level: level as 1 | 2 | 3 }).run();
    setShowHeadingMenu(false);
  };

  const goToHeading = (pos: number) => {
    editor.chain().focus().setTextSelection(pos + 1).scrollIntoView().run();
  };

  return (
    <div className="relative rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Toolbar — sticks to the top of the scroll area so the heading controls
          stay reachable however far down the article you are writing. */}
      <div className="sticky top-0 z-30 flex flex-wrap items-center gap-0.5 rounded-t-xl border-b border-slate-200 bg-slate-50 px-2 py-1.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        {/* Text Formatting */}
        <ToolButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Bold (Ctrl+B)">
          <Bold className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Italic (Ctrl+I)">
          <Italic className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")} title="Underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")} title="Strikethrough">
          <Strikethrough className="h-4 w-4" />
        </ToolButton>

        <Divider />

        {/* Current block type — always visible, so you can see (and change) the
            heading level of the line you are writing without hunting for it. */}
        <div className="relative" ref={headingMenuRef}>
          <button
            type="button"
            onClick={() => setShowHeadingMenu((value) => !value)}
            title="Block type"
            className={`flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium transition-all ${
              activeHeadingLevel > 0
                ? "bg-teal-100 text-teal-700 shadow-sm"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            }`}
          >
            <span className="w-[68px] text-left">{activeBlockLabel}</span>
            <ChevronDown className="h-3 w-3" />
          </button>
          {showHeadingMenu && (
            <div className="absolute left-0 top-full z-40 mt-1 w-40 rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
              {HEADING_OPTIONS.map((option) => (
                <button
                  key={option.level}
                  type="button"
                  onClick={() => applyHeading(option.level)}
                  className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-xs hover:bg-slate-50 ${
                    activeHeadingLevel === option.level ? "font-semibold text-teal-600" : "text-slate-600"
                  }`}
                >
                  <span style={{ fontSize: option.level === 0 ? 12 : 18 - option.level * 2 }}>
                    {option.label}
                  </span>
                  {activeHeadingLevel === option.level && <span>&#10003;</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <Divider />

        {/* Headings */}
        <ToolButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive("heading", { level: 1 })} title="Heading 1">
          <Heading1 className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="Heading 2">
          <Heading2 className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="Heading 3">
          <Heading3 className="h-4 w-4" />
        </ToolButton>

        <Divider />

        {/* Lists */}
        <ToolButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Bullet List">
          <List className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Ordered List">
          <ListOrdered className="h-4 w-4" />
        </ToolButton>

        <Divider />

        {/* Alignment */}
        <ToolButton onClick={() => editor.chain().focus().setTextAlign("left").run()} active={editor.isActive({ textAlign: "left" })} title="Align Left">
          <AlignLeft className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().setTextAlign("center").run()} active={editor.isActive({ textAlign: "center" })} title="Align Center">
          <AlignCenter className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().setTextAlign("right").run()} active={editor.isActive({ textAlign: "right" })} title="Align Right">
          <AlignRight className="h-4 w-4" />
        </ToolButton>

        <Divider />

        {/* Block Elements */}
        <ToolButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Blockquote">
          <Quote className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive("codeBlock")} title="Code Block">
          <Code className="h-4 w-4" />
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().setHorizontalRule().run()} active={false} title="Horizontal Rule">
          <Minus className="h-4 w-4" />
        </ToolButton>

        <Divider />

        {/* Tables */}
        <ToolButton
          onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
          active={editor.isActive("table")}
          title="Insert Table"
        >
          <Table2 className="h-4 w-4" />
        </ToolButton>
        {editor.isActive("table") && (
          <>
            <ToolButton onClick={() => editor.chain().focus().addRowAfter().run()} active={false} title="Add Row Below">
              <Plus className="h-4 w-4" />
            </ToolButton>
            <ToolButton onClick={() => editor.chain().focus().addColumnAfter().run()} active={false} title="Add Column Right">
              <Plus className="h-4 w-4" />
            </ToolButton>
            <ToolButton onClick={() => editor.chain().focus().deleteRow().run()} active={false} title="Delete Row">
              <Trash2 className="h-4 w-4" />
            </ToolButton>
            <ToolButton onClick={() => editor.chain().focus().deleteColumn().run()} active={false} title="Delete Column">
              <Trash2 className="h-4 w-4" />
            </ToolButton>
            <ToolButton onClick={() => editor.chain().focus().deleteTable().run()} active={false} title="Delete Table">
              <Trash2 className="h-4 w-4" />
            </ToolButton>
          </>
        )}

        <Divider />

        {/* FAQ Block */}
        <ToolButton
          onClick={() => editor.chain().focus().insertContent({ type: "faqBlock" }).run()}
          active={editor.isActive("faqBlock")}
          title="Insert FAQ Block (place FAQs anywhere in the article)"
        >
          <ListPlus className="h-4 w-4" />
        </ToolButton>

        <Divider />

        {/* Link & Image */}
        <div className="relative">
          <ToolButton
            onClick={() => {
              if (editor.isActive("link")) {
                handleRemoveLink();
              } else {
                setShowLinkInput(!showLinkInput);
                if (editor.state.selection.empty) {
                  setLinkUrl("");
                } else {
                  const href = editor.getAttributes("link").href || "";
                  setLinkUrl(href);
                }
              }
            }}
            active={editor.isActive("link")}
            title="Link"
          >
            <Link className="h-4 w-4" />
          </ToolButton>
          {showLinkInput && (
            <div className="absolute left-0 top-full z-10 mt-1 flex w-64 items-center gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://..."
                className="min-w-0 flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
                onKeyDown={(e) => e.key === "Enter" && handleSetLink()}
              />
              <button
                type="button"
                onClick={handleSetLink}
                className="rounded-lg bg-teal-500 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-teal-600"
              >
                Set
              </button>
              <button
                type="button"
                onClick={handleRemoveLink}
                className="rounded-lg px-2.5 py-1.5 text-xs text-slate-500 hover:bg-slate-100"
              >
                X
              </button>
            </div>
          )}
        </div>

        <ToolButton onClick={handleImageUpload} active={false} title={uploading ? "Uploading..." : "Upload Image"}>
          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Image className="h-4 w-4" />}
        </ToolButton>

        {/* Hidden file input for image upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelected}
        />

        <div className="ml-auto flex items-center gap-0.5">
          <Divider />
          <ToolButton onClick={() => editor.chain().focus().undo().run()} active={false} title="Undo (Ctrl+Z)">
            <Undo className="h-4 w-4" />
          </ToolButton>
          <ToolButton onClick={() => editor.chain().focus().redo().run()} active={false} title="Redo (Ctrl+Shift+Z)">
            <Redo className="h-4 w-4" />
          </ToolButton>
        </div>
      </div>

      {/* Editor Content */}
      <div onClick={handleEditorClick}>
        <EditorContent editor={editor} />
      </div>

      {/* Heading outline — the article's structure at a glance; click to jump */}
      {!hideStatusBar && showOutline && (
        <div className="max-h-56 overflow-y-auto border-t border-slate-100 bg-slate-50/60 px-3 py-2">
          {docStats.headings.length === 0 ? (
            <p className="py-1 text-[11px] text-slate-400">
              No headings yet — break the content up with H2 subheadings.
            </p>
          ) : (
            <ul className="space-y-0.5">
              {docStats.headings.map((heading, i) => (
                <li key={`${heading.pos}-${i}`}>
                  <button
                    type="button"
                    onClick={() => goToHeading(heading.pos)}
                    className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-left text-[11px] text-slate-600 hover:bg-white hover:text-teal-700"
                    style={{ paddingLeft: `${(heading.level - 1) * 12 + 6}px` }}
                  >
                    <span className="shrink-0 rounded bg-slate-200 px-1 text-[9px] font-bold text-slate-500">
                      H{heading.level}
                    </span>
                    <span className="truncate">{heading.text || "(empty heading)"}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Live status bar — word count, structure and alt-text warnings while you write */}
      {!hideStatusBar && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-b-xl border-t border-slate-100 bg-slate-50/60 px-3 py-1.5 text-[11px] text-slate-500">
          <button
            type="button"
            onClick={() => setShowOutline((value) => !value)}
            className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-medium text-slate-600 hover:bg-white"
            title="Show the heading outline"
          >
            <ListTree className="h-3 w-3" />
            Outline ({docStats.headings.length})
          </button>
          <span className="h-3 w-px bg-slate-200" />
          <span>{docStats.words} words</span>
          <span>{docStats.readingMinutes} min read</span>
          <span>
            H1 {docStats.headings.filter((h) => h.level === 1).length} · H2{" "}
            {docStats.headings.filter((h) => h.level === 2).length} · H3{" "}
            {docStats.headings.filter((h) => h.level === 3).length}
          </span>
          {docStats.images > 0 && (
            <span className={docStats.imagesMissingAlt > 0 ? "font-medium text-rose-600" : ""}>
              {docStats.imagesMissingAlt > 0
                ? `${docStats.imagesMissingAlt}/${docStats.images} images missing alt text`
                : `${docStats.images} images, all with alt text`}
            </span>
          )}
        </div>
      )}

      {/* Alt Text Dialog */}
      {showAltInput && altImagePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-center gap-4">
              {/* Image preview thumbnail */}
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-slate-200">
                <img
                  src={altImagePreview}
                  alt="Preview"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800">Image Alt Text &amp; Caption</h3>
                <p className="text-xs text-slate-500">
                  Alt text for accessibility &amp; SEO, plus an optional caption shown below the image
                </p>
              </div>
            </div>
            <input
              ref={altInputRef}
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Alt text — e.g. Mountain view from Mardi Himal base camp"
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSetAltText();
                if (e.key === "Escape") handleCancelAltText();
              }}
            />
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption (optional) — e.g. Annapurna South from Mardi Himal Base Camp"
              className="mt-2 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSetAltText();
                if (e.key === "Escape") handleCancelAltText();
              }}
            />
            <div className="mt-3 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleCancelAltText}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                Skip
              </button>
              <button
                type="button"
                onClick={handleSetAltText}
                className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});
