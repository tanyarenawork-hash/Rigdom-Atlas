import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Mail, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rigdom Atlas" },
      { name: "description", content: "Reach the Rigdom Atlas editorial team for questions, feedback, or educational partnerships." },
      { property: "og:title", content: "Contact — Rigdom Atlas" },
      { property: "og:description", content: "Get in touch with the Rigdom Atlas team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Questions, feedback, or partnerships.</>}
        intro="We read every message. Please note that we cannot respond to requests for individual financial, tax, or investment advice."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4 space-y-8">
            <div>
              <Mail strokeWidth={1.25} className="h-6 w-6 text-accent" />
              <p className="eyebrow mt-4">Editorial</p>
              <p className="mt-2 font-serif text-xl">hello@rigdomatlas.org</p>
            </div>
            <div>
              <MapPin strokeWidth={1.25} className="h-6 w-6 text-accent" />
              <p className="eyebrow mt-4">Office</p>
              <p className="mt-2 font-serif text-xl leading-snug">
                Rigdom Atlas<br />
                Financial Literacy Initiative<br />
                United States
              </p>
            </div>
          </aside>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-8 rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            {sent ? (
              <div className="text-center py-12">
                <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-accent text-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl">Message received.</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you for reaching out. We'll respond within a few business days.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" />
                <Field label="Email" type="email" />
                <Field label="Organization (optional)" full />
                <Field label="Subject" full />
                <label className="sm:col-span-2 block">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    Message
                  </span>
                  <textarea
                    required
                    rows={6}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent transition-colors text-sm"
                  />
                </label>
                <div className="sm:col-span-2 flex items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our educational scope.
                  </p>
                  <button
                    type="submit"
                    className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-navy-soft transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-12">
          <Disclaimer />
        </div>
      </Section>
    </>
  );
}

function Field({ label, type = "text", full = false }: { label: string; type?: string; full?: boolean }) {
  return (
    <label className={"block " + (full ? "sm:col-span-2" : "")}>
      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
        {label}
      </span>
      <input
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent transition-colors text-sm"
      />
    </label>
  );
}
