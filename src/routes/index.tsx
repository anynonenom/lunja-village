import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { FadeUp, FadeIn, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { MagneticButton } from "../components/MagneticButton";
import { RevealWords } from "../components/RevealText";
import { Marquee } from "../components/Marquee";

import heroImg from "../assets/lunja-rooftop.jpg";
import poolImg from "../assets/lunja-pool.jpg";
import surfImg from "../assets/lunja-surfshop.jpg";
import bedroomImg from "../assets/lunja-bedroom.jpg";
import coworkImg from "../assets/lunja-coworking.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunja Village — Surf, Soul & Sun in Taghazout" },
      { name: "description", content: "A retreat for surfers, creators and free spirits where the Atlas embraces the Atlantic." },
      { property: "og:title", content: "Lunja Village — Surf, Soul & Sun in Taghazout" },
      { property: "og:description", content: "A retreat for surfers, creators and free spirits where the Atlas embraces the Atlantic." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Mouse follow blob
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 15 });
  const sy = useSpring(my, { stiffness: 80, damping: 15 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  // Collage section parallax
  const collageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: collageP } = useScroll({ target: collageRef, offset: ["start end", "end start"] });
  const slow = useTransform(collageP, [0, 1], ["10%", "-10%"]);
  const fast = useTransform(collageP, [0, 1], ["20%", "-30%"]);
  const counter = useTransform(collageP, [0, 1], ["-15%", "15%"]);

  return (
    <main className="overflow-hidden">
      {/* ═══════════════ CINEMATIC HERO ═══════════════ */}
      <section ref={heroRef} className="relative h-[110vh] overflow-hidden bg-ink">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Lunja Village rooftop terrace at golden hour"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/90" />
        </motion.div>

        {/* Floating cursor blob (desktop) */}
        <motion.div
          style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
          className="hidden lg:block fixed top-0 left-0 w-3 h-3 rounded-full bg-coral z-30 pointer-events-none mix-blend-screen"
        />
        <motion.div
          style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="hidden lg:block fixed top-0 left-0 w-24 h-24 rounded-full bg-amber-sun/15 blur-2xl z-30 pointer-events-none"
        />

        {/* Editorial side label */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <p className="writing-vertical font-display-brand text-[10px] tracking-[0.6em] uppercase text-cream/40">
            Est. 2024 · N 30°32′ W 9°42′
          </p>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <p className="writing-vertical font-display-brand text-[10px] tracking-[0.6em] uppercase text-cream/40">
            Surf · Soul · Sun
          </p>
        </div>

        <motion.div
          style={{ y: titleY, opacity: heroOpacity }}
          className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="font-display-brand text-[10px] md:text-xs tracking-[0.5em] uppercase text-amber-sun mb-8"
          >
            Imi Ouddar · Taghazout · Morocco
          </motion.p>

          <h1 className="font-script text-[18vw] md:text-[12vw] lg:text-[10vw] text-cream leading-[0.9] tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 1.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Lunja
              </motion.span>
            </span>
            <span className="block overflow-hidden -mt-4 md:-mt-8">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 2.1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="block font-elegant text-coral"
              >
                Village
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="mt-8 font-serif-brand italic text-base md:text-xl text-cream/70 max-w-md"
          >
            Where the Atlas embraces the Atlantic — and your soul finally lands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link to="/booking">
              <MagneticButton className="group relative overflow-hidden rounded-full bg-coral px-10 py-4 font-display-brand text-xs tracking-[0.25em] uppercase text-cream transition-colors hover:bg-amber-sun">
                <span className="relative z-10">Reserve Your Cottage</span>
              </MagneticButton>
            </Link>
            <Link
              to="/gallery"
              className="group flex items-center gap-2 font-display-brand text-xs tracking-[0.25em] uppercase text-cream/70 hover:text-cream transition-colors"
            >
              <span className="h-px w-8 bg-cream/40 group-hover:w-12 transition-all" />
              Explore the village
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.8 }}
          className="absolute bottom-12 left-0 right-0 z-10 flex justify-between items-end px-6 lg:px-16"
        >
          <div className="hidden md:block">
            <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-cream/40 mb-1">
              Scroll to wander
            </p>
            <motion.div
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-12 w-px bg-cream/40 origin-top"
            />
          </div>
          <div className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-cream/40 text-right">
            <p>103 Cottages</p>
            <p className="mt-1 text-coral">A whole tribe</p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ MARQUEE BAND ═══════════════ */}
      <div className="bg-ink border-y border-cream/5 py-6 relative z-20">
        <Marquee>
          {["Surf", "★", "Yoga", "★", "Co-Work", "★", "Pool", "★", "Tribe", "★", "Sunsets", "★", "Tagine", "★", "Atlas", "★"].map((w, i) => (
            <span
              key={i}
              className={`font-elegant text-4xl md:text-6xl ${w === "★" ? "text-coral" : "text-cream/80"}`}
            >
              {w}
            </span>
          ))}
        </Marquee>
      </div>

      {/* ═══════════════ INTRO — EDITORIAL ═══════════════ */}
      <section className="bg-paper bg-grain section-padding relative">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-2">
              <FadeUp>
                <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-coral writing-vertical hidden lg:block">
                  ① Welcome
                </p>
                <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-coral lg:hidden">
                  ① Welcome
                </p>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif-brand text-4xl md:text-6xl lg:text-7xl text-ink leading-[1.05]">
                <RevealWords text="Some come for the" />{" "}
                <span className="font-elegant text-keppel">surf.</span>
                <br />
                <RevealWords text="They stay for" delay={0.4} />{" "}
                <span className="font-elegant text-coral">everything else.</span>
              </h2>
            </div>
            <div className="lg:col-span-3">
              <FadeUp delay={0.6}>
                <p className="text-mud/70 leading-relaxed border-l-2 border-amber-sun pl-4">
                  103 cottages on the Moroccan coast — a rhythm of waves, golden afternoons, and slow mornings that reset the soul.
                </p>
              </FadeUp>
            </div>
          </div>

          {/* Stats strip */}
          <FadeUp delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-mud/10">
              {[
                { num: "103", label: "Cottages" },
                { num: "12", label: "Surf spots" },
                { num: "365", label: "Sunsets" },
                { num: "∞", label: "Good vibes" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-elegant text-5xl md:text-7xl text-coral leading-none">{s.num}</p>
                  <p className="mt-2 font-display-brand text-[10px] tracking-[0.3em] uppercase text-mud/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════ COLLAGE PARALLAX ═══════════════ */}
      <section ref={collageRef} className="bg-ink relative overflow-hidden py-32">
        {/* Background script word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-elegant text-[28vw] text-cream/[0.04] leading-none select-none">
            escape
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Left tall image */}
            <motion.div style={{ y: slow }} className="col-span-7 md:col-span-5 row-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={bedroomImg}
                  alt="Cozy boho cottage bedroom with surfboard"
                  className="h-full w-full object-cover img-cover-golden"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-cream text-ink px-3 py-1 font-display-brand text-[10px] tracking-[0.2em] uppercase">
                    Cottage No. 17
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Top right text */}
            <motion.div style={{ y: counter }} className="col-span-5 md:col-span-7 flex flex-col justify-center">
              <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-amber-sun mb-4">
                ② The cottages
              </p>
              <h3 className="font-serif-brand text-3xl md:text-5xl lg:text-6xl text-cream leading-tight">
                Linen, drift wood,
                <br />
                <span className="font-elegant text-celadon">terracotta dreams.</span>
              </h3>
              <p className="mt-6 text-cream/50 leading-relaxed max-w-md">
                Each cottage is a sanctuary of quiet luxury — handcrafted details, ocean breeze through arched windows, and mornings that smell like mint tea.
              </p>
            </motion.div>

            {/* Bottom row */}
            <motion.div style={{ y: fast }} className="col-span-5 md:col-span-3">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <img
                  src={surfImg}
                  alt="Vintage surfboard collection"
                  className="h-full w-full object-cover img-cover-golden"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div style={{ y: slow }} className="col-span-7 md:col-span-4">
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={poolImg}
                  alt="Pool terrace pergola overlooking ocean"
                  className="h-full w-full object-cover img-cover-golden"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-cream/10">
              <p className="font-elegant text-3xl md:text-4xl text-cream/80">
                "Less noise. More soul."
              </p>
              <Link
                to="/gallery"
                className="group flex items-center gap-3 font-display-brand text-xs tracking-[0.25em] uppercase text-amber-sun hover:text-coral transition-colors"
              >
                See the full village
                <span className="block h-px w-12 bg-current group-hover:w-20 transition-all" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════ FEATURE SPLIT — POOL ═══════════════ */}
      <section className="bg-vanilla relative overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-[80vh]">
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <img
                src={poolImg}
                alt="Lunja Village pool terrace at midday"
                className="h-full w-full object-cover img-cover-golden min-h-[500px]"
                loading="lazy"
              />
            </motion.div>
            {/* Floating polaroid */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, y: 30 }}
              whileInView={{ opacity: 1, rotate: -6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block absolute -bottom-12 -right-8 lg:right-12 polaroid float-slow w-48 z-10"
            >
              <img src={surfImg} alt="" className="aspect-square object-cover" />
              <p className="text-center mt-2 font-elegant text-xl text-ink">Vol. I</p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex items-center section-padding">
            <div className="max-w-md">
              <FadeUp>
                <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-coral mb-4">
                  ③ The Experience
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-serif-brand text-4xl md:text-5xl text-ink leading-tight mb-6">
                  Off the clock.
                  <br />
                  <span className="font-elegant text-coral">Out of sync.</span>
                  <br />
                  Fully alive.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-mud/70 leading-relaxed mb-10">
                  This is what we designed Lunja for — that sensation when nothing's urgent and everything matters.
                </p>
              </FadeUp>

              <StaggerChildren className="space-y-4">
                {[
                  { num: "01", label: "Pool & Pergola", desc: "Stone arches, ocean horizon" },
                  { num: "02", label: "Surf School", desc: "From first wave to fifth-hundred" },
                  { num: "03", label: "Yoga Deck", desc: "Sunrise sessions over the sea" },
                  { num: "04", label: "Co-Working", desc: "Productivity tastes like salt" },
                ].map((f) => (
                  <StaggerItem key={f.num}>
                    <div className="group flex items-center gap-6 py-4 border-b border-ink/10 hover:border-coral transition-colors cursor-default">
                      <span className="font-display-brand text-xs tracking-[0.2em] text-keppel">{f.num}</span>
                      <div className="flex-1">
                        <p className="font-serif-brand text-xl text-ink group-hover:translate-x-2 transition-transform">
                          {f.label}
                        </p>
                        <p className="text-xs text-mud/50 mt-0.5">{f.desc}</p>
                      </div>
                      <span className="font-display-brand text-xl text-coral opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DARK SURF MOMENT ═══════════════ */}
      <section className="bg-ink text-cream relative overflow-hidden bg-grain noise-heavy">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-script text-[35vw] text-keppel/[0.06] leading-none select-none pointer-events-none">
          surf
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 min-h-[90vh]">
          <div className="flex flex-col justify-center section-padding order-2 lg:order-1">
            <div className="max-w-md">
              <FadeUp>
                <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-amber-sun mb-4">
                  ④ Ride the tide
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-serif-brand text-4xl md:text-6xl leading-tight mb-6">
                  There's a wave between
                  <br />
                  <span className="font-elegant text-celadon">holding on</span> and
                  <br />
                  <span className="font-elegant text-coral">letting go.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-cream/50 leading-relaxed mb-8">
                  Where freedom meets the unknown. The ocean doesn't judge your skill — it just invites you in. Anchor Point, Killer, La Source, Devil's Rock. Twelve world-class breaks, one home base.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <Link to="/booking">
                  <MagneticButton className="rounded-full bg-coral px-10 py-4 font-display-brand text-xs tracking-[0.25em] uppercase text-cream hover:bg-amber-sun transition-colors">
                    Catch your wave
                  </MagneticButton>
                </Link>
              </FadeUp>
            </div>
          </div>

          <motion.div
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative order-1 lg:order-2 min-h-[500px] lg:min-h-full overflow-hidden"
          >
            <img
              src={surfImg}
              alt="Vintage surfboard collection at the surf shop"
              className="h-full w-full object-cover img-cover-golden"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink/30" />
            {/* Tag */}
            <div className="absolute top-8 right-8">
              <div className="bg-cream/95 backdrop-blur px-4 py-3">
                <p className="font-display-brand text-[10px] tracking-[0.3em] uppercase text-mud/50">Wave forecast</p>
                <p className="font-serif-brand text-2xl text-ink">2.1m · ↗ NW</p>
                <p className="font-elegant text-coral text-sm">Glassy at dawn</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ NOMAD CO-WORKING ═══════════════ */}
      <section className="bg-cream relative overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-[80vh]">
          <div className="lg:col-span-5 flex items-center section-padding order-2 lg:order-1">
            <div className="max-w-md">
              <FadeUp>
                <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-keppel mb-4">
                  ⑤ For the nomads
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-serif-brand text-4xl md:text-5xl text-ink leading-tight mb-6">
                  Your office,
                  <br />
                  <span className="font-elegant text-amber-sun">reinvented.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-mud/70 leading-relaxed mb-8">
                  Macramé walls. Hammock chairs. Stable wifi. Coffee that knows your name. Build your dreams with the Atlantic as your background noise.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="flex flex-wrap gap-2">
                  {["Fiber 1Gbps", "Quiet zones", "Phone booths", "Coffee bar", "Open 24/7"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-mud/20 px-4 py-1.5 font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>

          <div className="lg:col-span-7 relative order-1 lg:order-2 min-h-[500px]">
            <motion.div
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-full"
            >
              <img
                src={coworkImg}
                alt="Nomads co-working in boho cafe space with hammock"
                className="h-full w-full object-cover img-cover-golden"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ QUOTE — POETIC ═══════════════ */}
      <section className="bg-sunset section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <FadeIn>
            <p className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-cream/70 mb-8">
              The Lunja Way
            </p>
          </FadeIn>
          <FadeUp delay={0.2}>
            <p className="font-elegant text-4xl md:text-7xl text-cream leading-[1.1]">
              No map needed.
              <br />
              Just follow your soul.
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <div className="mt-12 flex items-center justify-center gap-6">
              <span className="h-px w-16 bg-cream/40" />
              <span className="font-serif-brand italic text-cream/80">Good life. Sea. Calm. Love.</span>
              <span className="h-px w-16 bg-cream/40" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════ CTA — MASSIVE ═══════════════ */}
      <section className="bg-ink section-padding relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <FadeUp>
            <p className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-amber-sun mb-6">
              Ready when you are
            </p>
          </FadeUp>
          <h2 className="font-script text-[15vw] md:text-[10vw] text-cream leading-[0.85]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Come as you are.
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-2">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block text-coral"
              >
                Leave changed.
              </motion.span>
            </span>
          </h2>
          <FadeUp delay={0.6}>
            <Link to="/booking" className="inline-block mt-12">
              <MagneticButton className="rounded-full bg-coral px-12 py-5 font-display-brand text-xs tracking-[0.3em] uppercase text-cream hover:bg-amber-sun transition-colors">
                Book your escape →
              </MagneticButton>
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
