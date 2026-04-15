import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeUp, FadeIn, ScaleIn } from "../components/AnimatedSection";
import heroImg from "../assets/hero-village.jpg";
import poolImg from "../assets/pool-terrace.jpg";
import surfImg from "../assets/surf-wave.jpg";
import cottageImg from "../assets/cottage-interior.jpg";
import communityImg from "../assets/community-rooftop.jpg";
import yogaImg from "../assets/yoga-ocean.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lunja Village" },
      { name: "description", content: "Explore Lunja Village through stunning visuals. Surf, cottages, community, and Moroccan beauty." },
      { property: "og:title", content: "Gallery — Lunja Village" },
      { property: "og:description", content: "Explore Lunja Village through stunning visuals." },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Village", "Surf", "Cottages", "Community"] as const;

const images = [
  { src: heroImg, cat: "Village", label: "Aerial Vue Générale", ratio: "col-span-2 row-span-2" },
  { src: surfImg, cat: "Surf", label: "Surf Atlantique", ratio: "" },
  { src: communityImg, cat: "Community", label: "Rooftop Tribe", ratio: "" },
  { src: cottageImg, cat: "Cottages", label: "Cozy Interiors", ratio: "col-span-2" },
  { src: yogaImg, cat: "Community", label: "Yoga Deck Sunrise", ratio: "" },
  { src: poolImg, cat: "Village", label: "Piscine & Terrasse", ratio: "" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-display-brand text-xs tracking-[0.35em] uppercase text-keppel mb-4"
          >Imagery Direction</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="font-script text-5xl md:text-7xl text-cream"
          >Our <span className="text-coral">Gallery</span></motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-4 font-serif-brand italic text-cream/50 text-lg"
          >Golden hour. Film grain. Real moments.</motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-cream section-padding bg-grain">
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeUp>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2 font-display-brand text-xs tracking-[0.15em] uppercase transition-all ${
                    filter === cat
                      ? "bg-coral text-cream"
                      : "bg-sand text-mud/60 hover:bg-keppel hover:text-cream"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Masonry-ish grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.label}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-lg cursor-pointer ${img.ratio}`}
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 img-cover-golden"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div>
                      <span className="font-display-brand text-xs tracking-[0.15em] uppercase text-cream">{img.label}</span>
                      <p className="text-cream/50 text-xs mt-1">{img.cat}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-8 text-cream/60 hover:text-cream text-3xl font-display-brand"
            >×</button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.label}
              className="max-w-[92vw] max-h-[92vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
