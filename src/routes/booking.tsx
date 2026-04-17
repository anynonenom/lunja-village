import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeUp, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import bedroomImg from "../assets/lunja-bedroom.jpg";
import poolImg from "../assets/lunja-pool.jpg";
import rooftopImg from "../assets/lunja-rooftop.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Reserve Your Cottage — Lunja Village" },
      { name: "description", content: "Book your surf & nomad cottage at Lunja Village in Taghazout, Morocco." },
      { property: "og:title", content: "Reserve Your Cottage — Lunja Village" },
      { property: "og:description", content: "Book your surf & nomad cottage at Lunja Village." },
      { property: "og:image", content: bedroomImg },
    ],
  }),
  component: BookingPage,
});

const cottages = [
  {
    name: "Ocean Breeze",
    img: bedroomImg,
    beds: "1 Bed · 2 Guests",
    price: 85,
    desc: "Cozy studio with ocean glimpses. Linen sheets, your own surfboard rack.",
    tags: ["Studio", "Sea view"],
  },
  {
    name: "Atlas View",
    img: poolImg,
    beds: "2 Beds · 4 Guests",
    price: 120,
    desc: "Spacious cottage facing the mountains. Private patio, hammock included.",
    tags: ["2 Beds", "Mountain view", "Patio"],
  },
  {
    name: "Surf Suite",
    img: rooftopImg,
    beds: "2 Beds + Loft · 6 Guests",
    price: 165,
    desc: "Premium cottage with rooftop terrace. Sunset spot guaranteed.",
    tags: ["Rooftop", "Best seller", "Sunset spot"],
  },
];

function BookingPage() {
  const [selected, setSelected] = useState(0);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", checkin: "", checkout: "", guests: "1", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={cottages[selected].img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}
            className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-amber-sun mb-6"
          >
            ✦ Reserve · Breathe · Return
          </motion.p>
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-6">
            <h1 className="font-script text-5xl md:text-7xl lg:text-[10vw] text-cream leading-[0.9]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }} animate={{ y: "0%" }}
                  transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Your <span className="font-elegant text-coral">cottage</span>
                </motion.span>
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
              className="font-serif-brand italic text-cream/60 max-w-xs text-right"
            >
              Three sanctuaries.<br />One Atlantic horizon.
            </motion.p>
          </div>
        </div>
      </section>

      {/* COTTAGE PICKER */}
      <section className="bg-paper bg-grain py-20 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <FadeUp>
            <div className="flex items-baseline gap-3 mb-12">
              <span className="font-display-brand text-xs text-coral">①</span>
              <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-mud/60">
                Choose your sanctuary
              </p>
            </div>
          </FadeUp>

          <StaggerChildren className="grid lg:grid-cols-3 gap-6 mb-20">
            {cottages.map((c, i) => (
              <StaggerItem key={c.name}>
                <motion.button
                  whileHover={{ y: -8 }}
                  onClick={() => setSelected(i)}
                  className={`group w-full text-left bg-cream transition-all overflow-hidden ${
                    selected === i ? "ring-2 ring-coral shadow-2xl" : "ring-1 ring-mud/10 hover:ring-mud/30"
                  }`}
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 img-cover-golden"
                    />
                    {selected === i && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 bg-coral text-cream w-10 h-10 rounded-full flex items-center justify-center font-display-brand text-xs"
                      >
                        ✓
                      </motion.div>
                    )}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                      {c.tags.map((tag) => (
                        <span key={tag} className="bg-cream/90 text-ink px-2.5 py-1 font-display-brand text-[9px] tracking-[0.15em] uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-keppel mb-2">
                      {c.beds}
                    </p>
                    <h3 className="font-serif-brand text-2xl text-ink mb-2">{c.name}</h3>
                    <p className="text-mud/60 text-sm mb-4 leading-relaxed">{c.desc}</p>
                    <div className="flex items-baseline justify-between pt-4 border-t border-mud/10">
                      <p className="font-elegant text-4xl text-coral leading-none">€{c.price}</p>
                      <p className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/40">
                        per night
                      </p>
                    </div>
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* FORM */}
          <FadeUp>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                <p className="font-display-brand text-[10px] tracking-[0.4em] uppercase text-coral mb-3">
                  ② Your details
                </p>
                <h2 className="font-serif-brand text-3xl md:text-4xl text-ink leading-tight mb-4">
                  Booking{" "}
                  <span className="font-elegant text-coral">{cottages[selected].name}</span>
                </h2>
                <p className="text-mud/60 leading-relaxed mb-6">
                  Tell us when you'd like to arrive. We'll confirm by email within 12 hours, no payment until confirmed.
                </p>
                <div className="bg-vanilla p-6 rounded-sm">
                  <p className="font-display-brand text-[10px] tracking-[0.3em] uppercase text-mud/50 mb-2">
                    Estimated total
                  </p>
                  <p className="font-elegant text-5xl text-coral leading-none">
                    €{cottages[selected].price}<span className="text-2xl text-mud/40">/night</span>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 bg-cream p-8 md:p-12 card-soft"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required placeholder="Marie Dubois" />
                        <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required placeholder="you@example.com" />
                      </div>
                      <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+212 ..." />
                      <div className="grid md:grid-cols-3 gap-6">
                        <Field label="Check-in" type="date" value={form.checkin} onChange={(v) => setForm({ ...form, checkin: v })} required />
                        <Field label="Check-out" type="date" value={form.checkout} onChange={(v) => setForm({ ...form, checkout: v })} required />
                        <div>
                          <label className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/60 block mb-2">
                            Guests
                          </label>
                          <select
                            value={form.guests}
                            onChange={(e) => setForm({ ...form, guests: e.target.value })}
                            className="w-full border-b-2 border-mud/20 bg-transparent px-0 py-2 text-ink font-serif-brand text-lg focus:border-coral focus:outline-none transition-colors"
                          >
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                              <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/60 block mb-2">
                          Notes (optional)
                        </label>
                        <textarea
                          value={form.notes}
                          onChange={(e) => setForm({ ...form, notes: e.target.value })}
                          rows={3}
                          className="w-full border-b-2 border-mud/20 bg-transparent px-0 py-2 text-ink font-serif-brand text-lg focus:border-coral focus:outline-none transition-colors resize-none"
                          placeholder="Surf level, dietary, anything else..."
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full rounded-full bg-coral py-5 font-display-brand text-xs tracking-[0.3em] uppercase text-cream hover:bg-amber-sun transition-colors"
                      >
                        Confirm booking →
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-keppel text-cream rounded-sm p-12 text-center"
                    >
                      <span className="text-5xl block mb-6">🌊</span>
                      <h3 className="font-script text-5xl mb-4">Welcome home, {form.name.split(" ")[0]}!</h3>
                      <p className="text-cream/70 leading-relaxed mb-2">
                        Your <strong className="text-amber-sun">{cottages[selected].name}</strong> request is in.
                      </p>
                      <p className="text-cream/60 text-sm mb-6">We'll confirm by email within 12 hours.</p>
                      <p className="font-elegant text-2xl text-vanilla">
                        "Ta vague n'attend pas. Et nous non plus."
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

function Field({
  label, value, onChange, type = "text", required, placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/60 block mb-2">
        {label}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b-2 border-mud/20 bg-transparent px-0 py-2 text-ink font-serif-brand text-lg placeholder:text-mud/30 focus:border-coral focus:outline-none transition-colors"
      />
    </div>
  );
}
