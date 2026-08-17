"use client";

import { Node, mergeAttributes } from "@tiptap/core";
import {
  ReactNodeViewRenderer,
  NodeViewWrapper,
  type NodeViewProps,
} from "@tiptap/react";
import { useState } from "react";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import {
  decodeFaqData,
  encodeFaqData,
  defaultFaqData,
  type FAQData,
  type FAQItem,
} from "@/lib/faq-block";

/**
 * FAQ block — a self-contained, drag-and-drop block that the author can place
 * anywhere inside the article (not just at the end). It serializes to:
 *
 *   <div class="faq-block" data-faq="<base64 json>"></div>
 *
 * and is re-hydrated into a FAQAccordion on the public site (see
 * components/blog/RichTextContent.tsx).
 */
export const FAQBlock = Node.create({
  name: "faqBlock",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,

  addAttributes() {
    return {
      data: {
        default: defaultFaqData() as FAQData,
        parseHTML: (el) => decodeFaqData(el.getAttribute("data-faq")),
        // ProseMirror writes attribute keys verbatim, so the camelCase attr
        // must be mapped explicitly to the kebab-case data-faq attribute.
        renderHTML: (attrs) =>
          attrs.data?.items?.length || attrs.data?.heading
            ? { "data-faq": encodeFaqData(attrs.data as FAQData) }
            : {},
      },
    };
  },

  parseHTML() {
    return [{ tag: "div[data-faq]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { class: "faq-block" }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(FAQBlockView);
  },
});

function FAQBlockView({ node, updateAttributes, deleteNode }: NodeViewProps) {
  const [data, setData] = useState<FAQData>(node.attrs.data || defaultFaqData());

  const commit = (next: FAQData) => {
    setData(next);
    updateAttributes({ data: next });
  };

  const updateItem = (i: number, field: keyof FAQItem, value: string) => {
    const items = data.items.map((it, idx) =>
      idx === i ? { ...it, [field]: value } : it
    );
    commit({ ...data, items });
  };

  const addItem = () =>
    commit({ ...data, items: [...data.items, { question: "", answer: "" }] });

  const removeItem = (i: number) =>
    commit({ ...data, items: data.items.filter((_, idx) => idx !== i) });

  return (
    <NodeViewWrapper
      data-faq-block-editor
      className="faq-block-editor my-4 rounded-xl border-2 border-dashed border-teal-300 bg-teal-50/40 p-3 transition-colors hover:border-teal-400"
    >
      {/* Header */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-100 px-2.5 py-1 text-xs font-semibold text-teal-700">
          <GripVertical className="h-3.5 w-3.5" />
          FAQ Block
        </span>
        <button
          type="button"
          onClick={deleteNode}
          title="Delete FAQ block"
          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Heading + description */}
      <input
        value={data.heading || ""}
        onChange={(e) => commit({ ...data, heading: e.target.value })}
        placeholder="FAQ heading (e.g. Frequently Asked Questions)"
        className="mb-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 placeholder:font-normal focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
      />
      <input
        value={data.description || ""}
        onChange={(e) => commit({ ...data, description: e.target.value })}
        placeholder="Optional short description above the FAQs"
        className="mb-3 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
      />

      {/* FAQ items */}
      <div className="space-y-2">
        {data.items.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-300 bg-white/60 px-3 py-3 text-center text-xs text-slate-400">
            No FAQs yet — click &ldquo;Add FAQ&rdquo; below.
          </p>
        )}
        {data.items.map((item, i) => (
          <div
            key={i}
            className="group rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Q{i + 1}
              </span>
              <button
                type="button"
                onClick={() => removeItem(i)}
                title="Remove this FAQ"
                className="rounded-md p-1 text-slate-300 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
            <input
              value={item.question}
              onChange={(e) => updateItem(i, "question", e.target.value)}
              placeholder="Question"
              className="mb-1.5 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm font-medium text-slate-800 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
            />
            <textarea
              value={item.answer}
              onChange={(e) => updateItem(i, "answer", e.target.value)}
              placeholder="Answer"
              rows={2}
              className="w-full resize-y rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm text-slate-600 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-100"
            />
          </div>
        ))}
      </div>

      {/* Add FAQ */}
      <button
        type="button"
        onClick={addItem}
        className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-teal-300 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-50"
      >
        <Plus className="h-3.5 w-3.5" />
        Add FAQ
      </button>
    </NodeViewWrapper>
  );
}
