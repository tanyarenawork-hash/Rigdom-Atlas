import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { Disclaimer } from "@/components/site/Disclaimer";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Tools & Calculators — Rigdom Atlas" },
      { name: "description", content: "Interactive calculators for budgeting, compound interest, mortgage payments, and debt payoff." },
      { property: "og:title", content: "Tools & Calculators — Rigdom Atlas" },
      { property: "og:description", content: "Quiet, educational calculators built to illustrate concepts — not to recommend products." },
    ],
  }),
  component: Tools,
});

function currency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function CompoundCalc() {
  const [principal, setPrincipal] = useState(5000);
  const [monthly, setMonthly] = useState(300);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(25);

  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const fv = principal * Math.pow(1 + r, n) + monthly * ((Math.pow(1 + r, n) - 1) / r);
    const contributed = principal + monthly * n;
    return { fv, contributed, growth: fv - contributed };
  }, [principal, monthly, rate, years]);

  return (
    <ToolCard title="Compound Interest" subtitle="What a sustained contribution can become over time.">
      <div className="grid sm:grid-cols-2 gap-5">
        <NumberField label="Starting amount" prefix="$" value={principal} onChange={setPrincipal} step={500} />
        <NumberField label="Monthly contribution" prefix="$" value={monthly} onChange={setMonthly} step={50} />
        <NumberField label="Annual return" suffix="%" value={rate} onChange={setRate} step={0.5} />
        <NumberField label="Years" value={years} onChange={setYears} step={1} />
      </div>
      <ResultGrid
        rows={[
          ["Future value", currency(result.fv)],
          ["Total contributed", currency(result.contributed)],
          ["Growth from interest", currency(result.growth)],
        ]}
      />
    </ToolCard>
  );
}

function MortgageCalc() {
  const [price, setPrice] = useState(420000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const result = useMemo(() => {
    const loan = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    const payment = (loan * r) / (1 - Math.pow(1 + r, -n));
    return { loan, payment, total: payment * n };
  }, [price, down, rate, years]);

  return (
    <ToolCard title="Mortgage Payment" subtitle="Principal and interest only. Taxes and insurance vary by location.">
      <div className="grid sm:grid-cols-2 gap-5">
        <NumberField label="Home price" prefix="$" value={price} onChange={setPrice} step={5000} />
        <NumberField label="Down payment" suffix="%" value={down} onChange={setDown} step={1} />
        <NumberField label="Interest rate" suffix="%" value={rate} onChange={setRate} step={0.125} />
        <NumberField label="Loan term" suffix="yrs" value={years} onChange={setYears} step={5} />
      </div>
      <ResultGrid
        rows={[
          ["Loan amount", currency(result.loan)],
          ["Monthly P&I", currency(result.payment)],
          ["Total paid over term", currency(result.total)],
        ]}
      />
    </ToolCard>
  );
}

function BudgetCalc() {
  const [income, setIncome] = useState(5500);
  const needs = income * 0.5;
  const wants = income * 0.3;
  const save = income * 0.2;

  return (
    <ToolCard title="50/30/20 Budget" subtitle="A starting framework based on take-home pay.">
      <div className="grid sm:grid-cols-2 gap-5">
        <NumberField label="Monthly take-home" prefix="$" value={income} onChange={setIncome} step={100} />
      </div>
      <ResultGrid
        rows={[
          ["Needs (50%)", currency(needs)],
          ["Wants (30%)", currency(wants)],
          ["Save & invest (20%)", currency(save)],
        ]}
      />
    </ToolCard>
  );
}

function DebtCalc() {
  const [balance, setBalance] = useState(8500);
  const [apr, setApr] = useState(22);
  const [payment, setPayment] = useState(300);

  const result = useMemo(() => {
    const r = apr / 100 / 12;
    if (payment <= balance * r) return { months: Infinity, interest: Infinity };
    const n = -Math.log(1 - (balance * r) / payment) / Math.log(1 + r);
    const interest = payment * n - balance;
    return { months: n, interest };
  }, [balance, apr, payment]);

  return (
    <ToolCard title="Debt Payoff" subtitle="How long a fixed monthly payment will take to clear a balance.">
      <div className="grid sm:grid-cols-2 gap-5">
        <NumberField label="Balance" prefix="$" value={balance} onChange={setBalance} step={100} />
        <NumberField label="APR" suffix="%" value={apr} onChange={setApr} step={0.5} />
        <NumberField label="Monthly payment" prefix="$" value={payment} onChange={setPayment} step={25} />
      </div>
      <ResultGrid
        rows={[
          ["Months to payoff", isFinite(result.months) ? Math.ceil(result.months).toString() : "Payment too low"],
          ["Total interest paid", isFinite(result.interest) ? currency(result.interest) : "—"],
        ]}
      />
    </ToolCard>
  );
}

function ToolCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <article className="rounded-3xl border border-border bg-card p-7 md:p-9">
      <p className="eyebrow">Calculator</p>
      <h3 className="mt-3 font-serif text-2xl md:text-3xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-7">{children}</div>
    </article>
  );
}

function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: number;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
        {label}
      </span>
      <div className="mt-2 flex items-center rounded-xl border border-border bg-background focus-within:border-accent transition-colors">
        {prefix && <span className="pl-3 text-muted-foreground text-sm">{prefix}</span>}
        <input
          type="number"
          value={value}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent px-3 py-2.5 outline-none font-serif text-lg tabular-nums"
        />
        {suffix && <span className="pr-3 text-muted-foreground text-sm">{suffix}</span>}
      </div>
    </label>
  );
}

function ResultGrid({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-7 rounded-2xl bg-muted/60 p-5 border border-border">
      {rows.map(([k, v], i) => (
        <div
          key={k}
          className={
            "flex items-baseline justify-between gap-4 py-3 " +
            (i !== rows.length - 1 ? "border-b border-border" : "")
          }
        >
          <span className="text-sm text-muted-foreground">{k}</span>
          <span className="font-serif text-xl md:text-2xl text-foreground tabular-nums">{v}</span>
        </div>
      ))}
    </div>
  );
}

function Tools() {
  return (
    <>
      <PageHero
        eyebrow="Tools & Calculators"
        title={<>Quiet tools for clearer decisions.</>}
        intro="Each calculator illustrates a concept. None of them recommend a product, account, or course of action."
      />
      <Section>
        <div className="grid lg:grid-cols-2 gap-6">
          <CompoundCalc />
          <MortgageCalc />
          <BudgetCalc />
          <DebtCalc />
        </div>
        <div className="mt-10">
          <Disclaimer />
        </div>
      </Section>
    </>
  );
}
