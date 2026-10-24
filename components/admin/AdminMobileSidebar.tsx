"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu, X, Mountain, LayoutDashboard, List, FileText,
  ShoppingCart, Users, ImageIcon, Calendar, Settings, FolderKanban,
  Home, MessageSquare, TrendingUp, MapPin, Send,
  Activity, BarChart, Shield, Contact,
  ArrowRightLeft
} from "lucide-react";
import { AnimatePresence, stagger } from "framer-motion";
import * as m from "framer-motion/m";
import { EASE_OUT, SPRING_SNAPPY, SPRING_SOFT } from "@/components/motion/presets";

/** Menu rows slide in one after another as the drawer opens. */
const listVariants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.025, { startDelay: 0.1 }) } },
};
const rowVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: EASE_OUT } },
};

const iconMap: Record<string, any> = {
  LayoutDashboard, List, FileText, ShoppingCart,
  Users, ImageIcon, Calendar, Settings, FolderKanban,
  Home, Menu, MessageSquare, TrendingUp, MapPin, Send,
  Activity, BarChart, Shield, Contact,
  ArrowRightLeft,
};

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export function AdminMobileSidebar({ nav, crmNav, userName }: { nav: NavItem[]; crmNav?: NavItem[]; userName: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const isCrmActive = crmNav?.some((item) => pathname.startsWith(item.href)) || pathname.startsWith("/admin/crm");

  const NavLink = ({ item }: { item: NavItem }) => {
    const Icon = iconMap[item.icon];
    return (
      <m.div variants={rowVariants}>
      <Link
        href={item.href}
        onClick={() => setOpen(false)}
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
          isActive(item.href)
            ? "bg-primary/10 text-primary-dark"
            : "text-text-muted hover:bg-surface-alt hover:text-text"
        }`}
      >
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
          isActive(item.href) ? "bg-primary text-white" : "bg-surface-alt text-text-muted"
        }`}>
          {Icon && <Icon className="h-4 w-4" />}
        </div>
        {item.label}
      </Link>
      </m.div>
    );
  };

  return (
    <>
      <m.button
        onClick={() => setOpen(true)}
        whileTap={{ scale: 0.9 }}
        transition={SPRING_SNAPPY}
        className="rounded-lg p-2 text-text-muted transition-colors hover:bg-surface-alt hover:text-primary md:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </m.button>

      <AnimatePresence>
      {open && (
        <div key="admin-drawer" className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <m.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Sidebar */}
          <m.aside
            className="fixed inset-y-0 left-0 flex w-72 flex-col bg-surface shadow-xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: SPRING_SOFT }}
            exit={{ x: "-100%", transition: { duration: 0.22, ease: [0.65, 0, 0.35, 1] } }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary shadow-sm shadow-primary/20">
                  <Mountain className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-bold text-foreground">Mardi CMS</span>
              </div>
              <m.button
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.85, rotate: 90 }}
                transition={SPRING_SNAPPY}
                aria-label="Close menu"
                className="rounded-lg p-1.5 text-text-muted hover:bg-surface-alt hover:text-text"
              >
                <X className="h-5 w-5" />
              </m.button>
            </div>

            <m.div
              className="flex-1 space-y-1 overflow-y-auto px-3 py-4"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted">Main Menu</p>
              {nav.slice(0, 4).map((item) => <NavLink key={item.href} item={item} />)}
              <p className="mt-5 px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-text-muted">Management</p>
              {nav.slice(4).map((item) => <NavLink key={item.href} item={item} />)}

              {/* CRM Section */}
              {crmNav && crmNav.length > 0 && (
                <>
                  <div className={`mt-5 flex items-center gap-2 px-3 pb-2 ${isCrmActive ? "text-primary" : "text-text-muted"}`}>
                    <Contact className="h-3.5 w-3.5" />
                    <p className="text-[10px] font-semibold uppercase tracking-widest">
                      Customer Relations
                    </p>
                  </div>
                  {crmNav.map((item) => <NavLink key={item.href} item={item} />)}
                </>
              )}
            </m.div>

            <div className="border-t border-border px-3 py-3">
              <div className="flex items-center gap-3 rounded-xl bg-surface-alt px-3 py-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary text-xs font-bold text-white">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{userName}</p>
                  <p className="text-xs text-text-muted">Administrator</p>
                </div>
              </div>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:bg-surface-alt hover:text-text"
              >
                <Mountain className="h-3.5 w-3.5" />
                View Site
              </Link>
            </div>
          </m.aside>
        </div>
      )}
      </AnimatePresence>
    </>
  );
}
