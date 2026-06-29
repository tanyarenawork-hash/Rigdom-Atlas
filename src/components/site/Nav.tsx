import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/guides", label: "Financial Guides" },
  { to: "/learning-paths", label: "Learning Paths" },
  { to: "/resources", label: "Resources" },
  { to: "/tools", label: "Tools" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <span
            aria-hidden
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-sm"
          >
            R
          </span>
          <span className="font-serif text-lg leading-none tracking-tight truncate">
            Rigdom <span className="text-accent">Atlas</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/newsletter"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-navy-soft transition-colors"
          >
            Subscribe
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-border"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-muted" }}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
