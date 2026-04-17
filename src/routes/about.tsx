import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { RevealWords } from "../components/RevealText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "../assets/lunja-rooftop.jpg";
import bedroomImg from "../assets/lunja-bedroom.jpg";
import coworkImg from "../assets/lunja-coworking.jpg";
import poolImg from "../assets/lunja-pool.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Lunja Village" },
      { name: "description", content: "The soul behind Lunja Village — a surf & nomad sanctuary in Taghazout, Morocco." },
      { property: "og:title", content: "Our Story — Lunja Village" },
      { property: "og:description", content: "The soul behind Lunja Village — a surf & nomad sanctuary in Taghazout, Morocco." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[80vh] overflow-hidden bg-ink">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={heroImg} alt="Lunja Village rooftop" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/80" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}
            className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-amber-sun mb-6"
          >
            Chapter One
          </motion.p>
          <h1 className="font-script text-5xl md:text-7xl lg:text-[12vw] text-cream leading-[0.9] max-w-5xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }} animate={{ y: "0%" }}
                transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Our <span className="text-coral italic">soul</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden -mt-4">
              <motion.span
                initial={{ y: "100%" }} animate={{ y: "0%" }}
                transition={{ delay: 2.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block font-elegant text-celadon"
              >
                story.
              </motion.span>
            </span>
          </h1>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="bg-paper bg-grain section-padding">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-1">
              <p className="font-elegant text-7xl text-coral leading-none">L</p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif-brand text-3xl md:text-5xl text-ink leading-tight mb-8">
                <RevealWords text="Born from the Atlantic breeze" />{" "}
                <span className="font-elegant text-keppel">and a dream</span>
              </h2>
              <FadeUp delay={0.3}>
                <p className="text-lg text-mud/70 leading-relaxed mb-6">
                  Lunja Village isn't just a place — it's a feeling. Built on the coast of Imi Ouddar, where the Atlas Mountains watch over the Atlantic's endless blue, this is where the world slows down and life speeds up in all the right ways.
                </p>
                <p className="text-lg text-mud/70 leading-relaxed">
                  We created Lunja for the surfers, the creators, the soul-seekers. <span className="text-coral font-medium">103 cottages</span>, each one a sanctuary. A co-working space where deadlines meet sunsets. A pool where ideas float to the surface. And a community where strangers become tribe.
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-4">
              <FadeUp delay={0.5}>
                <div className="relative polaroid float-slow rotate-3 w-full">
                  <img src={bedroomImg} alt="Boho cottage" className="aspect-[4/5] object-cover" />
                  <p className="text-center mt-3 font-elegant text-2xl text-ink">Home</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-ink text-cream section-padding bg-grain noise-heavy relative">
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-amber-sun mb-4">
              The journey
            </p>
            <h2 className="font-serif-brand text-4xl md:text-6xl mb-16">
              From <span className="font-elegant text-celadon">dream</span> to <span className="font-elegant text-coral">village.</span>
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream/10" />

            {[
              { year: "2018", title: "The first wave", desc: "A surfer pulls into Anchor Point at sunrise. The dream begins." },
              { year: "2021", title: "Breaking ground", desc: "Local artisans gather. Stone, lime, and patience become walls." },
              { year: "2024", title: "Lunja awakens", desc: "103 cottages open their doors. The tribe starts arriving." },
              { year: "2026", title: "Today", desc: "A village. A rhythm. A chapter you're invited to write." },
            ].map((item, i) => (
              <FadeUp key={item.year} delay={i * 0.1}>
                <div className={`relative grid grid-cols-[40px_1fr] md:grid-cols-2 gap-6 md:gap-12 mb-16 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`${i % 2 === 0 ? "md:text-right md:order-1" : "md:order-2 md:col-start-2"}`}>
                    <p className="font-elegant text-6xl md:text-7xl text-coral leading-none">{item.year}</p>
                  </div>
                  <div className={`md:order-${i % 2 === 0 ? "2" : "1"}`}>
                    <h3 className="font-serif-brand text-2xl mb-2">{item.title}</h3>
                    <p className="text-cream/50 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-coral ring-4 ring-ink" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* DNA */}
      <section className="bg-cream section-padding bg-grain">
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeUp>
            <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-coral mb-4">Our DNA</p>
            <h2 className="font-serif-brand text-4xl md:text-6xl text-ink mb-16">
              Six values, <span className="font-elegant text-keppel">one tribe.</span>
            </h2>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-mud/10">
            {[
              { num: "01", title: "Audacieux", desc: "Bold, never timid. The wave can't wait." },
              { num: "02", title: "Authentique", desc: "No hotel jargon. We speak human." },
              { num: "03", title: "Chaleureux", desc: "The brand smiles. The doors open wide." },
              { num: "04", title: "Direct", desc: "Short sentences. Clear ideas. No noise." },
              { num: "05", title: "Poétique", desc: "Beauty when the moment calls for it." },
              { num: "06", title: "Inclusif", desc: "For all free spirits. Every level." },
            ].map((v) => (
              <StaggerItem key={v.num}>
                <motion.div
                  whileHover={{ backgroundColor: "var(--coral)", color: "var(--cream)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-cream p-8 md:p-10 group cursor-default h-full"
                >
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="font-display-brand text-xs tracking-[0.2em] text-coral group-hover:text-cream/80">{v.num}</span>
                    <div className="flex-1 h-px bg-mud/20 group-hover:bg-cream/30" />
                  </div>
                  <h3 className="font-serif-brand text-3xl mb-3">{v.title}</h3>
                  <p className="text-sm leading-relaxed opacity-70">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="bg-vanilla section-padding relative overflow-hidden">
        <div className="absolute -top-10 -left-10 font-script text-[20vw] text-coral/10 leading-none select-none pointer-events-none">
          "
        </div>
        <div className="relative z-10 mx-auto max-w-5xl">
          <FadeUp>
            <p className="font-elegant text-4xl md:text-7xl text-ink/90 leading-[1.1]">
              You arrive curious.
              <br />
              <span className="text-coral">You leave changed.</span>
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-px w-16 bg-coral" />
              <span className="font-display-brand text-[10px] tracking-[0.3em] uppercase text-mud/60">The Lunja Spirit</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* IMAGE GRID + CTA */}
      <section className="bg-ink section-padding relative">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-3 mb-16">
            <div className="col-span-12 md:col-span-5">
              <img src={coworkImg} alt="Co-working" className="w-full aspect-[4/5] object-cover img-cover-golden" />
            </div>
            <div className="col-span-6 md:col-span-4">
              <img src={poolImg} alt="Pool" className="w-full aspect-square object-cover img-cover-golden" />
            </div>
            <div className="col-span-6 md:col-span-3">
              <img src={bedroomImg} alt="Bedroom" className="w-full aspect-[3/4] object-cover img-cover-golden" />
            </div>
          </div>

          <FadeUp>
            <div className="text-center">
              <p className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-amber-sun mb-6">
                Ready to write your chapter?
              </p>
              <Link
                to="/booking"
                className="inline-block rounded-full bg-coral px-12 py-5 font-display-brand text-xs tracking-[0.3em] uppercase text-cream hover:bg-amber-sun transition-colors"
              >
                Reserve your stay →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
