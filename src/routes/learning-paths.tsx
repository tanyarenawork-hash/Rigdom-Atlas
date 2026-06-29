import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";

export const Route = createFileRoute("/learning-paths")({
  head: () => ({
    meta: [
      { title: "Learning Paths — Rigdom Atlas" },
      { name: "description", content: "Structured curricula that guide you from financial fundamentals to advanced wealth-building topics." },
      { property: "og:title", content: "Learning Paths — Rigdom Atlas" },
      { property: "og:description", content: "Six guided paths for students, professionals, families, and entrepreneurs." },
    ],
  }),
  component: Paths,
});

const paths = [
  {
    n: "01",
    name: "The Student Foundation",
    audience: "High school & college students",
    lessons: 12,
    weeks: 6,
    topics: ["Budgeting basics", "Bank accounts", "Credit cards", "Student loans", "First job & W-4"],
  },
  {
    n: "02",
    name: "The First Salary",
    audience: "New graduates & young professionals",
    lessons: 16,
    weeks: 8,
    topics: ["Paycheck breakdown", "Emergency fund", "401(k) basics", "Roth IRA", "Renter's insurance"],
  },
  {
    n: "03",
    name: "Family Finances",
    audience: "Couples & growing households",
    lessons: 14,
    weeks: 7,
    topics: ["Joint budgeting", "Life & health insurance", "529 plans", "Wills & beneficiaries"],
  },
  {
    n: "04",
    name: "The Investor's Atlas",
    audience: "Long-term investors",
    lessons: 18,
    weeks: 10,
    topics: ["Asset allocation", "Index investing", "Tax-advantaged accounts", "Rebalancing"],
  },
  {
    n: "05",
    name: "Entrepreneur Essentials",
    audience: "Aspiring small business owners",
    lessons: 15,
    weeks: 8,
    topics: ["Business structures", "Bookkeeping", "Quarterly taxes", "Pricing & cash flow"],
  },
  {
    n: "06",
    name: "Approaching Retirement",
    audience: "Mid- and late-career savers",
    lessons: 13,
    weeks: 7,
    topics: ["Social Security basics", "Withdrawal strategies", "Medicare overview", "Estate planning"],
  },
];

function Paths() {
  return (
    <>
      <PageHero
        eyebrow="Learning Paths"
        title={<>Curricula for every chapter of financial life.</>}
        intro="Each path is a sequenced reading list, not a course you must finish. Move at your pace; revisit when the season of life changes."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((p) => (
            <article
              key={p.n}
              className="rounded-3xl border border-border bg-card p-8 hover:border-accent transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-4xl text-accent">{p.n}</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.lessons} lessons · {p.weeks} weeks
                </span>
              </div>
              <h3 className="mt-6 font-serif text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.audience}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.topics.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
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
