import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Financial Glossary — Rigdom Atlas" },
      { name: "description", content: "Plain-language definitions of essential personal finance terms across budgeting, credit, saving, investing, taxes, real estate, entrepreneurship, and planning." },
      { property: "og:title", content: "Financial Glossary — Rigdom Atlas" },
      { property: "og:description", content: "A clear reference for the terms that shape everyday money decisions." },
      { property: "og:url", content: "https://rigdomatlas.com/guides" },
    ],
    links: [{ rel: "canonical", href: "https://rigdomatlas.com/guides" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Financial Glossary",
          url: "https://rigdomatlas.com/guides",
          description: "Plain-language definitions of essential personal finance terms.",
        }),
      },
    ],
  }),
  component: Guides,
});

const terms = [
  { cat: "Budgeting", term: "Zero-Based Budget", definition: "A method where every dollar of income is assigned to a category — spending, saving, or debt — so income minus allocations equals zero." },
  { cat: "Budgeting", term: "Discretionary Spending", definition: "Non-essential expenses such as dining out, entertainment, and travel, which can be adjusted without affecting basic needs." },
  { cat: "Budgeting", term: "Fixed Expense", definition: "A recurring cost that stays roughly the same each period, such as rent, insurance premiums, or a loan payment." },

  { cat: "Credit", term: "APR", definition: "Annual Percentage Rate: the yearly cost of borrowing expressed as a percentage, including interest and certain fees." },
  { cat: "Credit", term: "Credit Utilization", definition: "The share of your available revolving credit currently in use; lower utilization generally supports a stronger credit score." },
  { cat: "Credit", term: "Hard Inquiry", definition: "A lender's formal review of your credit report during an application, which can temporarily lower your score." },

  { cat: "Saving", term: "Emergency Fund", definition: "Liquid savings, typically three to six months of essential expenses, reserved for unexpected income loss or urgent costs." },
  { cat: "Saving", term: "High-Yield Savings Account", definition: "A savings account that pays a materially higher interest rate than a standard bank account while remaining fully liquid." },
  { cat: "Saving", term: "Compound Interest", definition: "Interest calculated on both the original principal and previously accumulated interest, causing balances to grow at an accelerating rate." },

  { cat: "Investing", term: "Index Fund", definition: "A fund designed to mirror the composition of a market index, offering broad diversification at low cost." },
  { cat: "Investing", term: "Expense Ratio", definition: "The annual fee a fund charges its investors, expressed as a percentage of assets under management." },
  { cat: "Investing", term: "Asset Allocation", definition: "The mix of stocks, bonds, and other asset classes in a portfolio, chosen to match an investor's goals and risk tolerance." },
  { cat: "Investing", term: "Dollar-Cost Averaging", definition: "Investing a fixed amount at regular intervals regardless of price, smoothing out entry points over time." },

  { cat: "Taxes", term: "Marginal Tax Rate", definition: "The tax rate applied to your next dollar of income, rather than the average rate applied to your entire income." },
  { cat: "Taxes", term: "Standard Deduction", definition: "A fixed dollar amount that reduces taxable income for filers who do not itemize deductions." },
  { cat: "Taxes", term: "Tax-Advantaged Account", definition: "An account such as a 401(k), IRA, or HSA that offers tax benefits on contributions, growth, or withdrawals." },

  { cat: "Real Estate", term: "Escrow", definition: "A neutral account that holds funds or documents until the agreed conditions of a real estate transaction are satisfied." },
  { cat: "Real Estate", term: "Amortization", definition: "The gradual repayment of a loan through scheduled payments that cover both interest and principal over time." },
  { cat: "Real Estate", term: "PMI", definition: "Private Mortgage Insurance: a premium typically required when a conventional mortgage down payment is less than 20 percent." },

  { cat: "Entrepreneurship", term: "Pass-Through Entity", definition: "A business structure where profits are taxed on the owner's personal return rather than at the entity level." },
  { cat: "Entrepreneurship", term: "Gross Margin", definition: "Revenue minus the direct cost of producing goods or services, expressed as a percentage of revenue." },
  { cat: "Entrepreneurship", term: "Runway", definition: "The length of time a business can operate before exhausting its cash reserves at the current burn rate." },

  { cat: "Financial Planning", term: "Term Life Insurance", definition: "Coverage for a fixed period that pays a death benefit only if the insured passes away within that term." },
  { cat: "Financial Planning", term: "Net Worth", definition: "The value of everything you own minus everything you owe — a snapshot of overall financial position." },
  { cat: "Financial Planning", term: "Fiduciary", definition: "An advisor legally obligated to act in the client's best interest, above their own or their firm's compensation." },
];

function Guides() {
  return (
    <>
      <PageHero
        eyebrow="Financial Glossary"
        title={<>Essential terms in personal finance, defined plainly.</>}
        intro="A clear reference across the eight pillars of personal finance — each term written to be understood the first time."
      />

      <Section eyebrow="Reference" title={<>Terms across the eight pillars.</>}>
        <div className="rounded-3xl border border-border overflow-hidden">
          {terms.map((t, i) => (
            <article
              key={t.term}
              className={
                "grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-3 md:gap-10 px-6 md:px-10 py-7 " +
                (i !== 0 ? "border-t border-border" : "")
              }
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
                  {t.cat}
                </p>
                <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground">
                  {t.term}
                </h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed md:pt-1">
                {t.definition}
              </p>
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
