import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Disclaimer } from "@/components/site/Disclaimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rigdom Atlas — Nonpartisan Financial Literacy & Education" },
      {
        name: "description",
        content:
          "Nonpartisan financial literacy institution publishing peer-edited guides, calculators, and frameworks for students, families, and entrepreneurs.",
      },
      { property: "og:title", content: "Rigdom Atlas — Financial Literacy Institution" },
      {
        property: "og:description",
        content:
          "Peer-edited guides, calculators, and frameworks for financial literacy — for students, families, and entrepreneurs.",
      },
      { property: "og:url", content: "https://rigdomatlas.com/" },
    ],
    links: [{ rel: "canonical", href: "https://rigdomatlas.com/" }],
  }),
  component: Index,
});

const pillars = [
  { n: "01", name: "Financial Mindset", body: "The psychological foundation for long-term wealth stewardship and disciplined decision-making." },
  { n: "02", name: "Budgeting & Flow", body: "Cash flow mastery to ensure operational stability for households and ventures alike." },
  { n: "03", name: "Saving & Liquidity", body: "Building robust safety nets and strategic reserves to weather economic volatility." },
  { n: "04", name: "Credit & Debt", body: "Leverage as a tool — the mechanics of debt and healthy institutional standing." },
  { n: "05", name: "Investment Strategy", body: "Asset classes, market dynamics, and the arithmetic of compound interest." },
  { n: "06", name: "Risk Management", body: "Protecting assets through strategic insurance and diversification." },
  { n: "07", name: "Tax Optimization", body: "Navigating fiscal responsibility and legal efficiency in wealth accumulation." },
  { n: "08", name: "Legacy Planning", body: "Estate structure, philanthropy, and intergenerational transfer of assets." },
];

const journal = [
  { title: "Definitions & Glossary", meta: "Reference", to: "/guides" },
  { title: "Financial Instruments", meta: "Interactive", to: "/tools" },
  { title: "Professional Certifications", meta: "Foundations", to: "/resources" },
  { title: "The Atlas Dispatch", meta: "Newsletter", to: "/newsletter" },
] as const;

function Index() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Hero */}
      <section className="w-full px-6 py-28 md:py-40 flex flex-col items-center text-center border-b border-emerald/10">
        <div className="max-w-4xl">
          <span className="uppercase tracking-[0.28em] text-[11px] font-semibold text-emerald-soft">
            Established for the Public Good
          </span>
          <h1 className="mt-8 font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.92] text-emerald">
            Rigdom <span className="italic">Atlas</span> — Financial Literacy for the Public Good
          </h1>
          <p className="mt-10 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light text-emerald/80">
            A nonpartisan financial literacy institution dedicated to
            empowering students, entrepreneurs, and families through
            rigorous economic education.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 bg-emerald text-cream px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-emerald-soft transition-colors"
            >
              Read the Journal
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 border border-emerald px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald hover:bg-emerald/5 transition-colors"
            >
              Explore Instruments
            </Link>
          </div>
        </div>
      </section>

      {/* Eight Pillars */}
      <section className="w-full py-28 px-6">
        <div className="container-page">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-emerald-soft">
                The Eight Pillars
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl text-emerald leading-[1.02]">
                Foundations <span className="italic">of Finance</span>
              </h2>
              <div className="mt-6 w-24 h-px bg-gold"></div>
            </div>
            <p className="max-w-sm text-emerald/70 leading-relaxed">
              A sequenced framework covering the decisions that most influence
              financial wellbeing — written for clarity, free of sales pitches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {pillars.map((p) => (
              <article key={p.n} className="space-y-4">
                <span className="font-serif italic text-3xl text-gold">{p.n}</span>
                <h3 className="font-semibold text-sm uppercase tracking-[0.14em] text-emerald">
                  {p.name}
                </h3>
                <p className="text-sm text-emerald/70 leading-relaxed">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Atlas Journal */}
      <section className="w-full bg-emerald text-cream py-28 px-6">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-gold">
                What We Publish
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.02]">
                The Atlas <span className="italic">Journal</span>
              </h2>
              <p className="mt-6 text-cream/70 max-w-lg italic font-serif text-xl">
                Resources curated for clarity, not complexity.
              </p>
            </div>
            <Link
              to="/guides"
              className="self-start md:self-end border-b border-gold pb-1 text-gold font-medium tracking-[0.16em] uppercase text-[11px] hover:text-gold-soft transition-colors"
            >
              View Full Archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journal.map((j) => (
              <Link
                key={j.title}
                to={j.to}
                className="border border-cream/20 p-8 flex flex-col justify-between aspect-square group hover:border-gold hover:bg-emerald-deep/40 transition-colors"
              >
                <h4 className="font-serif italic text-2xl md:text-3xl leading-tight">
                  {j.title}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-cream/60">
                    {j.meta}
                  </span>
                  <span className="text-2xl text-gold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Mission */}
      <section className="w-full py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-emerald-soft">
            Editorial Standard
          </p>
          <h2 className="mt-8 font-serif text-3xl md:text-5xl italic leading-[1.15] text-emerald">
            &ldquo;Education is the ultimate hedge against market uncertainty.
            We exist to provide the compass, not the asset.&rdquo;
          </h2>
          <div className="mt-10 mx-auto w-px h-10 bg-gold"></div>
          <p className="mt-10 text-lg leading-relaxed text-emerald/80 max-w-2xl mx-auto">
            Rigdom Atlas is a nonprofit educational institution. We are not a
            bank, investment adviser, or brokerage. Our mission is purely
            pedagogical: to provide the structural knowledge required for
            economic self-sovereignty.
          </p>
        </div>
      </section>

      {/* Newsletter + Disclaimer */}
      <section className="w-full border-t border-emerald/10 pt-16 pb-24 px-6">
        <div className="container-page">
          <div className="bg-emerald-soft text-cream p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <p className="text-[10px] uppercase tracking-[0.24em] font-semibold text-gold">
                Newsletter
              </p>
              <h3 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
                Subscribe to <span className="italic">the Dispatch</span>
              </h3>
              <p className="mt-4 text-cream/80">
                Critical financial insights delivered monthly. No sponsors, no
                promotions, no noise.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) window.location.assign("/newsletter");
              }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Institutional email"
                className="bg-transparent border border-cream/30 px-6 py-4 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold w-full md:w-80 text-sm"
              />
              <button
                type="submit"
                className="bg-gold text-emerald px-8 py-4 font-semibold uppercase text-[11px] tracking-[0.2em] hover:bg-gold-soft transition-colors"
              >
                Enroll
              </button>
            </form>
          </div>

          <div className="mt-16">
            <Disclaimer />
          </div>
        </div>
      </section>
    </>
  );
}
