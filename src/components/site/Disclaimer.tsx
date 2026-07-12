export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <aside
      className={
        "border-t border-b border-emerald/15 py-6 text-[10px] uppercase tracking-[0.22em] text-emerald/55 leading-loose " +
        className
      }
    >
      <span className="text-gold font-semibold">Disclaimer —</span>{" "}
      Rigdom Atlas is a nonprofit educational institution. We are not a bank,
      broker-dealer, or registered investment adviser. All content is
      published for general educational purposes and does not constitute
      financial, tax, legal, or investment advice. Consult a qualified
      professional before making financial decisions.
    </aside>
  );
}
