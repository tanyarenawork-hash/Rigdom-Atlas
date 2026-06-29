import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Financial Guides — Rigdom Atlas" },
      { name: "description", content: "In-depth educational guides on budgeting, credit, saving, investing, taxes, real estate, entrepreneurship, and planning." },
      { property: "og:title", content: "Financial Guides — Rigdom Atlas" },
      { property: "og:description", content: "Carefully edited primers across the eight pillars of personal finance." },
    ],
  }),
  component: Guides,
});

const guides = [
  { cat: "Budgeting", title: "The 50/30/20 framework, honestly assessed", time: "12 min" },
  { cat: "Budgeting", title: "Zero-based budgeting for irregular income", time: "9 min" },
  { cat: "Credit", title: "How a credit score is actually calculated", time: "11 min" },
  { cat: "Credit", title: "Disputing errors on your credit report", time: "8 min" },
  { cat: "Saving", title: "Building a six-month emergency fund without burnout", time: "10 min" },
  { cat: "Investing", title: "Index funds, ETFs, and the case for boring", time: "14 min" },
  { cat: "Investing", title: "Understanding 401(k), Roth IRA, and HSA accounts", time: "16 min" },
  { cat: "Taxes", title: "A plain-language guide to W-2 vs. 1099 income", time: "10 min" },
  { cat: "Taxes", title: "Standard vs. itemized deductions: a decision framework", time: "9 min" },
  { cat: "Real Estate", title: "The true monthly cost of homeownership", time: "13 min" },
  { cat: "Entrepreneurship", title: "Choosing between LLC, S-Corp, and sole proprietorship", time: "15 min" },
  { cat: "Financial Planning", title: "Insurance you actually need at every life stage", time: "12 min" },
];

function Guides() {
  return (
    <>
      <PageHero
        eyebrow="Financial Guides"
        title={<>A curated library of personal finance essentials.</>}
        intro="Each guide is written, edited, and updated for clarity — built to be read once and referenced for years."
      />

      <Section>
        <div className="rounded-3xl border border-border overflow-hidden">
          {guides.map((g, i) => (
            <article
              key={g.title}
              className={
                "group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:px-10 py-6 hover:bg-muted/60 transition-colors " +
                (i !== 0 ? "border-t border-border" : "")
              }
            >
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
                  {g.cat}
                </p>
                <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground truncate">
                  {g.title}
                </h3>
              </div>
              <div className="flex items-center gap-5 shrink-0">
                <span className="hidden sm:inline text-xs text-muted-foreground tabular-nums">
                  {g.time}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-border group-hover:border-accent group-hover:text-accent transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Disclaimer />
        </div>
      </Section>
    </>
  );
}
