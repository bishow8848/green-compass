import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <ol
        className="flex items-center gap-1.5 text-sm text-text-muted"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home link */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-primary"
            itemProp="item"
          >
            <Home className="h-3.5 w-3.5" />
            <span itemProp="name" className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const position = index + 2; // position 1 is home
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.label + index}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-text-muted/50" />
              {isLast || !item.href ? (
                <span
                  className="truncate text-foreground/80 font-medium"
                  itemProp="name"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="truncate transition-colors hover:text-primary"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
