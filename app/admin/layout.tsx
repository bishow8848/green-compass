import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminMobileSidebar } from "@/components/admin/AdminMobileSidebar";
import { AdminExitWarning } from "@/components/admin/AdminExitWarning";

export const nav = [
  { label: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
  { label: "Treks", href: "/admin/treks", icon: "List" },
  { label: "Categories", href: "/admin/categories", icon: "FolderKanban" },
  { label: "Blog Posts", href: "/admin/blog", icon: "FileText" },
  { label: "Authors", href: "/admin/authors", icon: "Users" },
  { label: "Reviews", href: "/admin/reviews", icon: "MessageSquare" },
  { label: "Media", href: "/admin/media", icon: "ImageIcon" },
  { label: "Pages", href: "/admin/pages", icon: "Calendar" },
  { label: "Page Manager", href: "/admin/page-manager", icon: "FileText" },
  { label: "Navigation", href: "/admin/navigation", icon: "Menu" },
  { label: "Redirects", href: "/admin/redirects", icon: "ArrowRightLeft" },
  { label: "Settings", href: "/admin/settings", icon: "Settings" },
];

// CRM sub-navigation items
export const crmNav = [
  { label: "CRM Dashboard", href: "/admin/crm", icon: "LayoutDashboard" },
  { label: "Bookings", href: "/admin/bookings", icon: "ShoppingCart" },
  { label: "Users", href: "/admin/users", icon: "Users" },
  { label: "Contacts", href: "/admin/crm/contacts", icon: "Users" },
  { label: "Communications", href: "/admin/crm/communication", icon: "Send" },
  { label: "CRM Settings", href: "/admin/crm/settings", icon: "Settings" },
];

// Admin dashboard shows live data & forms — never cache the route.
export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user || (session.user as any).role !== "admin") redirect("/login?callbackUrl=/admin");

  return (
    <div className="admin-shell flex h-screen bg-background text-foreground">
      <AdminExitWarning />

      {/* Desktop Sidebar */}
      <AdminSidebar
        nav={nav}
        crmNav={crmNav}
        userName={session.user.name || "Admin"}
        userEmail={session.user.email || ""}
        userInitial={(session.user.name || session.user.email || "A").charAt(0).toUpperCase()}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex h-16 shrink-0 items-center gap-4 border-b border-border bg-surface px-4 sm:px-6">
          <AdminMobileSidebar nav={nav} crmNav={crmNav} userName={session.user.name || session.user.email || ""} />
          <div className="hidden items-center gap-3 sm:flex sm:flex-1">
            <div className="h-7 w-px bg-border" />
            <div>
              <p className="text-sm font-semibold text-foreground">Green Compass Treks</p>
              <p className="text-[11px] text-text-muted">Admin workspace</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-6 w-px bg-border" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary text-xs font-bold text-white shadow-sm">
                {(session.user.name || session.user.email || "A").charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
