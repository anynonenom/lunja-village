import { Link } from "@tanstack/react-router";
import logoLunja from "../assets/logo-lunja.png";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/60 relative overflow-hidden">
      {/* Color bar */}
      <div className="h-1.5 bg-gradient-to-r from-keppel via-celadon via-vanilla via-amber-sun to-coral" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <img
              src={logoLunja}
              alt="Lunja Village"
              className="h-40 w-auto brightness-0 invert"
            />
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


                               
                                <div className="flex gap-4" >
                                  {["Instagram", "TikTok", "YouTube"].map((s) => (
                                    <a
                                      key={s}
                                      href="#"
                                      className="font-elegant text-2xl text-white hover:text-coral transition-colors"
                                    >
                                      {s}
                                    </a>
                                  ))}
                                </div>


              {/* <span className="text-lg cursor-pointer hover:text-coral transition-colors">📷</span>
              <span className="text-lg cursor-pointer hover:text-coral transition-colors">🌐</span>
              <span className="text-lg cursor-pointer hover:text-coral transition-colors">📘</span> */}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-elegant text-xs tracking-widest uppercase text-cream/25">
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
