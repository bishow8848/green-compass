"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { savePageContent } from "./actions";
import { Plus, Trash2, Save, Loader2, GripVertical, Bold, Italic, List, ListOrdered, Heading2 } from "lucide-react";
import { ImageUpload, type ImageUploadHandle } from "@/components/admin/trek-sections/ImageUpload";
import { FeaturedTrekSelector } from "@/components/admin/FeaturedTrekSelector";
import { RichTextEditor, type RichTextEditorHandle } from "@/components/admin/RichTextEditor";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const defaultWhyChooseUsItems = [
  { icon: "Shield", title: "Safety First", description: "Every guide is wilderness first-aid certified with years of high-altitude experience." },
  { icon: "Heart", title: "Community Impact", description: "We invest in local communities — fair wages, school support, and sustainable practices." },
  { icon: "Award", title: "Expert Knowledge", description: "Our team has decades of combined experience across Nepal's trekking regions." },
  { icon: "Globe", title: "Sustainable Travel", description: "Leave No Trace principles, eco-friendly lodges, and carbon offset programs." },
];

const defaultAboutContent = [
  { title: "Who We Are", description: "Mardi Treks is a premier trekking and tour agency based in Pokhara, Nepal. Founded by local trekking experts with a passion for the Himalayas, we specialize in guided trekking expeditions, cultural tours, and climbing adventures across Nepal's most stunning landscapes." },
  { title: "What Makes Us Different", description: "Unlike large, impersonal tour operators, we keep our groups small, our service personal, and our commitment to sustainable tourism unwavering. When you trek with us, you're not just exploring the Himalayas — you're making a positive impact." },
];

const defaultFaqItems = [
  { question: "What is the best time for trekking in Nepal?", answer: "The best trekking seasons in Nepal are spring (March to May) and autumn (September to November). During these months, the weather is stable, temperatures are moderate, and mountain views are at their clearest." },
  { question: "Do I need a guide for trekking in Nepal?", answer: "Yes, since 2023, Nepal requires all foreign trekkers to hire a licensed guide or join a guided group for most trekking routes." },
  { question: "What permits are required for trekking?", answer: "Permits vary by region. Most treks require a TIMS card and a national park or conservation area permit. We handle all permit arrangements for our guests." },
];

const defaultTeam = {
  badge: "Our Team",
  heading: "Meet the Experts",
  members: [
    { name: "Rajesh Gurung", role: "Founder & Lead Guide", image: "" },
    { name: "Maya Sherpa", role: "Operations Manager", image: "" },
    { name: "David Thapa", role: "Senior Trek Guide", image: "" },
    { name: "Anita Rai", role: "Customer Relations", image: "" },
  ],
};

const defaultInfoCards = [
  { icon: "Mail", title: "Email Us", description: "info@marditreks.com" },
  { icon: "Phone", title: "Call Us", description: "+977-1-2345678" },
  { icon: "MapPin", title: "Office", description: "Lakeside, Pokhara, Nepal" },
  { icon: "Clock", title: "Office Hours", description: "Sun-Fri: 9AM-6PM" },
];

function ToolbarBtn({ onClick, active, children, label }: { onClick: () => void; active?: boolean; children: React.ReactNode; label: string }) {
  return (
    <button type="button" onClick={onClick} title={label}
      className={`rounded p-1.5 transition-colors ${active ? "bg-teal-100 text-teal-700" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"}`}>
      {children}
    </button>
  );
}

const defaultSocialLinks = [
  { platform: "facebook", url: "" },
  { platform: "instagram", url: "" },
  { platform: "twitter", url: "" },
  { platform: "youtube", url: "" },
];

type SectionBlock = { id: string; type: string; heading: string; description: string; content?: string };

interface Trek {
  id: string;
  title: string;
  slug: string;
  region: string;
  difficulty: string;
  duration: number;
  price: number;
  heroImage?: string | null;
  _count?: { reviews: number };
}

