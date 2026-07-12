import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Compass, BookOpen, Users, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rigdom Atlas" },
      { name: "description", content: "Rigdom Atlas is an independent financial literacy organization committed to clear, accessible education." },
      { property: "og:title", content: "About — Rigdom Atlas" },
      { property: "og:description", content: "Our mission, our standards, and what Rigdom Atlas is — and isn't." },
      { property: "og:url", content: "https://rigdomatlas.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://rigdomatlas.com/about" }],
  }),
  component: About,
});

const values = [
  { icon: Compass, name: "Clarity over jargon", body: "We translate finance into language people actually use." },
  { icon: BookOpen, name: "Education, not sales", body: "We do not sell products, take commissions, or recommend brokers." },
  { icon: Users, name: "Built for everyone", body: "Material works for first-jobs, first-homes, and first-businesses alike." },
  { icon: ShieldCheck, name: "Editorial integrity", body: "Every guide is reviewed for accuracy and updated as laws change." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>An atlas for the financial decisions of a lifetime.</>}
        intro="Rigdom — from the Danish word for wealth and prosperity — paired with Atlas, the symbol of guidance and navigation. Together, the name describes the work: helping people chart a clear path through personal finance."
      />

      <Section
        eyebrow="Mission"
        title={<>Make wealth-building knowledge a public resource.</>}
        intro="Rigdom Atlas is an educational financial literacy organization. We exist to help students, young professionals, families, and aspiring entrepreneurs confidently navigate the financial decisions that shape their lives."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.name} className="rounded-2xl border border-border bg-card p-7">
              <v.icon strokeWidth={1.25} className="h-7 w-7 text-accent" />
              <h3 className="mt-5 font-serif text-xl">{v.name}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist" eyebrow="What we are not" title={<>A clear line on scope.</>}>
        <div className="grid md:grid-cols-2 gap-10 text-lg">
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li>— Not a bank or depository institution.</li>
            <li>— Not a registered investment adviser.</li>
            <li>— Not a brokerage or trading platform.</li>
            <li>— Not a tax preparer or legal counsel.</li>
          </ul>
          <p className="text-foreground/90 font-serif text-2xl leading-snug">
            We publish education. For decisions affecting your money, consult a
            licensed professional who knows your situation.
          </p>
        </div>
        <div className="mt-10">
          <Disclaimer />
        </div>
      </Section>
    </>
  );
}
