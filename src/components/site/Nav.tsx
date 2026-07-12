import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Institute" },
  { to: "/about", label: "About" },
  { to: "/guides", label: "Journal" },
  { to: "/learning-paths", label: "Curricula" },
  { to: "/resources", label: "Library" },
  { to: "/tools", label: "Instruments" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-page flex h-20 items-center justify-between gap-8">
        <Link to="/" className="flex items-baseline gap-3 min-w-0">
          <span
            aria-hidden
            className="font-serif text-2xl leading-none text-emerald italic tracking-tight"
          >
            R<span className="text-gold not-italic">·</span>A
          </span>
          <span className="hidden sm:inline font-serif text-lg leading-none tracking-tight text-emerald truncate">
            Rigdom Atlas
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-medium uppercase tracking-[0.14em] text-emerald/60">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{
                className: "text-emerald border-b border-gold pb-1 -mb-[5px]",
              }}
              className="hover:text-emerald transition-colors pb-1"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/newsletter"
            className="inline-flex items-center gap-2 border border-emerald px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-emerald hover:bg-emerald hover:text-cream transition-colors"
          >
            The Dispatch
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 border border-border text-emerald"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-emerald border-gold" }}
                className="py-3 border-b border-border text-sm uppercase tracking-[0.16em] text-emerald/70"
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