export function PageManagerForm({
  pageContent: saved,
  treks = [],
  initialFeaturedSectionIds = [],
  homeHeroCtas = { primaryCtaLabel: "", primaryCtaHref: "", secondaryCtaLabel: "", secondaryCtaHref: "" },
}: {
  pageContent: any;
  treks?: Trek[];
  initialFeaturedSectionIds?: string[];
  homeHeroCtas?: { primaryCtaLabel: string; primaryCtaHref: string; secondaryCtaLabel: string; secondaryCtaHref: string };
}) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [success, setSuccess] = useState(false);

  // ── RichTextEditor refs for mission & vision (deferred image upload) ──
  const missionEditorRef = useRef<RichTextEditorHandle>(null);
  const visionEditorRef = useRef<RichTextEditorHandle>(null);

  const pc = saved || {};

  // ── About state ──
  const [aboutHero, setAboutHero] = useState(pc.about?.hero || { heading: "About Mardi Treks", description: "", backgroundImage: "" });
  const [aboutSeo, setAboutSeo] = useState(pc.about?.seo || { title: "", description: "", keywords: "" });
  const [aboutTeam, setAboutTeam] = useState(() => {
    const raw = pc.about?.team;
    // Handle backward compatibility: if it's an array, convert to new object format
    if (Array.isArray(raw)) return { badge: "Our Team", heading: "Meet the Experts", members: raw };
    return raw || defaultTeam;
  });
  const [aboutGallery, setAboutGallery] = useState(pc.about?.gallery || []);
  const [aboutSections, setAboutSections] = useState<SectionBlock[]>(pc.about?.sections || []);

  // ── About new sections ──
  const [aboutCompanyStory, setAboutCompanyStory] = useState(pc.about?.companyStory || { heading: "", description: "", image: "", badge: "", highlightLabel: "", highlightTitle: "" });
  const [aboutMissionVision, setAboutMissionVision] = useState(pc.about?.missionVision || { badge: "", heading: "", missionLabel: "", visionLabel: "", mission: { heading: "Our Mission", description: "", icon: "Target" }, vision: { heading: "Our Vision", description: "", icon: "Eye" } });
  const [aboutCommitment, setAboutCommitment] = useState(pc.about?.commitment || { heading: "", items: [], badge: "" });
  const [aboutTimeline, setAboutTimeline] = useState(pc.about?.timeline || { heading: "", events: [], badge: "" });
  const [aboutProcess, setAboutProcess] = useState(pc.about?.process || { heading: "", steps: [], badge: "" });
  const [aboutFounder, setAboutFounder] = useState(pc.about?.founder || { heading: "", message: "", founderName: "", founderRole: "", founderImage: "", badge: "" });

  // ── Contact state ──
  const [contactHero, setContactHero] = useState(pc.contact?.hero || { heading: "Contact Us", description: "", backgroundImage: "" });
  const [contactSeo, setContactSeo] = useState(pc.contact?.seo || { title: "", description: "", keywords: "" });
  const [contactMapIframe, setContactMapIframe] = useState(pc.contact?.mapIframe || "");
  const [contactInfoCards, setContactInfoCards] = useState(pc.contact?.infoCards || defaultInfoCards);

  // ── Home state ──
  const [homeHero, setHomeHero] = useState({
    ...(pc.home?.hero || { badge: "", title: "", titleHighlight: "", subtitle: "", description: "", backgroundImage: "" }),
    primaryCtaLabel: homeHeroCtas.primaryCtaLabel,
    primaryCtaHref: homeHeroCtas.primaryCtaHref,
    secondaryCtaLabel: homeHeroCtas.secondaryCtaLabel,
    secondaryCtaHref: homeHeroCtas.secondaryCtaHref,
  });
  const [homeSections, setHomeSections] = useState(pc.home?.sections || { featuredTreksHeading: "", featuredTreksDescription: "", topRatedTreksHeading: "", topRatedTreksDescription: "", reviewsHeading: "", reviewsDescription: "", blogHeading: "", blogDescription: "" });
  const [homeWhy, setHomeWhy] = useState(pc.home?.whyChooseUs || { heading: "Why Trek With Us?", subtitle: "Discover the Difference", bgImage: "", items: defaultWhyChooseUsItems });
  const [homeContact, setHomeContact] = useState(() => {
    const c = pc.home?.contact;
    return { heading: c?.heading || "Get in Touch", description: c?.description || "", infoCards: c?.infoCards || defaultInfoCards };
  });

  // ── Home About Us section ──
  const defaultAboutUs = {
    enabled: true,
    heading: "Nepal's Premier Trekking & Adventure Company",
    subheading: "Who We Are",
    image: "",
    content: defaultAboutContent,
    trekId: "",
    quote: "We pour our local knowledge into every itinerary so you experience the real Nepal.",
    stats: [
      { icon: "Award", label: "Years of Experience", value: "8+" },
      { icon: "TrendingUp", label: "Trek Organized", value: "100+" },
      { icon: "Mountain", label: "Mardi Himal Packages", value: "3+" },
      { icon: "Shield", label: "Certified Guides", value: "15+" },
    ],
    primaryCta: { label: "Learn More About Us", href: "/about" },
    secondaryCta: { label: "Get in Touch", href: "/contact" },
  };
  const [homeAbout, setHomeAbout] = useState(pc.home?.aboutUs || defaultAboutUs);
  // ── Home FAQ section ──
  const [homeFaq, setHomeFaq] = useState(pc.home?.faq || { enabled: true, heading: "Frequently Asked Questions About Trekking in Nepal", description: "Everything you need to know before your Himalayan adventure.", items: defaultFaqItems });

  function setHomeHeroField(field: string, val: any) { setHomeHero((prev: any) => ({ ...prev, [field]: val })); }
  function setHomeSectionField(field: string, val: any) { setHomeSections((prev: any) => ({ ...prev, [field]: val })); }
  function addHomeWhyItem() { setHomeWhy((prev: any) => ({ ...prev, items: [...prev.items, { icon: "Shield", title: "", description: "" }] })); }
  function updateHomeWhyItem(i: number, field: string, val: any) { setHomeWhy((prev: any) => { const items = [...prev.items]; items[i] = { ...items[i], [field]: val }; return { ...prev, items }; }); }
  function removeHomeWhyItem(i: number) { setHomeWhy((prev: any) => ({ ...prev, items: prev.items.filter((_: any, idx: number) => idx !== i) })); }
  function addHomeInfoCard() { setHomeContact((prev: any) => ({ ...prev, infoCards: [...prev.infoCards, { title: "", description: "" }] })); }
  function updateHomeInfoCard(i: number, field: string, val: any) { setHomeContact((prev: any) => { const cards = [...prev.infoCards]; cards[i] = { ...cards[i], [field]: val }; return { ...prev, infoCards: cards }; }); }
  function removeHomeInfoCard(i: number) { setHomeContact((prev: any) => ({ ...prev, infoCards: prev.infoCards.filter((_: any, idx: number) => idx !== i) })); }

  // ── Home SEO ──
  const [homeSeo, setHomeSeo] = useState(pc.home?.seo || { title: "", description: "", keywords: "" });

  // ── Blog state ──
  const [blogHero, setBlogHero] = useState(pc.blog?.hero || { heading: "Our Blog", description: "", backgroundImage: "" });
  const [blogSeo, setBlogSeo] = useState(pc.blog?.seo || { title: "", description: "", keywords: "" });

  // ── Image upload refs (for deferred Cloudinary upload on save) ──
  const imageRefs = useRef<Record<string, ImageUploadHandle | null>>({});
  const setImageRef = useCallback((key: string) => {
    return (el: ImageUploadHandle | null) => { imageRefs.current[key] = el; };
  }, []);

  // ── Footer state ──
  const defaultPartners: { name: string; src: string }[] = [];
  const defaultCompanyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Travel Blog", href: "/blog" },
    { label: "Plan Your Trip", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ];
  const defaultUsefulLinks = [
    { label: "Travel Blog", href: "/blog" },
    { label: "Plan Your Trip", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ];
  const defaultRecommendedOn: { name: string; src: string }[] = [];
  const defaultRepresentative = {
    name: "",
    title: "",
    avatar: "",
    phone: "",
    whatsapp: "",
  };
  const defaultRecognitions: { name: string; src: string }[] = [];
  const defaultBottomLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Contact", href: "/contact" },
  ];

  const footerDefaults = {
    email: "info@marditreks.com",
    phone: "+977-1-2345678",
    address: "Lakeside, Pokhara, Nepal",
    socialLinks: defaultSocialLinks,
    copyright: `© ${new Date().getFullYear()} Mardi Treks. All rights reserved.`,
    trustedBadge: "Trusted & Certified",
    associatedHeading: "We're Associated With",
    partners: defaultPartners,
    activitiesHeading: "Activities",
    companyHeading: "Company",
    companyLinks: defaultCompanyLinks,
    usefulLinksHeading: "Useful Links",
    usefulLinks: defaultUsefulLinks,
    recommendedLabel: "Recommended On:",
    recommendedOn: defaultRecommendedOn,
    followUsLabel: "Follow Us On:",
    card1Title: "Mardi Treks",
    card2Title: "Speak with a Representative",
    representative: defaultRepresentative,
    card3Title: "Recognitions",
    recognitions: defaultRecognitions,
    bottomLinks: defaultBottomLinks,
  };

  const [footer, setFooter] = useState({ ...footerDefaults, ...(pc.footer || {}) });

  function setFooterField(field: string, val: any) {
    setFooter((prev: any) => ({ ...prev, [field]: val }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSaving(true);

    // Upload any pending images to Cloudinary before saving — capture returned IDs
    const uploadResults = await Promise.all(
      Object.entries(imageRefs.current).map(async ([key, ref]) => {
        const id = await ref?.save();
        return { key, id };
      })
    );
    const uploadedMap: Record<string, string> = {};
    for (const { key, id } of uploadResults) {
      if (id) uploadedMap[key] = id;
    }

    // Use the form's own FormData so hidden inputs from FeaturedTrekSelector are included
    const fd = new FormData(form);

    // Helper: use uploaded ID if available, else fall back to state value
    function orUploaded(key: string, stateVal: string): string {
      return uploadedMap[key] || stateVal;
    }
    // Helper for gallery items: override imageId if uploaded
    function overrideGallery(items: any[], sectionKey: string): any[] {
      return items.map((item: any, i: number) => ({
        ...item,
        imageId: uploadedMap[`${sectionKey}-${i}`] || item.imageId || "",
      }));
    }

    // Home (override with state-managed values)
    fd.set("home_hero_title", homeHero.title);
    fd.set("home_hero_title_highlight", homeHero.titleHighlight);
    fd.set("home_hero_background", orUploaded("homeHero", homeHero.backgroundImage));
    fd.set("home_hero_primary_cta_label", homeHero.primaryCtaLabel || "");
    fd.set("home_hero_primary_cta_href", homeHero.primaryCtaHref || "");
    fd.set("home_hero_secondary_cta_label", homeHero.secondaryCtaLabel || "");
    fd.set("home_hero_secondary_cta_href", homeHero.secondaryCtaHref || "");
    fd.set("home_sections", JSON.stringify(homeSections));
    fd.set("home_why_heading", homeWhy.heading);
    fd.set("home_why_subtitle", homeWhy.subtitle);
    fd.set("home_why_bg", orUploaded("homeWhyBg", homeWhy.bgImage));
    fd.set("home_why_items", JSON.stringify(homeWhy.items));
    fd.set("home_contact_heading", homeContact.heading);
    fd.set("home_contact_description", homeContact.description);
    fd.set("home_contact_info_cards", JSON.stringify(homeContact.infoCards));
    fd.set("home_about_enabled", homeAbout.enabled ? "true" : "false");
    fd.set("home_about_heading", homeAbout.heading);
    fd.set("home_about_subheading", homeAbout.subheading);
    fd.set("home_about_image", homeAbout.image);
    fd.set("home_about_trek_id", homeAbout.trekId || "");
    fd.set("home_about_quote", homeAbout.quote || "");
    fd.set("home_about_stats", JSON.stringify(homeAbout.stats || []));
    fd.set("home_about_primary_cta", JSON.stringify(homeAbout.primaryCta || {}));
    fd.set("home_about_secondary_cta", JSON.stringify(homeAbout.secondaryCta || {}));
    fd.set("home_about_content", JSON.stringify(homeAbout.content));
    fd.set("home_faq_enabled", homeFaq.enabled ? "true" : "false");
    fd.set("home_faq_heading", homeFaq.heading);
    fd.set("home_faq_description", homeFaq.description);
    fd.set("home_faq_items", JSON.stringify(homeFaq.items));
    fd.set("home_seo_title", homeSeo.title || "");
    fd.set("home_seo_description", homeSeo.description || "");
    fd.set("home_seo_keywords", homeSeo.keywords || "");

    // About
    fd.set("about_hero_heading", aboutHero.heading);
    fd.set("about_hero_description", aboutHero.description);
    fd.set("about_hero_background", orUploaded("aboutHero", aboutHero.backgroundImage));
    fd.set("about_seo_title", aboutSeo.title);
    fd.set("about_seo_description", aboutSeo.description);
    fd.set("about_seo_keywords", aboutSeo.keywords || "");
    fd.set("about_sections", JSON.stringify(aboutSections));
    // WhyChooseUs is no longer managed here — the About page reads it from Home settings
    fd.set("about_team", JSON.stringify({
      ...aboutTeam,
      members: (aboutTeam.members || []).map((m: any, i: number) => ({
        ...m,
        image: uploadedMap[`team-${i}`] || m.image || "",
      })),
    }));
    fd.set("about_gallery", JSON.stringify(overrideGallery(aboutGallery, "aboutGallery")));

    // About - new sections
    fd.set("about_company_story", JSON.stringify(aboutCompanyStory));

    // Process pending images in mission & vision rich text editors
    const [missionHtml, visionHtml] = await Promise.all([
      missionEditorRef.current?.processPendingImages() ?? aboutMissionVision.mission?.description ?? "",
      visionEditorRef.current?.processPendingImages() ?? aboutMissionVision.vision?.description ?? "",
    ]);
    const processedMissionVision = {
      ...aboutMissionVision,
      mission: { ...aboutMissionVision.mission, description: missionHtml },
      vision: { ...aboutMissionVision.vision, description: visionHtml },
    };
    fd.set("about_mission_vision", JSON.stringify(processedMissionVision));
    fd.set("about_commitment", JSON.stringify(aboutCommitment));
    fd.set("about_timeline", JSON.stringify(aboutTimeline));
    fd.set("about_process", JSON.stringify(aboutProcess));
    fd.set("about_founder", JSON.stringify(aboutFounder));

    // Contact
    fd.set("contact_hero_heading", contactHero.heading);
    fd.set("contact_hero_description", contactHero.description);
    fd.set("contact_hero_background", orUploaded("contactHero", contactHero.backgroundImage));
    fd.set("contact_seo_title", contactSeo.title);
    fd.set("contact_seo_description", contactSeo.description);
    fd.set("contact_seo_keywords", contactSeo.keywords || "");
    fd.set("contact_map_iframe", contactMapIframe);
    fd.set("contact_info_cards", JSON.stringify(contactInfoCards));

    // Blog
    fd.set("blog_hero_heading", blogHero.heading);
    fd.set("blog_hero_description", blogHero.description);
    fd.set("blog_hero_background", orUploaded("blogHero", blogHero.backgroundImage));
    fd.set("blog_seo_title", blogSeo.title);
    fd.set("blog_seo_description", blogSeo.description);
    fd.set("blog_seo_keywords", blogSeo.keywords || "");

    // Footer
    fd.set("footer_email", footer.email);
    fd.set("footer_phone", footer.phone);
    fd.set("footer_address", footer.address);
    fd.set("footer_social_links", JSON.stringify(footer.socialLinks));
    fd.set("footer_copyright", footer.copyright);
    fd.set("footer_trusted_badge", footer.trustedBadge);
    fd.set("footer_associated_heading", footer.associatedHeading);
    fd.set("footer_partners", JSON.stringify(footer.partners.map((p: any, i: number) => ({
      ...p,
      src: uploadedMap[`footer-partner-${i}`] || p.src || "",
    }))));
    fd.set("footer_activities_heading", footer.activitiesHeading);
    fd.set("footer_company_heading", footer.companyHeading);
    fd.set("footer_company_links", JSON.stringify(footer.companyLinks));
    fd.set("footer_useful_links_heading", footer.usefulLinksHeading);
    fd.set("footer_useful_links", JSON.stringify(footer.usefulLinks));
    fd.set("footer_recommended_label", footer.recommendedLabel);
    fd.set("footer_recommended_on", JSON.stringify(footer.recommendedOn.map((item: any, i: number) => ({
      ...item,
      src: uploadedMap[`footer-recommended-${i}`] || item.src || "",
    }))));
    fd.set("footer_follow_us_label", footer.followUsLabel);
    fd.set("footer_card1_title", footer.card1Title);
    fd.set("footer_card2_title", footer.card2Title);
    fd.set("footer_representative", JSON.stringify({
      ...footer.representative,
      avatar: uploadedMap["footer-rep-avatar"] || footer.representative?.avatar || "",
    }));
    fd.set("footer_card3_title", footer.card3Title);
    fd.set("footer_recognitions", JSON.stringify(footer.recognitions.map((badge: any, i: number) => ({
      ...badge,
      src: uploadedMap[`footer-recognition-${i}`] || badge.src || "",
    }))));
    fd.set("footer_bottom_links", JSON.stringify(footer.bottomLinks));

    try {
      await savePageContent(fd);
      // Images committed to DB successfully
    } catch {
      // redirect() throws NEXT_REDIRECT — that's expected
    }
    setSaving(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  }

  const tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
    { id: "blog", label: "Blog" },
    { id: "footer", label: "Footer" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-700">✅ Page content saved successfully!</div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 border-b border-slate-200">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.id ? "border-teal-600 text-teal-700" : "border-transparent text-slate-500 hover:text-slate-700"
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ───────────── HOME TAB ───────────── */}
      {activeTab === "home" && (
        <div className="space-y-8">
          {/* SEO */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">SEO / Meta</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Title</label>
                <input value={homeSeo.title} onChange={(e) => setHomeSeo({ ...homeSeo, title: e.target.value })} placeholder="Mardi Treks | Premier Trekking & Tour Agency" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Description</label>
                <textarea rows={2} value={homeSeo.description || ""} onChange={(e) => setHomeSeo({ ...homeSeo, description: e.target.value })} placeholder="Experience the Himalayas with Mardi Treks..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Keywords</label>
                <input value={homeSeo.keywords} onChange={(e) => setHomeSeo({ ...homeSeo, keywords: e.target.value })} placeholder="trekking nepal, everest base camp, annapurna" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Hero Section</h3>
                <p className="text-xs text-slate-400">Headline, highlight and CTA buttons for the 3D-globe hero on the homepage.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Title</label>
                <input value={homeHero.title} onChange={(e) => setHomeHeroField("title", e.target.value)} placeholder="e.g. Go where the world feels" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Title Highlight</label>
                <input value={homeHero.titleHighlight} onChange={(e) => setHomeHeroField("titleHighlight", e.target.value)} placeholder="Highlighted word in title" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Primary CTA Label</label>
                <input value={homeHero.primaryCtaLabel || ""} onChange={(e) => setHomeHeroField("primaryCtaLabel", e.target.value)} placeholder="Start exploring" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Primary CTA Link</label>
                <input value={homeHero.primaryCtaHref || ""} onChange={(e) => setHomeHeroField("primaryCtaHref", e.target.value)} placeholder="/search" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Secondary CTA Label</label>
                <input value={homeHero.secondaryCtaLabel || ""} onChange={(e) => setHomeHeroField("secondaryCtaLabel", e.target.value)} placeholder="View field notes" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Secondary CTA Link</label>
                <input value={homeHero.secondaryCtaHref || ""} onChange={(e) => setHomeHeroField("secondaryCtaHref", e.target.value)} placeholder="/blog" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Background Image</label>
                <ImageUpload ref={setImageRef("homeHero")} value={homeHero.backgroundImage} onChange={(id) => setHomeHeroField("backgroundImage", id)} label="Hero Image" />
              </div>
            </div>
          </section>

          {/* Trek Selectors */}
          <FeaturedTrekSelector
            treks={treks}
            initialFeaturedSectionIds={initialFeaturedSectionIds}
          />

          {/* Section Headings */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Section Headings</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Featured Treks Heading</label>
                <input value={homeSections.featuredTreksHeading} onChange={(e) => setHomeSectionField("featuredTreksHeading", e.target.value)} placeholder="Featured Treks" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Featured Treks Description</label>
                <input value={homeSections.featuredTreksDescription} onChange={(e) => setHomeSectionField("featuredTreksDescription", e.target.value)} placeholder="Description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Top Rated Heading</label>
                <input value={homeSections.topRatedTreksHeading} onChange={(e) => setHomeSectionField("topRatedTreksHeading", e.target.value)} placeholder="Top Rated Treks" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Top Rated Description</label>
                <input value={homeSections.topRatedTreksDescription} onChange={(e) => setHomeSectionField("topRatedTreksDescription", e.target.value)} placeholder="Description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Reviews Heading</label>
                <input value={homeSections.reviewsHeading} onChange={(e) => setHomeSectionField("reviewsHeading", e.target.value)} placeholder="Guest Reviews" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Reviews Description</label>
                <input value={homeSections.reviewsDescription} onChange={(e) => setHomeSectionField("reviewsDescription", e.target.value)} placeholder="Description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Blog Heading</label>
                <input value={homeSections.blogHeading} onChange={(e) => setHomeSectionField("blogHeading", e.target.value)} placeholder="Latest from Blog" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Blog Description</label>
                <input value={homeSections.blogDescription} onChange={(e) => setHomeSectionField("blogDescription", e.target.value)} placeholder="Description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Why Choose Us</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Heading</label>
                <input value={homeWhy.heading} onChange={(e) => setHomeWhy((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Why Trek With Us?" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Subtitle</label>
                <input value={homeWhy.subtitle} onChange={(e) => setHomeWhy((prev: any) => ({ ...prev, subtitle: e.target.value }))} placeholder="Subtitle" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Background Image</label>
                <ImageUpload ref={setImageRef("homeWhyBg")} value={homeWhy.bgImage} onChange={(id) => setHomeWhy((prev: any) => ({ ...prev, bgImage: id }))} label="Background Image" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">Feature Items</p>
              {homeWhy.items.map((item: any, i: number) => (
                <div key={i} className="flex gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <select value={item.icon} onChange={(e) => updateHomeWhyItem(i, "icon", e.target.value)} className="rounded border border-slate-200 px-2 py-1.5 text-sm">
                    {["Shield", "Heart", "Award", "Globe", "Users", "Mountain", "Compass", "Leaf", "Star", "Smile"].map((ic) => <option key={ic} value={ic}>{ic}</option>)}
                  </select>
                  <input value={item.title} onChange={(e) => updateHomeWhyItem(i, "title", e.target.value)} placeholder="Title" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <input value={item.description} onChange={(e) => updateHomeWhyItem(i, "description", e.target.value)} placeholder="Description" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <button type="button" onClick={() => removeHomeWhyItem(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={addHomeWhyItem} className="text-xs text-teal-600 hover:text-teal-700">+ Add item</button>
            </div>
          </section>

          {/* About Us Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">About Us / Who We Are</h3>
                <p className="text-xs text-slate-400">Shown as &quot;Nepal&apos;s Premier Trekking &amp; Adventure Company&quot; section</p>
              </div>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input
                  type="checkbox"
                  checked={homeAbout.enabled}
                  onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, enabled: e.target.checked }))}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                Show section
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Heading</label>
                <input value={homeAbout.heading} onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Nepal's Premier Trekking & Adventure Company" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Subheading / Label</label>
                <input value={homeAbout.subheading} onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, subheading: e.target.value }))} placeholder="Who We Are" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Featured Trek (shown as background image on right side)</label>
                <select
                  value={homeAbout.trekId || ""}
                  onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, trekId: e.target.value }))}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="">— Select a trek —</option>
                  {treks.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Quote */}
            <div className="mt-4 sm:col-span-2">
              <label className="block text-xs font-medium text-slate-500 mb-1">Quote Text (shown as pinned note on the right)</label>
              <textarea rows={2} value={homeAbout.quote || ""} onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, quote: e.target.value }))} placeholder="We pour our local knowledge into every itinerary..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>

            {/* Stats */}
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">Stats (shown as glass strip on the right)</p>
              {homeAbout.stats?.map((stat: any, i: number) => (
                <div key={i} className="flex gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <select value={stat.icon} onChange={(e) => {
                    const updated = [...(homeAbout.stats || [])];
                    updated[i] = { ...updated[i], icon: e.target.value };
                    setHomeAbout((prev: any) => ({ ...prev, stats: updated }));
                  }} className="rounded border border-slate-200 px-2 py-1.5 text-sm">
                    {["Award", "Users", "MapPin", "Shield", "Mountain", "Star", "Compass", "Globe", "Smile"].map((ic) => <option key={ic} value={ic}>{ic}</option>)}
                  </select>
                  <input value={stat.value} onChange={(e) => {
                    const updated = [...(homeAbout.stats || [])];
                    updated[i] = { ...updated[i], value: e.target.value };
                    setHomeAbout((prev: any) => ({ ...prev, stats: updated }));
                  }} placeholder="8+" className="w-16 rounded border border-slate-200 px-2 py-1.5 text-sm text-center" />
                  <input value={stat.label} onChange={(e) => {
                    const updated = [...(homeAbout.stats || [])];
                    updated[i] = { ...updated[i], label: e.target.value };
                    setHomeAbout((prev: any) => ({ ...prev, stats: updated }));
                  }} placeholder="Years of Experience" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <button type="button" onClick={() => {
                    const updated = (homeAbout.stats || []).filter((_: any, idx: number) => idx !== i);
                    setHomeAbout((prev: any) => ({ ...prev, stats: updated }));
                  }} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={() => setHomeAbout((prev: any) => ({ ...prev, stats: [...(prev.stats || []), { icon: "Award", value: "", label: "" }] }))} className="text-xs text-teal-600 hover:text-teal-700">+ Add stat</button>
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Primary CTA Label</label>
                <input value={homeAbout.primaryCta?.label || ""} onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, primaryCta: { ...prev.primaryCta, label: e.target.value } }))} placeholder="Learn More About Us" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Primary CTA Link</label>
                <input value={homeAbout.primaryCta?.href || ""} onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, primaryCta: { ...prev.primaryCta, href: e.target.value } }))} placeholder="/about" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Secondary CTA Label</label>
                <input value={homeAbout.secondaryCta?.label || ""} onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, secondaryCta: { ...prev.secondaryCta, label: e.target.value } }))} placeholder="Get in Touch" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Secondary CTA Link</label>
                <input value={homeAbout.secondaryCta?.href || ""} onChange={(e) => setHomeAbout((prev: any) => ({ ...prev, secondaryCta: { ...prev.secondaryCta, href: e.target.value } }))} placeholder="/contact" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-xs font-medium text-slate-500">Content Blocks</p>
              {homeAbout.content.map((block: any, i: number) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-2">
                      <input value={block.title} onChange={(e) => {
                        const updated = [...homeAbout.content];
                        updated[i] = { ...updated[i], title: e.target.value };
                        setHomeAbout((prev: any) => ({ ...prev, content: updated }));
                      }} placeholder="Block title (e.g. Who We Are)" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm font-medium" />
                      <textarea rows={3} value={block.description || ""} onChange={(e) => {
                        const updated = [...homeAbout.content];
                        updated[i] = { ...updated[i], description: e.target.value };
                        setHomeAbout((prev: any) => ({ ...prev, content: updated }));
                      }} placeholder="Block description..." className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    </div>
                    <button type="button" onClick={() => {
                      const updated = homeAbout.content.filter((_: any, idx: number) => idx !== i);
                      setHomeAbout((prev: any) => ({ ...prev, content: updated }));
                    }} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => setHomeAbout((prev: any) => ({ ...prev, content: [...prev.content, { title: "", description: "" }] }))} className="text-xs text-teal-600 hover:text-teal-700">+ Add content block</button>
            </div>
          </section>

          {/* Contact Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Contact Section (Homepage)</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Heading</label>
                <input value={homeContact.heading} onChange={(e) => setHomeContact((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Get in Touch" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Description</label>
                <textarea rows={2} value={homeContact.description || ""} onChange={(e) => setHomeContact((prev: any) => ({ ...prev, description: e.target.value }))} placeholder="Contact description..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">Info Cards</p>
              {homeContact.infoCards.map((card: any, i: number) => (
                <div key={i} className="flex gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <input value={card.title} onChange={(e) => updateHomeInfoCard(i, "title", e.target.value)} placeholder="Title" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <input value={card.description} onChange={(e) => updateHomeInfoCard(i, "description", e.target.value)} placeholder="Description" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <button type="button" onClick={() => removeHomeInfoCard(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={addHomeInfoCard} className="text-xs text-teal-600 hover:text-teal-700">+ Add info card</button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">FAQ Section</h3>
                <p className="text-xs text-slate-400">Frequently asked questions about trekking</p>
              </div>
              <label className="flex items-center gap-2 text-xs text-slate-500">
                <input
                  type="checkbox"
                  checked={homeFaq.enabled}
                  onChange={(e) => setHomeFaq((prev: any) => ({ ...prev, enabled: e.target.checked }))}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                Show section
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Heading</label>
                <input value={homeFaq.heading} onChange={(e) => setHomeFaq((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Frequently Asked Questions" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Description</label>
                <input value={homeFaq.description} onChange={(e) => setHomeFaq((prev: any) => ({ ...prev, description: e.target.value }))} placeholder="FAQ description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">FAQ Items</p>
              {homeFaq.items.map((item: any, i: number) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-2">
                      <input value={item.question} onChange={(e) => {
                        const updated = [...homeFaq.items];
                        updated[i] = { ...updated[i], question: e.target.value };
                        setHomeFaq((prev: any) => ({ ...prev, items: updated }));
                      }} placeholder="Question" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm font-medium" />
                      <textarea rows={2} value={item.answer || ""} onChange={(e) => {
                        const updated = [...homeFaq.items];
                        updated[i] = { ...updated[i], answer: e.target.value };
                        setHomeFaq((prev: any) => ({ ...prev, items: updated }));
                      }} placeholder="Answer..." className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    </div>
                    <button type="button" onClick={() => {
                      const updated = homeFaq.items.filter((_: any, idx: number) => idx !== i);
                      setHomeFaq((prev: any) => ({ ...prev, items: updated }));
                    }} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => setHomeFaq((prev: any) => ({ ...prev, items: [...prev.items, { question: "", answer: "" }] }))} className="text-xs text-teal-600 hover:text-teal-700">+ Add FAQ</button>
            </div>
          </section>
        </div>
      )}

      {/* ───────────── ABOUT TAB ───────────── */}
      {activeTab === "about" && (
        <div className="space-y-8">
          {/* SEO */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">SEO / Meta</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Title</label>
                <input value={aboutSeo.title} onChange={(e) => setAboutSeo({ ...aboutSeo, title: e.target.value })} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Description</label>
                <textarea rows={2} value={aboutSeo.description || ""} onChange={(e) => setAboutSeo({ ...aboutSeo, description: e.target.value })} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Keywords</label>
                <input value={aboutSeo.keywords} onChange={(e) => setAboutSeo({ ...aboutSeo, keywords: e.target.value })} placeholder="about, mardi treks, nepal, team" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
          </section>

          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Hero Section</h3>
            <div className="space-y-3">
              <input value={aboutHero.heading} onChange={(e) => setAboutHero({ ...aboutHero, heading: e.target.value })} placeholder="Heading" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <textarea rows={3} value={aboutHero.description || ""} onChange={(e) => setAboutHero({ ...aboutHero, description: e.target.value })} placeholder="Description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <ImageUpload ref={setImageRef("aboutHero")} value={aboutHero.backgroundImage} onChange={(id) => setAboutHero({ ...aboutHero, backgroundImage: id })} label="Background Image" />
            </div>
          </section>

          {/* Note: Why Choose Us is no longer managed here — the About page
              reads it from the Home page settings (homePageSettings table) so
              there is one source of truth. Edit it from the Home tab instead. */}

          {/* Team */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Team Section</h3>
            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <input value={aboutTeam.badge || ""} onChange={(e) => setAboutTeam((prev: any) => ({ ...prev, badge: e.target.value }))} placeholder='Badge (e.g. "Our Team")' className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <input value={aboutTeam.heading || ""} onChange={(e) => setAboutTeam((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder='Heading (e.g. "Meet the Experts")' className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>
            <p className="mb-4 text-xs text-slate-500">Each member gets an individual page at /about/team/[slug] with a full biography.</p>
            <div className="space-y-4">
              {(aboutTeam.members || []).map((member: any, i: number) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400">Member {i + 1}</span>
                    <button type="button" onClick={() => setAboutTeam((prev: any) => ({ ...prev, members: prev.members.filter((_: any, idx: number) => idx !== i) }))}
                      className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input value={member.name} onChange={(e) => {
                      const next = [...(aboutTeam.members || [])]; next[i] = { ...next[i], name: e.target.value };
                      if (!next[i].slug) next[i].slug = e.target.value.toLowerCase().replace(/\s+/g, "-");
                      setAboutTeam((prev: any) => ({ ...prev, members: next }));
                    }} placeholder="Full Name *" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <input value={member.slug || ""} onChange={(e) => {
                      const next = [...(aboutTeam.members || [])]; next[i] = { ...next[i], slug: e.target.value }; setAboutTeam((prev: any) => ({ ...prev, members: next }));
                    }} placeholder="Slug (e.g. john-doe)" className="rounded border border-slate-200 px-2 py-1.5 text-sm font-mono" />
                    <input value={member.role} onChange={(e) => {
                      const next = [...(aboutTeam.members || [])]; next[i] = { ...next[i], role: e.target.value }; setAboutTeam((prev: any) => ({ ...prev, members: next }));
                    }} placeholder="Role / Title *" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-500">Year Started Working</label>
                      <input
                        type="number"
                        min="1970"
                        max={new Date().getFullYear()}
                        value={member.startYear || ""}
                        onChange={(e) => {
                          const next = [...(aboutTeam.members || [])]; next[i] = { ...next[i], startYear: e.target.value }; setAboutTeam((prev: any) => ({ ...prev, members: next }));
                        }}
                        placeholder={String(new Date().getFullYear())}
                        className="rounded border border-slate-200 px-2 py-1.5 text-sm"
                      />
                      {member.startYear && (
                        <p className="mt-1 text-xs text-slate-400">≈ {Math.max(0, new Date().getFullYear() - Number(member.startYear))} years of experience</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-500">Card Label (e.g. &ldquo;Local Expert Guide&rdquo;)</label>
                      <input value={member.label || ""} onChange={(e) => {
                        const next = [...(aboutTeam.members || [])]; next[i] = { ...next[i], label: e.target.value }; setAboutTeam((prev: any) => ({ ...prev, members: next }));
                      }} placeholder="Local Expert Guide" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-medium text-slate-500">Photo</label>
                      <ImageUpload ref={(el) => { imageRefs.current[`team-${i}`] = el; }} value={member.image || ""} onChange={(id) => {
                        const next = [...(aboutTeam.members || [])]; next[i] = { ...next[i], image: id }; setAboutTeam((prev: any) => ({ ...prev, members: next }));
                      }} label="Team Member Photo" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-xs font-medium text-slate-500">Full Biography (shown on /about/team/[slug])</label>
                      <TeamMemberBioEditor
                        value={member.bio || ""}
                        onChange={(html) => {
                          const next = [...(aboutTeam.members || [])]; next[i] = { ...next[i], bio: html }; setAboutTeam((prev: any) => ({ ...prev, members: next }));
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => setAboutTeam((prev: any) => ({ ...prev, members: [...(prev.members || []), { name: "", slug: "", role: "", image: "", bio: "", startYear: "", label: "" }] }))}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 px-3 py-2 text-xs font-medium text-slate-500 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600">
                + Add team member
              </button>
            </div>
          </section>

          {/* Gallery (Legal Documents) */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Gallery / Legal Documents</h3>
            <div className="space-y-3">
              {aboutGallery.map((item: any, i: number) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-400">Item {i + 1}</span>
                    <button type="button" onClick={() => setAboutGallery(aboutGallery.filter((_: any, idx: number) => idx !== i))}
                      className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                  <div className="space-y-2">
                    <ImageUpload ref={(el) => { imageRefs.current[`aboutGallery-${i}`] = el; }} value={item.imageId} onChange={(id) => {
                      const next = [...aboutGallery]; next[i] = { ...next[i], imageId: id }; setAboutGallery(next);
                    }} label="Photo" />
                    <input value={item.caption || ""} onChange={(e) => {
                      const next = [...aboutGallery]; next[i] = { ...next[i], caption: e.target.value }; setAboutGallery(next);
                    }} placeholder="Caption" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => setAboutGallery([...aboutGallery, { imageId: "", caption: "" }])}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 px-3 py-2 text-xs font-medium text-slate-500 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600">
                + Add image
              </button>
            </div>
          </section>

          {/* Custom Sections */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Custom Sections</h3>
            <div className="space-y-3">
              {aboutSections.map((sec, i) => (
                <div key={sec.id} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-400">Section {i + 1}</span>
                    <button type="button" onClick={() => setAboutSections(aboutSections.filter((_, idx) => idx !== i))}
                      className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                  <div className="space-y-2">
                    <input value={sec.heading} onChange={(e) => {
                      const next = [...aboutSections]; next[i] = { ...next[i], heading: e.target.value }; setAboutSections(next);
                    }} placeholder="Section heading" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <textarea rows={3} value={sec.description || ""} onChange={(e) => {
                      const next = [...aboutSections]; next[i] = { ...next[i], description: e.target.value }; setAboutSections(next);
                    }} placeholder="Description / content" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => setAboutSections([...aboutSections, { id: String(Date.now()), type: "custom", heading: "", description: "" }])}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 px-3 py-2 text-xs font-medium text-slate-500 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600">
                + Add custom section
              </button>
            </div>
          </section>

          {/* ── Company Story ── */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Company Story</h3>
            <div className="space-y-3">
              <input value={aboutCompanyStory.heading} onChange={(e) => setAboutCompanyStory((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Heading (e.g. Our Story)" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <input value={aboutCompanyStory.badge || ""} onChange={(e) => setAboutCompanyStory((prev: any) => ({ ...prev, badge: e.target.value }))} placeholder='Badge label (e.g. "Our Story")' className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <textarea rows={4} value={aboutCompanyStory.description || ""} onChange={(e) => setAboutCompanyStory((prev: any) => ({ ...prev, description: e.target.value }))} placeholder="Company story description (use double line breaks for paragraphs)" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <ImageUpload ref={setImageRef("aboutCompanyStory")} value={aboutCompanyStory.image || ""} onChange={(id) => setAboutCompanyStory((prev: any) => ({ ...prev, image: id }))} label="Story Image" />
              <div className="border-t border-slate-100 pt-3">
                <p className="mb-2 text-xs font-medium text-slate-500">Floating Highlight Badge (shown on image)</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input value={aboutCompanyStory.highlightLabel || ""} onChange={(e) => setAboutCompanyStory((prev: any) => ({ ...prev, highlightLabel: e.target.value }))} placeholder='Label (e.g. "Trusted Legacy")' className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <input value={aboutCompanyStory.highlightTitle || ""} onChange={(e) => setAboutCompanyStory((prev: any) => ({ ...prev, highlightTitle: e.target.value }))} placeholder='Title (e.g. "Built on Quality")' className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                </div>
              </div>
            </div>
          </section>

          {/* ── Mission & Vision ── */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Mission &amp; Vision</h3>
            <div className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <input value={aboutMissionVision.badge || ""} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, badge: e.target.value }))} placeholder='Badge (e.g. "Purpose & Direction")' className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <input value={aboutMissionVision.heading || ""} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder='Heading (e.g. "What Drives Us Forward")' className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input value={aboutMissionVision.missionLabel || ""} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, missionLabel: e.target.value }))} placeholder='Mission label (e.g. "Core Purpose")' className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <input value={aboutMissionVision.visionLabel || ""} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, visionLabel: e.target.value }))} placeholder='Vision label (e.g. "Future Outlook")' className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                <h4 className="text-xs font-bold text-slate-700 mb-3">Mission</h4>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input value={aboutMissionVision.mission?.heading || ""} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, mission: { ...prev.mission, heading: e.target.value } }))} placeholder="Mission heading" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <select value={aboutMissionVision.mission?.icon || "Target"} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, mission: { ...prev.mission, icon: e.target.value } }))} className="rounded border border-slate-200 px-2 py-1.5 text-sm">
                      {["Target", "Eye", "Mountain", "Heart", "Star", "Globe", "Shield", "Compass", "Lightbulb", "Zap"].map((ic) => <option key={ic} value={ic}>{ic}</option>)}
                    </select>
                  </div>
                  <RichTextEditor
                    ref={missionEditorRef}
                    content={aboutMissionVision.mission?.description || ""}
                    onChange={(html) => setAboutMissionVision((prev: any) => ({ ...prev, mission: { ...prev.mission, description: html } }))}
                    placeholder="Write your mission description..."
                  />
                </div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-4">
                <h4 className="text-xs font-bold text-slate-700 mb-3">Vision</h4>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input value={aboutMissionVision.vision?.heading || ""} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, vision: { ...prev.vision, heading: e.target.value } }))} placeholder="Vision heading" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <select value={aboutMissionVision.vision?.icon || "Eye"} onChange={(e) => setAboutMissionVision((prev: any) => ({ ...prev, vision: { ...prev.vision, icon: e.target.value } }))} className="rounded border border-slate-200 px-2 py-1.5 text-sm">
                      {["Target", "Eye", "Mountain", "Heart", "Star", "Globe", "Shield", "Compass", "Lightbulb", "Zap"].map((ic) => <option key={ic} value={ic}>{ic}</option>)}
                    </select>
                  </div>
                  <RichTextEditor
                    ref={visionEditorRef}
                    content={aboutMissionVision.vision?.description || ""}
                    onChange={(html) => setAboutMissionVision((prev: any) => ({ ...prev, vision: { ...prev.vision, description: html } }))}
                    placeholder="Write your vision description..."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Commitment to Responsible Tourism ── */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Commitment to Responsible Tourism</h3>
            <div className="space-y-3">
              <input value={aboutCommitment.heading} onChange={(e) => setAboutCommitment((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Heading" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <input value={aboutCommitment.badge || ""} onChange={(e) => setAboutCommitment((prev: any) => ({ ...prev, badge: e.target.value }))} placeholder='Badge label (e.g. "Responsible Tourism")' className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">Commitment Items</p>
              {(aboutCommitment.items || []).map((item: any, i: number) => (
                <div key={i} className="flex gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <select value={item.icon || "Leaf"} onChange={(e) => {
                    const updated = [...(aboutCommitment.items || [])];
                    updated[i] = { ...updated[i], icon: e.target.value };
                    setAboutCommitment((prev: any) => ({ ...prev, items: updated }));
                  }} className="rounded border border-slate-200 px-2 py-1.5 text-sm">
                    {["Leaf", "Heart", "Shield", "Globe", "CheckCircle", "Mountain", "Users", "ShieldCheck", "HeartHandshake", "Recycle", "Star"].map((ic) => <option key={ic} value={ic}>{ic}</option>)}
                  </select>
                  <div className="flex-1 space-y-2">
                    <input value={item.title || ""} onChange={(e) => {
                      const updated = [...(aboutCommitment.items || [])];
                      updated[i] = { ...updated[i], title: e.target.value };
                      setAboutCommitment((prev: any) => ({ ...prev, items: updated }));
                    }} placeholder="Title" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <textarea rows={2} value={item.description || ""} onChange={(e) => {
                      const updated = [...(aboutCommitment.items || [])];
                      updated[i] = { ...updated[i], description: e.target.value };
                      setAboutCommitment((prev: any) => ({ ...prev, items: updated }));
                    }} placeholder="Description" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  </div>
                  <button type="button" onClick={() => {
                    setAboutCommitment((prev: any) => ({ ...prev, items: (prev.items || []).filter((_: any, idx: number) => idx !== i) }));
                  }} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={() => setAboutCommitment((prev: any) => ({ ...prev, items: [...(prev.items || []), { icon: "Leaf", title: "", description: "" }] }))}
                className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-teal-300 hover:text-teal-600">
                <Plus className="h-3.5 w-3.5" /> Add item
              </button>
            </div>
          </section>

          {/* ── Company Timeline ── */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Company Timeline</h3>
            <div className="space-y-3">
              <input value={aboutTimeline.heading} onChange={(e) => setAboutTimeline((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Heading" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <input value={aboutTimeline.badge || ""} onChange={(e) => setAboutTimeline((prev: any) => ({ ...prev, badge: e.target.value }))} placeholder='Badge label (e.g. "Our Journey")' className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">Timeline Events</p>
              {(aboutTimeline.events || []).map((event: any, i: number) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-2">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <input value={event.year || ""} onChange={(e) => {
                          const updated = [...(aboutTimeline.events || [])];
                          updated[i] = { ...updated[i], year: e.target.value };
                          setAboutTimeline((prev: any) => ({ ...prev, events: updated }));
                        }} placeholder="Year (e.g. 2017)" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                        <input value={event.title || ""} onChange={(e) => {
                          const updated = [...(aboutTimeline.events || [])];
                          updated[i] = { ...updated[i], title: e.target.value };
                          setAboutTimeline((prev: any) => ({ ...prev, events: updated }));
                        }} placeholder="Event title" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                      </div>
                      <textarea rows={2} value={event.description || ""} onChange={(e) => {
                        const updated = [...(aboutTimeline.events || [])];
                        updated[i] = { ...updated[i], description: e.target.value };
                        setAboutTimeline((prev: any) => ({ ...prev, events: updated }));
                      }} placeholder="Event description" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    </div>
                    <button type="button" onClick={() => {
                      setAboutTimeline((prev: any) => ({ ...prev, events: (prev.events || []).filter((_: any, idx: number) => idx !== i) }));
                    }} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => setAboutTimeline((prev: any) => ({ ...prev, events: [...(prev.events || []), { year: "", title: "", description: "" }] }))}
                className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-teal-300 hover:text-teal-600">
                <Plus className="h-3.5 w-3.5" /> Add event
              </button>
            </div>
          </section>

          {/* ── How to Book / Process Steps ── */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">How to Book / Our Process</h3>
            <div className="space-y-3">
              <input value={aboutProcess.heading} onChange={(e) => setAboutProcess((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Heading" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <input value={aboutProcess.badge || ""} onChange={(e) => setAboutProcess((prev: any) => ({ ...prev, badge: e.target.value }))} placeholder='Badge label (e.g. "How It Works")' className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-medium text-slate-500">Process Steps</p>
              {(aboutProcess.steps || []).map((step: any, i: number) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-2">
                      <div className="grid gap-2 sm:grid-cols-3">
                        <input value={step.step || ""} onChange={(e) => {
                          const updated = [...(aboutProcess.steps || [])];
                          updated[i] = { ...updated[i], step: e.target.value };
                          setAboutProcess((prev: any) => ({ ...prev, steps: updated }));
                        }} placeholder="01" className="rounded border border-slate-200 px-2 py-1.5 text-sm w-20" />
                        <select value={step.icon || "Compass"} onChange={(e) => {
                          const updated = [...(aboutProcess.steps || [])];
                          updated[i] = { ...updated[i], icon: e.target.value };
                          setAboutProcess((prev: any) => ({ ...prev, steps: updated }));
                        }} className="rounded border border-slate-200 px-2 py-1.5 text-sm">
                          {["Search", "ClipboardCheck", "Calendar", "Backpack", "Compass", "MessageCircle", "Calculator", "MousePointerClick", "FileText", "CreditCard", "MapPin", "Users", "Star"].map((ic) => <option key={ic} value={ic}>{ic}</option>)}
                        </select>
                        <input value={step.title || ""} onChange={(e) => {
                          const updated = [...(aboutProcess.steps || [])];
                          updated[i] = { ...updated[i], title: e.target.value };
                          setAboutProcess((prev: any) => ({ ...prev, steps: updated }));
                        }} placeholder="Step title" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                      </div>
                      <textarea rows={2} value={step.description || ""} onChange={(e) => {
                        const updated = [...(aboutProcess.steps || [])];
                        updated[i] = { ...updated[i], description: e.target.value };
                        setAboutProcess((prev: any) => ({ ...prev, steps: updated }));
                      }} placeholder="Step description" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    </div>
                    <button type="button" onClick={() => {
                      setAboutProcess((prev: any) => ({ ...prev, steps: (prev.steps || []).filter((_: any, idx: number) => idx !== i) }));
                    }} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
              <button type="button" onClick={() => setAboutProcess((prev: any) => ({ ...prev, steps: [...(prev.steps || []), { step: "", icon: "Compass", title: "", description: "" }] }))}
                className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-teal-300 hover:text-teal-600">
                <Plus className="h-3.5 w-3.5" /> Add step
              </button>
            </div>
          </section>

          {/* ── Founder Message ── */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Founder Message</h3>
            <div className="space-y-3">
              <input value={aboutFounder.heading} onChange={(e) => setAboutFounder((prev: any) => ({ ...prev, heading: e.target.value }))} placeholder="Heading (e.g. A Message from Our Founder)" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <input value={aboutFounder.badge || ""} onChange={(e) => setAboutFounder((prev: any) => ({ ...prev, badge: e.target.value }))} placeholder={'Badge label (e.g. "Founder\'s Note")'} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <textarea rows={5} value={aboutFounder.message || ""} onChange={(e) => setAboutFounder((prev: any) => ({ ...prev, message: e.target.value }))} placeholder="Founder's message..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input value={aboutFounder.founderName} onChange={(e) => setAboutFounder((prev: any) => ({ ...prev, founderName: e.target.value }))} placeholder="Founder name" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <input value={aboutFounder.founderRole} onChange={(e) => setAboutFounder((prev: any) => ({ ...prev, founderRole: e.target.value }))} placeholder="Founder role" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <ImageUpload ref={setImageRef("aboutFounder")} value={aboutFounder.founderImage || ""} onChange={(id) => setAboutFounder((prev: any) => ({ ...prev, founderImage: id }))} label="Founder Photo" />
            </div>
          </section>
        </div>
      )}

      {/* ───────────── CONTACT TAB ───────────── */}
      {activeTab === "contact" && (
        <div className="space-y-8">
          {/* SEO */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">SEO / Meta</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Title</label>
                <input value={contactSeo.title} onChange={(e) => setContactSeo({ ...contactSeo, title: e.target.value })} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Description</label>
                <textarea rows={2} value={contactSeo.description || ""} onChange={(e) => setContactSeo({ ...contactSeo, description: e.target.value })} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Keywords</label>
                <input value={contactSeo.keywords} onChange={(e) => setContactSeo({ ...contactSeo, keywords: e.target.value })} placeholder="contact, mardi treks, nepal, support" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
          </section>

          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Hero Section</h3>
            <div className="space-y-3">
              <input value={contactHero.heading} onChange={(e) => setContactHero({ ...contactHero, heading: e.target.value })} placeholder="Heading" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <textarea rows={3} value={contactHero.description || ""} onChange={(e) => setContactHero({ ...contactHero, description: e.target.value })} placeholder="Description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <ImageUpload ref={setImageRef("contactHero")} value={contactHero.backgroundImage} onChange={(id) => setContactHero({ ...contactHero, backgroundImage: id })} label="Background Image" />
            </div>
          </section>

          {/* Map Iframe */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Google Map</h3>
            <textarea rows={4} value={contactMapIframe} onChange={(e) => setContactMapIframe(e.target.value)}
              placeholder='Paste the Google Maps iframe embed code here. e.g. &lt;iframe src="https://www.google.com/maps/embed?pb=..."&gt;&lt;/iframe&gt;'
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-mono" />
          </section>

          {/* Info Cards */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Contact Info Cards</h3>
            <div className="space-y-3">
              {contactInfoCards.map((card: any, i: number) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-3">
                  <div className="flex-1 grid gap-2 sm:grid-cols-2">
                    <input value={card.title} onChange={(e) => {
                      const next = [...contactInfoCards]; next[i] = { ...next[i], title: e.target.value }; setContactInfoCards(next);
                    }} placeholder="Title (e.g. Email Us)" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <input value={card.description} onChange={(e) => {
                      const next = [...contactInfoCards]; next[i] = { ...next[i], description: e.target.value }; setContactInfoCards(next);
                    }} placeholder="Value (e.g. info@marditreks.com)" className="rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  </div>
                  <button type="button" onClick={() => setContactInfoCards(contactInfoCards.filter((_: any, idx: number) => idx !== i))}
                    className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              ))}
              <button type="button" onClick={() => setContactInfoCards([...contactInfoCards, { icon: "Info", title: "", description: "" }])}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-300 px-3 py-2 text-xs font-medium text-slate-500 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600">
                + Add info card
              </button>
            </div>
          </section>
        </div>
      )}

      {/* ───────────── BLOG TAB ───────────── */}
      {activeTab === "blog" && (
        <div className="space-y-8">
          {/* SEO */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">SEO / Meta</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Title</label>
                <input value={blogSeo.title} onChange={(e) => setBlogSeo({ ...blogSeo, title: e.target.value })} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Meta Description</label>
                <textarea rows={2} value={blogSeo.description || ""} onChange={(e) => setBlogSeo({ ...blogSeo, description: e.target.value })} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Keywords</label>
                <input value={blogSeo.keywords} onChange={(e) => setBlogSeo({ ...blogSeo, keywords: e.target.value })} placeholder="trekking blog, nepal travel, himalayas" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
          </section>

          {/* Hero */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Hero Section</h3>
            <div className="space-y-3">
              <input value={blogHero.heading} onChange={(e) => setBlogHero({ ...blogHero, heading: e.target.value })} placeholder="Heading" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <textarea rows={3} value={blogHero.description || ""} onChange={(e) => setBlogHero({ ...blogHero, description: e.target.value })} placeholder="Description" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <ImageUpload ref={setImageRef("blogHero")} value={blogHero.backgroundImage} onChange={(id) => setBlogHero({ ...blogHero, backgroundImage: id })} label="Background Image" />
            </div>
          </section>
        </div>
      )}

      {/* ───────────── FOOTER TAB ───────────── */}
      {activeTab === "footer" && (
        <div className="space-y-8">
          {/* Brand & Contact */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Brand &amp; Contact</h3>
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                  <input value={footer.email} onChange={(e) => setFooterField("email", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                  <input value={footer.phone} onChange={(e) => setFooterField("phone", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Address</label>
                  <input value={footer.address} onChange={(e) => setFooterField("address", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Copyright Text</label>
                <input value={footer.copyright} onChange={(e) => setFooterField("copyright", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
          </section>

          {/* Section Labels */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Section Labels</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Trusted Badge</label>
                <input value={footer.trustedBadge} onChange={(e) => setFooterField("trustedBadge", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Associated Heading</label>
                <input value={footer.associatedHeading} onChange={(e) => setFooterField("associatedHeading", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Activities Heading</label>
                <input value={footer.activitiesHeading} onChange={(e) => setFooterField("activitiesHeading", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Company Heading</label>
                <input value={footer.companyHeading} onChange={(e) => setFooterField("companyHeading", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Useful Links Heading</label>
                <input value={footer.usefulLinksHeading} onChange={(e) => setFooterField("usefulLinksHeading", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Recommended Label</label>
                <input value={footer.recommendedLabel} onChange={(e) => setFooterField("recommendedLabel", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Follow Us Label</label>
                <input value={footer.followUsLabel} onChange={(e) => setFooterField("followUsLabel", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Card 1 Title</label>
                <input value={footer.card1Title} onChange={(e) => setFooterField("card1Title", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Card 2 Title</label>
                <input value={footer.card2Title} onChange={(e) => setFooterField("card2Title", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Card 3 Title</label>
                <input value={footer.card3Title} onChange={(e) => setFooterField("card3Title", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Social Links</h3>
            <div className="space-y-3">
              {footer.socialLinks.map((link: any, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-24 text-xs font-medium text-slate-500 capitalize">{link.platform}</span>
                  <input value={link.url} onChange={(e) => {
                    const next = [...footer.socialLinks]; next[i] = { ...next[i], url: e.target.value }; setFooterField("socialLinks", next);
                  }} placeholder="https://..." className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                </div>
              ))}
            </div>
          </section>

          {/* Partners */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Partners / Association Logos</h3>
            <p className="mb-3 text-xs text-slate-400">Logos of organizations you&apos;re associated with</p>
            <div className="space-y-4">
              {(footer.partners || []).map((p: any, i: number) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                  <div className="flex-1 space-y-2">
                    <input value={p.name || ""} onChange={(e) => {
                      const next = [...footer.partners]; next[i] = { ...next[i], name: e.target.value }; setFooterField("partners", next);
                    }} placeholder="Name (e.g. NTB)" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <ImageUpload ref={(el) => { imageRefs.current[`footer-partner-${i}`] = el; }}
                      value={p.src || ""} onChange={(id) => {
                        const next = [...footer.partners]; next[i] = { ...next[i], src: id }; setFooterField("partners", next);
                      }} label="Logo" folder="footer/partners" />
                  </div>
                  <button type="button" onClick={() => {
                    setFooterField("partners", footer.partners.filter((_: any, j: number) => j !== i));
                  }} className="mt-1 rounded p-1.5 text-red-400 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={() => setFooterField("partners", [...(footer.partners || []), { name: "", src: "" }])}
                className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700">
                <Plus className="h-3.5 w-3.5" /> Add Partner
              </button>
            </div>
          </section>

          {/* Company & Useful Links */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Navigation Links</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">Company Links</label>
                <div className="space-y-2">
                  {(footer.companyLinks || []).map((link: any, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <input value={link.label || ""} onChange={(e) => {
                        const next = [...footer.companyLinks]; next[i] = { ...next[i], label: e.target.value }; setFooterField("companyLinks", next);
                      }} placeholder="Label" className="w-28 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                      <input value={link.href || ""} onChange={(e) => {
                        const next = [...footer.companyLinks]; next[i] = { ...next[i], href: e.target.value }; setFooterField("companyLinks", next);
                      }} placeholder="/page-path" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                      <button type="button" onClick={() => {
                        setFooterField("companyLinks", footer.companyLinks.filter((_: any, j: number) => j !== i));
                      }} className="rounded p-1.5 text-red-400 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFooterField("companyLinks", [...(footer.companyLinks || []), { label: "", href: "" }])}
                    className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700">
                    <Plus className="h-3.5 w-3.5" /> Add Link
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">Useful Links</label>
                <div className="space-y-2">
                  {(footer.usefulLinks || []).map((link: any, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <input value={link.label || ""} onChange={(e) => {
                        const next = [...footer.usefulLinks]; next[i] = { ...next[i], label: e.target.value }; setFooterField("usefulLinks", next);
                      }} placeholder="Label" className="w-28 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                      <input value={link.href || ""} onChange={(e) => {
                        const next = [...footer.usefulLinks]; next[i] = { ...next[i], href: e.target.value }; setFooterField("usefulLinks", next);
                      }} placeholder="/page-path" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                      <button type="button" onClick={() => {
                        setFooterField("usefulLinks", footer.usefulLinks.filter((_: any, j: number) => j !== i));
                      }} className="rounded p-1.5 text-red-400 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFooterField("usefulLinks", [...(footer.usefulLinks || []), { label: "", href: "" }])}
                    className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700">
                    <Plus className="h-3.5 w-3.5" /> Add Link
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended On */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Recommended On Logos</h3>
            <p className="mb-3 text-xs text-slate-400">Logos of sites that recommend you</p>
            <div className="space-y-4">
              {(footer.recommendedOn || []).map((item: any, i: number) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                  <div className="flex-1 space-y-2">
                    <input value={item.name || ""} onChange={(e) => {
                      const next = [...footer.recommendedOn]; next[i] = { ...next[i], name: e.target.value }; setFooterField("recommendedOn", next);
                    }} placeholder="Company name" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <ImageUpload ref={(el) => { imageRefs.current[`footer-recommended-${i}`] = el; }}
                      value={item.src || ""} onChange={(id) => {
                        const next = [...footer.recommendedOn]; next[i] = { ...next[i], src: id }; setFooterField("recommendedOn", next);
                      }} label="Logo" folder="footer/recommended" />
                  </div>
                  <button type="button" onClick={() => {
                    setFooterField("recommendedOn", footer.recommendedOn.filter((_: any, j: number) => j !== i));
                  }} className="mt-1 rounded p-1.5 text-red-400 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={() => setFooterField("recommendedOn", [...(footer.recommendedOn || []), { name: "", src: "" }])}
                className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700">
                <Plus className="h-3.5 w-3.5" /> Add Logo
              </button>
            </div>
          </section>

          {/* Representative */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Representative</h3>
            <p className="mb-3 text-xs text-slate-400">The person visitors can contact</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Name</label>
                <input value={footer.representative?.name || ""} onChange={(e) => setFooterField("representative", { ...footer.representative, name: e.target.value })} placeholder="e.g. Aarav Sharma" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Title</label>
                <input value={footer.representative?.title || ""} onChange={(e) => setFooterField("representative", { ...footer.representative, title: e.target.value })} placeholder="e.g. Trip Consultant" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                <input value={footer.representative?.phone || ""} onChange={(e) => setFooterField("representative", { ...footer.representative, phone: e.target.value })} placeholder="+977-..." className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">WhatsApp Number (without +)</label>
                <input value={footer.representative?.whatsapp || ""} onChange={(e) => setFooterField("representative", { ...footer.representative, whatsapp: e.target.value })} placeholder="977XXXXXXXXX" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Avatar</label>
                <ImageUpload ref={(el) => { imageRefs.current["footer-rep-avatar"] = el; }}
                  value={footer.representative?.avatar || ""} onChange={(id) => {
                    setFooterField("representative", { ...footer.representative, avatar: id });
                  }} label="Avatar" folder="footer/representative" />
              </div>
            </div>
          </section>

          {/* Recognitions */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Recognition Badges</h3>
            <p className="mb-3 text-xs text-slate-400">Award badges displayed in the footer</p>
            <div className="space-y-4">
              {(footer.recognitions || []).map((badge: any, i: number) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                  <div className="flex-1 space-y-2">
                    <input value={badge.name || ""} onChange={(e) => {
                      const next = [...footer.recognitions]; next[i] = { ...next[i], name: e.target.value }; setFooterField("recognitions", next);
                    }} placeholder="Badge name" className="w-full rounded border border-slate-200 px-2 py-1.5 text-sm" />
                    <ImageUpload ref={(el) => { imageRefs.current[`footer-recognition-${i}`] = el; }}
                      value={badge.src || ""} onChange={(id) => {
                        const next = [...footer.recognitions]; next[i] = { ...next[i], src: id }; setFooterField("recognitions", next);
                      }} label="Badge Image" folder="footer/recognitions" />
                  </div>
                  <button type="button" onClick={() => {
                    setFooterField("recognitions", footer.recognitions.filter((_: any, j: number) => j !== i));
                  }} className="mt-1 rounded p-1.5 text-red-400 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={() => setFooterField("recognitions", [...(footer.recognitions || []), { name: "", src: "" }])}
                className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700">
                <Plus className="h-3.5 w-3.5" /> Add Badge
              </button>
            </div>
          </section>

          {/* Bottom Links */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-sm font-bold text-slate-900 mb-4">Bottom Bar Links</h3>
            <p className="mb-3 text-xs text-slate-400">Links shown next to the copyright</p>
            <div className="space-y-2">
              {(footer.bottomLinks || []).map((link: any, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <input value={link.label || ""} onChange={(e) => {
                    const next = [...footer.bottomLinks]; next[i] = { ...next[i], label: e.target.value }; setFooterField("bottomLinks", next);
                  }} placeholder="Label" className="w-28 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <input value={link.href || ""} onChange={(e) => {
                    const next = [...footer.bottomLinks]; next[i] = { ...next[i], href: e.target.value }; setFooterField("bottomLinks", next);
                  }} placeholder="/page-path" className="flex-1 rounded border border-slate-200 px-2 py-1.5 text-sm" />
                  <button type="button" onClick={() => {
                    setFooterField("bottomLinks", footer.bottomLinks.filter((_: any, j: number) => j !== i));
                  }} className="rounded p-1.5 text-red-400 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
              <button type="button" onClick={() => setFooterField("bottomLinks", [...(footer.bottomLinks || []), { label: "", href: "" }])}
                className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-slate-400 hover:text-slate-700">
                <Plus className="h-3.5 w-3.5" /> Add Link
              </button>
            </div>
          </section>
        </div>
      )}

      {/* Save */}
      <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
        {saving && <Loader2 className="h-4 w-4 animate-spin text-slate-400" />}
        <button type="submit" disabled={saving}
          className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 disabled:opacity-50">
          <Save className="h-4 w-4" /> Save All Pages
        </button>
      </div>
    </form>
  );
}

// ── TipTap Rich Text Editor for Team Member Biography ──
function TeamMemberBioEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editorProps: {
      attributes: { class: "prose prose-sm max-w-none focus:outline-none min-h-[180px] px-4 py-3" },
    },
    onUpdate: ({ editor }) => { onChange(editor.getHTML()); },
  });

  // Sync external value changes (e.g. when switching team members)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-8"><Loader2 className="h-5 w-5 animate-spin text-slate-400" /></div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-slate-200 px-2 py-1.5">
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} label="Bold">
          <Bold className="h-3.5 w-3.5" />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} label="Italic">
          <Italic className="h-3.5 w-3.5" />
        </ToolbarBtn>
        <span className="mx-0.5 h-4 w-px bg-slate-200" />
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} label="Heading">
          <Heading2 className="h-3.5 w-3.5" />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} label="Bullet List">
          <List className="h-3.5 w-3.5" />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} label="Numbered List">
          <ListOrdered className="h-3.5 w-3.5" />
        </ToolbarBtn>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
