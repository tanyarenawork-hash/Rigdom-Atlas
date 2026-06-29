import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-sm">
              R
            </span>
            <span className="font-serif text-lg tracking-tight">
              Rigdom <span className="text-accent">Atlas</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            An independent financial literacy organization dedicated to making
            wealth-building knowledge accessible to students, professionals,
            families, and aspiring entrepreneurs.
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Educational Use Only
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Learn</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/guides" className="hover:text-accent">Financial Guides</Link></li>
            <li><Link to="/learning-paths" className="hover:text-accent">Learning Paths</Link></li>
            <li><Link to="/resources" className="hover:text-accent">Resources</Link></li>
            <li><Link to="/tools" className="hover:text-accent">Calculators & Tools</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Organization</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/newsletter" className="hover:text-accent">Newsletter</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rigdom Atlas. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            Rigdom Atlas provides educational information only and does not
            offer financial, tax, investment, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
