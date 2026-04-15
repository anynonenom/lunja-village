import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp, FadeIn, StaggerChildren, StaggerItem, SlideIn } from "../components/AnimatedSection";
import heroImg from "../assets/hero-village.jpg";
import poolImg from "../assets/pool-terrace.jpg";
import surfImg from "../assets/surf-wave.jpg";
import cottageImg from "../assets/cottage-interior.jpg";
import communityImg from "../assets/community-rooftop.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Lunja Village aerial view at sunset"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display-brand text-xs tracking-[0.35em] uppercase text-amber-sun mb-6"
          >
            Imi Ouddar · Taghazout · Morocco
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-6xl md:text-8xl lg:text-9xl text-cream leading-none"
          >
            Lunja <span className="text-coral">Village</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 font-serif-brand italic text-xl md:text-2xl text-cream/70 max-w-lg"
          >
            "Là où l'Atlas embrasse le courant atlantique."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex gap-4"
          >
            <Link
              to="/booking"
              className="rounded-full bg-coral px-8 py-3 font-display-brand text-xs tracking-[0.2em] uppercase text-cream transition-all hover:bg-amber-sun hover:scale-105"
            >
              Book Your Stay
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-cream/30 px-8 py-3 font-display-brand text-xs tracking-[0.2em] uppercase text-cream/80 transition-all hover:border-cream hover:text-cream"
            >
              Explore
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-cream/50" />
          </div>
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="bg-keppel py-4 overflow-hidden">
        <div className="lunja-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 text-cream/70 font-display-brand text-xs tracking-[0.3em] uppercase">
              <span>Surf & Nomad</span><span className="text-vanilla">·</span>
              <span>103 Cottages</span><span className="text-vanilla">·</span>
              <span>Taghazout</span><span className="text-vanilla">·</span>
              <span>Atlas & Atlantic</span><span className="text-vanilla">·</span>
              <span>Good Vibes Only</span><span className="text-vanilla">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ INTRO ═══ */}
      <section className="section-padding bg-cream relative bg-grain">
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-coral mb-4">
              Welcome Home
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif-brand text-4xl md:text-6xl text-ink leading-tight max-w-3xl">
              Some come for the <span className="font-elegant text-keppel">surf.</span>
              <br />They stay for <span className="font-elegant text-coral">everything else.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg text-mud/70 max-w-2xl leading-relaxed">
              Nestled where the Atlas Mountains meet the Atlantic, Lunja Village is more than a destination. 
              It's a rhythm — of waves, creative energy, and quiet mornings that reset the soul. 
              103 cottages. 1 tribe.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section className="bg-warm">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <SlideIn direction="left">
            <div className="h-[500px] md:h-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                src={poolImg}
                alt="Pool and terrace at Lunja Village"
                className="h-full w-full object-cover img-cover-golden"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          </SlideIn>

          {/* Content */}
          <div className="flex flex-col justify-center section-padding">
            <StaggerChildren className="max-w-md">
              <StaggerItem>
                <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-keppel mb-4">
                  The Experience
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-serif-brand text-3xl md:text-5xl text-ink leading-tight">
                  Off the clock.<br />
                  <span className="font-elegant text-amber-sun">Fully alive.</span>
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 text-mud/60 leading-relaxed">
                  No emails. No alarms. Just sky above and earth below. 
                  The trail leads not only through the mountains, but deeper into self.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {[
                    { icon: "🌊", label: "Surf Breaks" },
                    { icon: "🧘", label: "Yoga Deck" },
                    { icon: "💻", label: "Co-Working" },
                    { icon: "🏊", label: "Infinity Pool" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <span className="text-2xl">{f.icon}</span>
                      <span className="font-display-brand text-xs tracking-[0.15em] uppercase text-ink/80">{f.label}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ═══ SURF & VIBES ═══ */}
      <section className="bg-ink text-cream relative overflow-hidden bg-grain">
        <div className="absolute -top-20 -right-20 font-script text-[20vw] text-keppel/5 leading-none select-none pointer-events-none">
          Surf
        </div>
        <div className="relative z-10 grid md:grid-cols-2">
          <div className="flex flex-col justify-center section-padding order-2 md:order-1">
            <StaggerChildren className="max-w-md">
              <StaggerItem>
                <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-amber-sun mb-4">
                  Ride the Tide
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-serif-brand text-3xl md:text-5xl leading-tight">
                  Your wave is<br />
                  <span className="font-elegant text-celadon">waiting.</span>
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 text-cream/50 leading-relaxed">
                  There's a wave between holding on and letting go — where freedom meets the unknown.
                  The ocean doesn't judge your skill level. It just invites you in.
                </p>
              </StaggerItem>
              <StaggerItem>
                <Link
                  to="/booking"
                  className="mt-8 inline-block rounded-full bg-coral px-8 py-3 font-display-brand text-xs tracking-[0.2em] uppercase text-cream transition-all hover:bg-amber-sun"
                >
                  Join the Tribe
                </Link>
              </StaggerItem>
            </StaggerChildren>
          </div>

          <SlideIn direction="right" className="order-1 md:order-2">
            <div className="h-[500px] md:h-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                src={surfImg}
                alt="Surfer riding wave at sunset"
                className="h-full w-full object-cover img-cover-golden"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ═══ COTTAGE PREVIEW ═══ */}
      <section className="section-padding bg-cream bg-grain">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <FadeUp>
            <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-keppel mb-4">
              Your Cottage
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif-brand text-4xl md:text-6xl text-ink mb-4">
              Where <span className="font-elegant text-amber-sun">comfort</span> meets wild
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-mud/60 max-w-xl mx-auto mb-12">
              Lin, bois flotté et terracotta. Each cottage is a sanctuary where the Moroccan breeze whispers through open windows.
            </p>
          </FadeUp>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl grid md:grid-cols-3 gap-4">
          {[
            { img: cottageImg, label: "Cozy Interiors", alt: "Lunja cottage interior" },
            { img: communityImg, label: "Rooftop Tribe", alt: "Community gathering on rooftop" },
            { img: poolImg, label: "Pool & Terrace", alt: "Pool and terrace" },
          ].map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] overflow-hidden rounded-lg"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 img-cover-golden"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="font-display-brand text-xs tracking-[0.2em] uppercase text-cream">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══ TAGLINE ═══ */}
      <section className="bg-keppel section-padding relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 font-script text-[18vw] text-cream/5 leading-none select-none pointer-events-none">
          Lunja
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="font-elegant text-4xl md:text-6xl text-cream/90 leading-relaxed">
              "The mind breathes. The soul remembers who it is."
            </p>
          </FadeIn>
          <FadeUp delay={0.3}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-vanilla/40" />
              <span className="text-2xl">🌸</span>
              <div className="h-px w-12 bg-vanilla/40" />
            </div>
          </FadeUp>
          <FadeUp delay={0.5}>
            <Link
              to="/booking"
              className="mt-10 inline-block rounded-full bg-cream px-10 py-4 font-display-brand text-xs tracking-[0.2em] uppercase text-keppel transition-all hover:bg-vanilla hover:scale-105"
            >
              Reserve Your Escape
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
