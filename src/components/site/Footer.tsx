import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Institute",
    links: [
      { to: "/about", label: "About the Atlas" },
      { to: "/contact", label: "Editorial Contact" },
      { to: "/newsletter", label: "The Dispatch" },
    ],
  },
  {
    title: "Library",
    links: [
      { to: "/guides", label: "The Journal" },
      { to: "/resources", label: "Downloadable Templates" },
      { to: "/tools", label: "Instruments" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-emerald text-cream">
      <div className="container-page pt-24 pb-16">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-gold font-semibold">
              Est. MMXXIV
            </p>
            <h2 className="mt-4 font-serif text-6xl md:text-7xl leading-[0.9] italic">
              Rigdom<br />Atlas
            </h2>
            <p className="mt-8 max-w-sm text-cream/70 leading-relaxed">
              A nonpartisan educational institute for financial literacy —
              publishing rigorous, ad-free resources in service of the public
              good.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="text-[10px] uppercase tracking-[0.24em] text-gold font-semibold pb-4 border-b border-cream/20">
                  {c.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l, i) => (
                    <li key={c.title + i}>
                      <Link
                        to={l.to}
                        className="font-serif text-lg text-cream/90 hover:text-gold transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/20 grid gap-6 md:grid-cols-2 text-[10px] uppercase tracking-[0.22em] text-cream/50 leading-loose">
          <p>
            Rigdom Atlas is an educational organization. Not a bank, not a
            registered investment adviser, not a broker-dealer. All materials
            are provided for general educational purposes only and do not
            constitute financial, tax, legal, or investment advice.
          </p>
          <p className="md:text-right">
            © MMXXVI Rigdom Atlas · All rights reserved · The Eight Pillars is
            a published framework of the Atlas Institute.
          </p>
        </div>
      </div>
    </footer>
  );
}
