import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/60 relative overflow-hidden">
      {/* Color bar */}
      <div className="h-1.5 bg-gradient-to-r from-keppel via-celadon via-vanilla via-amber-sun to-coral" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-script text-3xl text-cream">
              Lunja <span className="text-coral">Village</span>
            </span>
            <p className="mt-4 font-serif-brand italic text-cream/40 text-sm leading-relaxed">
              "Là où l'Atlas embrasse le courant atlantique."
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="font-display-brand text-xs tracking-[0.25em] uppercase text-amber-sun mb-2">
              Navigate
            </span>
            {[
              { to: "/" as const, label: "Home" },
              { to: "/about" as const, label: "About Us" },
              { to: "/gallery" as const, label: "Gallery" },
              { to: "/booking" as const, label: "Book a Stay" },
              { to: "/contact" as const, label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm hover:text-coral transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="font-display-brand text-xs tracking-[0.25em] uppercase text-amber-sun mb-2">
              Find Us
            </span>
            <p className="text-sm">Imi Ouddar, Taghazout</p>
            <p className="text-sm">Agadir, Morocco</p>
            <p className="text-sm mt-2">hello@lunjavillage.com</p>
            <div className="flex gap-4 mt-4">
              <span className="text-lg cursor-pointer hover:text-coral transition-colors">📷</span>
              <span className="text-lg cursor-pointer hover:text-coral transition-colors">🌐</span>
              <span className="text-lg cursor-pointer hover:text-coral transition-colors">📘</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase text-cream/25">
            © 2026 Lunja Village — MADAEF
          </p>
          <p className="text-xs text-cream/20 font-serif-brand italic">
            Surf · Créer · Préserver
          </p>
        </div>
      </div>
    </footer>
  );
}
