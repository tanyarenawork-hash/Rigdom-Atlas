import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";
import { Check } from "lucide-react";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Rigdom Atlas" },
      { name: "description", content: "A monthly digest of essential personal finance ideas, new guides, and updates from the Atlas." },
      { property: "og:title", content: "Newsletter — Rigdom Atlas" },
      { property: "og:description", content: "Subscribe to a measured, advertisement-free personal finance newsletter." },
      { property: "og:url", content: "https://rigdomatlas.com/newsletter" },
    ],
    links: [{ rel: "canonical", href: "https://rigdomatlas.com/newsletter" }],
  }),
  component: Newsletter,
});

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="The Atlas Newsletter"
        title={<>A measured digest, once a month.</>}
        intro="One thoughtful issue per month: new guides, evergreen ideas, and brief notes on the financial topics that quietly shape life."
      />

      <Section eyebrow="Subscribe" title={<>Join the Dispatch.</>}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-accent text-foreground">
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">You're on the list.</h3>
                  <p className="mt-2 text-muted-foreground">
                    The next issue will arrive at <span className="text-foreground">{email}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <p className="eyebrow">Subscribe</p>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl">
                    Join readers building financial knowledge that compounds.
                  </h3>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm outline-none focus:border-accent transition-colors"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-navy-soft transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    No promotions. No data sharing. Unsubscribe in one click.
                  </p>
                </>
              )}
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-5">
            {[
              ["A single, edited essay each month", "No daily noise. One issue worth your time."],
              ["New guides and updated explainers", "Notes on what we've published or revised."],
              ["Free, independent, and ad-free", "Supported by readers, never by sponsors."],
            ].map(([t, b]) => (
              <div key={t} className="flex gap-4">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-soft">
                  <Check className="h-3.5 w-3.5 text-foreground" />
                </span>
                <div>
                  <p className="font-serif text-lg">{t}</p>
                  <p className="text-sm text-muted-foreground mt-1">{b}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className="mt-12">
          <Disclaimer />
        </div>
      </Section>
    </>
  );
}
