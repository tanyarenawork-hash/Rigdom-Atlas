import { Info } from "lucide-react";

export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <aside
      className={
        "flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground " +
        className
      }
    >
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-soft text-foreground">
        <Info className="h-3.5 w-3.5" />
      </span>
      <p className="leading-relaxed">
        <span className="font-semibold text-foreground">Educational use only.</span>{" "}
        Rigdom Atlas is not a bank, broker, investment firm, or financial
        advisory service. All content is provided for general educational
        purposes and does not constitute financial, tax, investment, or legal
        advice. Consult a qualified professional before making financial
        decisions.
      </p>
    </aside>
  );
}
