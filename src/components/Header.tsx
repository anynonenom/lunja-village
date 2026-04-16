import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/" as const, label: "Home", num: "01" },
  { to: "/about" as const, label: "About", num: "02" },
  { to: "/gallery" as const, label: "Gallery", num: "03" },
  { to: "/booking" as const, label: "Book", num: "04" },
  { to: "/contact" as const, label: "Contact", num: "05" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent py-6"
            : "bg-cream/80 backdrop-blur-xl border-b border-mud/5 py-3"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`font-script text-2xl lg:text-3xl tracking-wide transition-colors ${
              isTransparent ? "text-cream" : "text-ink"
            }`}>
              Lunja <span className="text-coral">Village</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`group relative font-display-brand text-[11px] tracking-[0.25em] uppercase px-4 py-2 transition-colors duration-300 ${
                  isTransparent ? "text-cream/80 hover:text-cream" : "text-mud/70 hover:text-ink"
                }`}
                activeProps={{
                  className: isTransparent ? "!text-amber-sun" : "!text-coral",
                }}
                activeOptions={{ exact: link.to === "/" }}
              >
                <span className={`mr-1.5 ${isTransparent ? "text-amber-sun/60" : "text-coral/60"}`}>
                  {link.num}
                </span>
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-coral scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:block">
            <Link
              to="/booking"
              className="rounded-full bg-coral px-6 py-2.5 font-display-brand text-[10px] tracking-[0.25em] uppercase text-cream hover:bg-amber-sun transition-all hover:scale-105"
            >
              Reserve →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex flex-col gap-1.5 ${
              isTransparent ? "text-cream" : "text-ink"
            }`}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-current"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-current"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-current"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-ink lg:hidden overflow-hidden"
          >
            {/* Background script */}
            <div className="absolute -bottom-20 -right-10 font-script text-[40vw] text-coral/10 leading-none select-none pointer-events-none">
              Lunja
            </div>

            <div className="relative h-full flex flex-col justify-center px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-cream/10"
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 py-5 group"
                  >
                    <span className="font-display-brand text-xs text-amber-sun/60">{link.num}</span>
                    <span className="font-elegant text-5xl text-cream group-hover:text-coral transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-col gap-2 text-cream/40 font-display-brand text-[10px] tracking-[0.3em] uppercase"
              >
                <p>Imi Ouddar · Taghazout</p>
                <p>hello@lunjavillage.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
