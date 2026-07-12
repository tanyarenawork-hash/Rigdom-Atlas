import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Download, GraduationCap, Briefcase, BookOpen } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Rigdom Atlas" },
      { name: "description", content: "Downloadable guides, certification recommendations, career resources, and curated reading." },
      { property: "og:title", content: "Resources — Rigdom Atlas" },
      { property: "og:description", content: "A working library of materials supporting personal finance education." },
    ],
  }),
  component: Resources,
});

const downloads = [
  { name: "Monthly Budget Worksheet (PDF)", size: "1 page" },
  { name: "Debt Payoff Tracker (PDF)", size: "2 pages" },
  { name: "Net Worth Statement Template", size: "1 page" },
  { name: "Annual Financial Checkup Checklist", size: "3 pages" },
];

const certifications = [
  { name: "AFC — Accredited Financial Counselor", body: "For those pursuing financial coaching and education careers." },
  { name: "CFP — Certified Financial Planner", body: "The standard credential for comprehensive financial planning." },
  { name: "EA — Enrolled Agent", body: "An IRS-authorized credential focused on taxation." },
  { name: "ChFC — Chartered Financial Consultant", body: "A planning-focused designation with deep coursework." },
];

const careers = [
  "Financial Educator",
  "Nonprofit Financial Coach",
  "Tax Preparer",
  "Bookkeeper",
  "Small Business Advisor",
  "Personal Finance Writer",
];

function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>A working library for the financially curious.</>}
        intro="Worksheets, recommended credentials, career pathways, and outside reading — chosen for substance, not novelty."
      />

      <Section
        eyebrow="Downloadable Guides"
        title={<>Templates you can print, fill in, and keep.</>}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {downloads.map((d) => (
            <div
              key={d.name}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 hover:border-accent transition-colors"
            >
              <div className="min-w-0">
                <p className="font-serif text-lg truncate">{d.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{d.size}</p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted group-hover:bg-accent group-hover:text-foreground transition-colors">
                <Download className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="mist"
        eyebrow="Certification Recommendations"
        title={<>Credentials worth knowing about.</>}
        intro="If you are exploring a career in personal finance, these are widely recognized credentials. Rigdom Atlas is not affiliated with the issuing bodies."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-card p-6">
              <GraduationCap strokeWidth={1.25} className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-serif text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Career Resources"
        title={<>Paths into the field of financial education.</>}
      >
        <div className="grid md:grid-cols-2 gap-10">
          <ul className="space-y-3">
            {careers.map((c) => (
              <li
                key={c}
                className="flex items-center gap-4 border-b border-border pb-3"
              >
                <Briefcase strokeWidth={1.25} className="h-5 w-5 text-accent" />
                <span className="font-serif text-lg">{c}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-border bg-card p-7">
            <BookOpen strokeWidth={1.25} className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-serif text-xl">Suggested Reading</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>· <em>The Psychology of Money</em> — Morgan Housel</li>
              <li>· <em>The Bogleheads' Guide to Investing</em></li>
              <li>· <em>Your Money or Your Life</em> — Vicki Robin</li>
              <li>· <em>I Will Teach You to Be Rich</em> — Ramit Sethi</li>
              <li>· <em>The Millionaire Next Door</em> — Thomas Stanley</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Disclaimer />
        </div>
      </Section>
    </>
  );
}
