import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Wallet,
  CreditCard,
  PiggyBank,
  LineChart,
  Receipt,
  Home,
  Briefcase,
  Compass,
  BookOpen,
  Calculator,
  Mail,
  GraduationCap,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rigdom Atlas — Mapping Your Financial Future" },
      {
        name: "description",
        content:
          "Accessible financial education on budgeting, saving, investing, credit, taxes, real estate, entrepreneurship, and long-term wealth building.",
      },
      { property: "og:title", content: "Rigdom Atlas — Mapping Your Financial Future" },
      {
        property: "og:description",
        content:
          "An educational financial literacy organization helping you navigate personal finance with clarity.",
      },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: Wallet, name: "Budgeting", desc: "Build a system for spending with intention." },
  { icon: CreditCard, name: "Credit", desc: "Understand scores, reports, and responsible use." },
  { icon: PiggyBank, name: "Saving", desc: "Emergency funds, sinking funds, and goal accounts." },
  { icon: LineChart, name: "Investing", desc: "Foundational concepts, accounts, and asset classes." },
  { icon: Receipt, name: "Taxes", desc: "How the tax system works for individuals and small business." },
  { icon: Home, name: "Real Estate", desc: "Renting, buying, mortgages, and homeownership costs." },
  { icon: Briefcase, name: "Entrepreneurship", desc: "Business structures, cash flow, and pricing." },
  { icon: Compass, name: "Financial Planning", desc: "Goals, risk, insurance, and long-term wealth." },
];

const offerings = [
  { icon: BookOpen, title: "Educational Articles", body: "Carefully edited explainers written for clarity, not jargon." },
  { icon: Calculator, title: "Interactive Calculators", body: "Budget, compound interest, mortgage, and debt payoff tools." },
  { icon: GraduationCap, title: "Certification Guidance", body: "Recommended pathways for personal finance learning." },
  { icon: Mail, title: "Monthly Newsletter", body: "A measured digest of essential personal finance ideas." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-20 pb-24 md:pt-32 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow flex items-center gap-3">
                <span className="gold-rule" />
                Financial Literacy Organization
              </p>
              <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.98] text-foreground">
                Mapping Your{" "}
                <span className="italic text-accent">Financial</span> Future.
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                Rigdom Atlas empowers individuals through accessible financial
                education — helping people make informed decisions about
                budgeting, saving, investing, credit, taxes, entrepreneurship,
                and long-term wealth building.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/learning-paths"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-navy-soft transition-colors"
                >
                  Start Learning
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-accent transition-colors"
                >
                  Explore Resources
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_30px_60px_-20px_rgba(20,30,60,0.08)]">
                <p className="eyebrow">Index</p>
                <div className="mt-4 space-y-4">
                  {[
                    { k: "Core Topics", v: "08" },
                    { k: "Learning Paths", v: "06" },
                    { k: "Interactive Tools", v: "12" },
                    { k: "Guides Published", v: "40+" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      className="flex items-baseline justify-between border-b border-border pb-3 last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{r.k}</span>
                      <span className="font-serif text-2xl">{r.v}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Updated Quarterly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <Section
        tone="mist"
        eyebrow="Feature Categories"
        title={<>Eight pillars of personal finance.</>}
        intro="A curated curriculum spanning the decisions that most influence financial wellbeing — written for clarity, free of sales pitches."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {categories.map((c) => (
            <div
              key={c.name}
              className="group bg-card p-7 hover:bg-background transition-colors"
            >
              <c.icon
                strokeWidth={1.25}
                className="h-7 w-7 text-accent"
              />
              <h3 className="mt-6 font-serif text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
              <Link
                to="/guides"
                className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Read guides <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Offerings */}
      <Section
        eyebrow="What we publish"
        title={<>Quiet tools. Clear writing. Practical guidance.</>}
        intro="Everything Rigdom Atlas creates is designed to be useful on a Tuesday afternoon — not to sell you a product."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-border bg-card p-6 hover:border-accent transition-colors"
            >
              <o.icon strokeWidth={1.25} className="h-6 w-6 text-foreground" />
              <h3 className="mt-5 font-serif text-lg">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {o.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Editorial block */}
      <Section tone="mist">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <span className="gold-rule" />
              The Atlas Standard
            </p>
            <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-[1.05]">
              Financial knowledge, treated like a public good.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              We believe a well-edited explanation of a Roth IRA, a credit
              report, or an amortization schedule belongs in the same
              conversation as any liberal art. Our editorial process favors
              accuracy, context, and restraint over urgency or upsell.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
            >
              Read our approach <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <figure className="rounded-3xl bg-card border border-border p-8">
              <blockquote className="font-serif text-2xl leading-snug text-foreground">
                “Financial literacy isn't a luxury. It's the difference between
                a life shaped by inheritance and one shaped by choice.”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Editorial Note · Rigdom Atlas
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      {/* CTA + disclaimer */}
      <Section>
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Newsletter</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              A measured digest, once a month.
            </h2>
            <p className="mt-4 text-primary-foreground/70 max-w-md">
              Essential ideas, new guides, and updates from the Atlas — no
              promotions, no noise.
            </p>
          </div>
          <Link
            to="/newsletter"
            className="justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-foreground hover:bg-gold-soft transition-colors"
          >
            Subscribe to the Atlas <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10">
          <Disclaimer />
        </div>
      </Section>
    </>
  );
}
