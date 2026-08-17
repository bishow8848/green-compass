"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mountain, LogOut, LayoutDashboard, List, FileText,
  ShoppingCart, Users, ImageIcon, Calendar, Settings, FolderKanban,
  Home, Menu, MessageSquare, TrendingUp, MapPin, Send,
  Activity, BarChart, Shield, Contact
} from "lucide-react";

const iconMap: Record<string, any> = {
  LayoutDashboard, List, FileText, ShoppingCart,
  Users, ImageIcon, Calendar, Settings, FolderKanban,
  Home, Menu, MessageSquare, TrendingUp, MapPin, Send,
  Activity, BarChart, Shield, Contact,
};

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export function AdminSidebar({
  nav,
  crmNav,
  userName,
  userEmail,
  userInitial,
}: {
  nav: NavItem[];
  crmNav?: NavItem[];
  userName: string;
  userEmail: string;
  userInitial: string;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  const isCrmActive = crmNav?.some((item) => pathname.startsWith(item.href)) || pathname.startsWith("/admin/crm");

  const renderNavLink = (item: NavItem) => {
    const Icon = iconMap[item.icon];
    const active = isActive(item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
          active
            ? "bg-primary/10 text-primary-dark shadow-sm"
            : "text-text-muted hover:bg-surface-alt hover:text-text"
        }`}
      >
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 ${
            active
              ? "bg-primary text-white shadow-sm shadow-primary/20"
              : "bg-surface-alt text-text-muted group-hover:bg-accent-light"
          }`}
        >
          {Icon && <Icon className="h-4 w-4" />}
        </div>
        <span>{item.label}</span>
        {active && (
          <span className="ml-auto h-2 w-2 rounded-full bg-primary ring-2 ring-primary/15" />
        )}
      </Link>
    );
  };

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-surface md:flex md:flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary shadow-sm shadow-primary/20">
          <Mountain className="h-5 w-5 text-white" />
        </div>
        <div>
          <span className="block text-sm font-bold text-foreground">Mardi CMS</span>
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-text-muted">
            Admin Panel
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          Main Menu
        </p>
        {nav.slice(0, 4).map(renderNavLink)}
        <p className="mt-5 px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          Management
        </p>
        {nav.slice(4).map(renderNavLink)}

        {/* CRM Section */}
        {crmNav && crmNav.length > 0 && (
          <>
            <div className={`mt-5 flex items-center gap-2 px-3 pb-2 ${isCrmActive ? "text-primary" : "text-text-muted"}`}>
              <Contact className="h-3.5 w-3.5" />
              <p className="text-[10px] font-semibold uppercase tracking-widest">
                Customer Relations
              </p>
            </div>
            {crmNav.map(renderNavLink)}
          </>
        )}
      </nav>

      {/* User Footer */}
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-3 rounded-xl bg-surface-alt px-3 py-2.5 transition-colors hover:bg-accent-light">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary text-xs font-bold text-white shadow-sm shadow-primary/20">
            {userInitial}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">{userName}</p>
            <p className="truncate text-xs text-text-muted">{userEmail}</p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:bg-surface-alt hover:text-text"
        >
          <LogOut className="h-3.5 w-3.5" />
          View Site
        </Link>
      </div>
    </aside>
  );
}
