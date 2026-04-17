import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeUp } from "../components/AnimatedSection";

import heroImg from "../assets/lunja-rooftop.jpg";
import poolImg from "../assets/lunja-pool.jpg";
import surfImg from "../assets/lunja-surfshop.jpg";
import bedroomImg from "../assets/lunja-bedroom.jpg";
import coworkImg from "../assets/lunja-coworking.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lunja Village" },
      { name: "description", content: "Wander through Lunja Village in pictures. Cottages, pool, surf, and golden hour magic." },
      { property: "og:title", content: "Gallery — Lunja Village" },
      { property: "og:description", content: "Wander through Lunja Village in pictures." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Village", "Cottages", "Pool", "Surf", "Community"] as const;

const images = [
  { src: heroImg, cat: "Village", title: "Rooftop sunset", caption: "Golden hour from the lounge" },
  { src: bedroomImg, cat: "Cottages", title: "Cottage No. 17", caption: "Linen, drift wood, surf" },
  { src: poolImg, cat: "Pool", title: "Pergola pool", caption: "Stone arches, infinite blue" },
  { src: surfImg, cat: "Surf", title: "Board collection", caption: "Twelve breaks, one shop" },
  { src: coworkImg, cat: "Community", title: "Nomad lounge", caption: "Where ideas float" },
  { src: heroImg, cat: "Village", title: "Vue générale", caption: "The full village panorama" },
  { src: bedroomImg, cat: "Cottages", title: "Boho corner", caption: "Mirror, board, dreams" },
  { src: poolImg, cat: "Pool", title: "Terrasse", caption: "Where mornings begin" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 bg-ink overflow-hidden">
        <div className="absolute -top-10 -right-10 font-script text-[25vw] text-coral/[0.08] leading-none select-none pointer-events-none">
          frames
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}
            className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-amber-sun mb-6"
          >
            ◊ Gallery
          </motion.p>
          <h1 className="font-script text-5xl md:text-7xl lg:text-[10vw] text-cream leading-[0.9]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }} animate={{ y: "0%" }}
                transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Frames of <span className="font-elegant text-coral">Lunja</span>
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
            className="mt-6 font-serif-brand italic text-cream/50 max-w-md"
          >
            Golden hour. Film grain. Real moments — no stock photos, ever.
          </motion.p>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="bg-paper bg-grain section-padding">
        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-12 border-b border-mud/10 pb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative rounded-full px-5 py-2 font-display-brand text-[10px] tracking-[0.2em] uppercase transition-all ${
                    filter === cat
                      ? "bg-ink text-cream"
                      : "text-mud/60 hover:text-ink"
                  }`}
                >
                  {cat}
                  {filter === cat && (
                    <motion.span
                      layoutId="dot"
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-coral"
                    />
                  )}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Editorial collage grid */}
          <motion.div layout className="grid grid-cols-12 gap-2 md:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => {
                // Editorial size pattern
                const sizes = [
                  "col-span-12 md:col-span-7 row-span-2 aspect-[4/5] md:aspect-auto md:h-[600px]",
                  "col-span-6 md:col-span-5 aspect-square",
                  "col-span-6 md:col-span-5 aspect-square",
                  "col-span-12 md:col-span-4 aspect-[4/5]",
                  "col-span-12 md:col-span-8 aspect-[16/10]",
                  "col-span-6 md:col-span-4 aspect-square",
                  "col-span-6 md:col-span-4 aspect-[3/4]",
                  "col-span-12 md:col-span-4 aspect-square",
                ];
                const cls = sizes[i % sizes.length];
                return (
                  <motion.div
                    key={`${filter}-${i}`}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative overflow-hidden cursor-zoom-in ${cls}`}
                    onClick={() => setLightbox(i)}
                  >
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      src={img.src}
                      alt={img.title}
                      className="absolute inset-0 h-full w-full object-cover img-cover-golden"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <p className="font-display-brand text-[10px] tracking-[0.3em] uppercase text-amber-sun mb-1">
                        {img.cat}
                      </p>
                      <h3 className="font-serif-brand text-xl text-cream">{img.title}</h3>
                      <p className="text-cream/60 text-sm mt-1">{img.caption}</p>
                    </div>
                    {/* Index number */}
                    <div className="absolute top-4 left-4 font-display-brand text-[10px] tracking-[0.3em] text-cream/0 group-hover:text-cream/60 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-8 text-cream/60 hover:text-coral text-3xl font-display-brand z-10"
              aria-label="Close"
            >
              ×
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[90vw] max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox]?.src}
                alt={filtered[lightbox]?.title}
                className="max-h-[80vh] object-contain rounded-sm shadow-2xl"
              />
              <div className="text-center mt-4">
                <p className="font-display-brand text-[10px] tracking-[0.3em] uppercase text-amber-sun">
                  {filtered[lightbox]?.cat}
                </p>
                <p className="font-serif-brand text-xl text-cream mt-1">{filtered[lightbox]?.title}</p>
                <p className="text-cream/50 text-sm">{filtered[lightbox]?.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
