import { createFileRoute } from "@tanstack/react-router";
import { FadeUp, SlideIn, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-village.jpg";
import communityImg from "../assets/community-rooftop.jpg";
import yogaImg from "../assets/yoga-ocean.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lunja Village" },
      { name: "description", content: "Discover the story behind Lunja Village, a surf & nomad retreat in Taghazout, Morocco." },
      { property: "og:title", content: "About — Lunja Village" },
      { property: "og:description", content: "Discover the story behind Lunja Village, a surf & nomad retreat in Taghazout, Morocco." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={heroImg} alt="Lunja Village panoramic" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-display-brand text-xs tracking-[0.35em] uppercase text-amber-sun mb-4"
          >Our Story</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="font-script text-5xl md:text-7xl text-cream"
          >About <span className="text-coral">Us</span></motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream bg-grain">
        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="font-serif-brand text-3xl md:text-5xl text-ink leading-tight mb-8">
              Born from the <span className="font-elegant text-keppel">Atlantic breeze</span> and a dream
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-lg text-mud/70 leading-relaxed mb-6">
              Lunja Village isn't just a place — it's a feeling. Built on the coast of Imi Ouddar, 
              where the Atlas Mountains watch over the Atlantic's endless blue, this is where the world slows down 
              and life speeds up in all the right ways.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-lg text-mud/70 leading-relaxed">
              We created Lunja for the surfers, the creators, the soul-seekers. 103 cottages, each one a sanctuary. 
              A co-working space where deadlines meet sunsets. A pool where ideas float to the surface. 
              And a community where strangers become tribe.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-ink text-cream section-padding bg-grain">
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeUp>
            <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-coral mb-4">Our DNA</p>
            <h2 className="font-serif-brand text-3xl md:text-5xl mb-12">
              What makes us <span className="font-elegant text-celadon">Lunja</span>
            </h2>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔥", title: "Audacieux", desc: "Bold, never timid. We provoke comfort zones. The office can wait — the wave can't." },
              { icon: "🌊", title: "Authentique", desc: "No hotel jargon. We speak human, like a friend who knows an incredible place." },
              { icon: "✨", title: "Chaleureux", desc: "The brand smiles. It knows you're searching for more than a bed — a starting point." },
              { icon: "⚡", title: "Direct", desc: "Short sentences. Clear ideas. Lunja shows, feels, delivers. No overload." },
              { icon: "🌍", title: "Poétique", desc: "When the moment calls for it, Lunja writes beauty. Without overdoing it." },
              { icon: "🤝", title: "Inclusif", desc: "For all free spirits. Regardless of age, origin, or surf level." },
            ].map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "var(--coral)" }}
                  className="border border-cream/10 rounded-lg p-8 transition-colors"
                >
                  <span className="text-4xl block mb-4">{v.icon}</span>
                  <h3 className="font-display-brand text-sm tracking-[0.15em] uppercase text-amber-sun mb-3">{v.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Image + Quote */}
      <section className="grid md:grid-cols-2">
        <SlideIn direction="left">
          <div className="h-[500px] overflow-hidden">
            <img src={communityImg} alt="Community at Lunja" className="h-full w-full object-cover img-cover-golden" loading="lazy" width={1280} height={960} />
          </div>
        </SlideIn>
        <div className="flex items-center section-padding bg-vanilla">
          <FadeUp>
            <p className="font-elegant text-3xl md:text-4xl text-ink/80 leading-relaxed">
              "Tu arrives curieux. Tu repars changé."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-8 bg-coral" />
              <span className="font-display-brand text-xs tracking-[0.2em] uppercase text-coral">Lunja Spirit</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-cream bg-grain">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <FadeUp>
            <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-keppel mb-4">Life at Lunja</p>
            <h2 className="font-serif-brand text-3xl md:text-5xl text-ink mb-12">
              More than a <span className="font-elegant text-amber-sun">stay</span>
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏄", title: "Surf School", desc: "From your first wave to your five-hundredth" },
              { icon: "🧘‍♀️", title: "Yoga & Wellness", desc: "Sunrise sessions overlooking the infinite" },
              { icon: "💻", title: "Co-Working", desc: "Productivity tastes like salt here" },
              { icon: "🍵", title: "Local Culture", desc: "Tea, tajine, and Berber warmth" },
            ].map((a, i) => (
              <FadeUp key={a.title} delay={i * 0.1}>
                <div className="bg-warm rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                  <span className="text-4xl block mb-4">{a.icon}</span>
                  <h3 className="font-display-brand text-xs tracking-[0.15em] uppercase text-ink mb-2">{a.title}</h3>
                  <p className="text-mud/60 text-sm">{a.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
