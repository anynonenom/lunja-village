import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { FadeUp, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import cottageImg from "../assets/cottage-interior.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — Lunja Village" },
      { name: "description", content: "Reserve your surf & nomad cottage at Lunja Village, Taghazout, Morocco." },
      { property: "og:title", content: "Book Your Stay — Lunja Village" },
      { property: "og:description", content: "Reserve your surf & nomad cottage at Lunja Village." },
    ],
  }),
  component: BookingPage,
});

const cottageTypes = [
  { name: "Ocean Breeze", beds: "1 Bed", price: 85, desc: "Cozy studio with ocean glimpses" },
  { name: "Atlas View", beds: "2 Beds", price: 120, desc: "Spacious cottage facing the mountains" },
  { name: "Surf Suite", beds: "2 Beds + Loft", price: 165, desc: "Premium cottage with rooftop terrace" },
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
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={cottageImg} alt="Lunja cottage" className="h-full w-full object-cover" width={1280} height={960} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-display-brand text-xs tracking-[0.35em] uppercase text-amber-sun mb-4"
          >Reserve · Breathe · Return</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="font-script text-5xl md:text-7xl text-cream"
          >Book Your <span className="text-coral">Stay</span></motion.h1>
        </div>
      </section>

      {/* Cottage selection */}
      <section className="section-padding bg-cream bg-grain">
        <div className="relative z-10 mx-auto max-w-5xl">
          <FadeUp>
            <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-keppel mb-4 text-center">Choose Your Cottage</p>
            <h2 className="font-serif-brand text-3xl md:text-4xl text-ink text-center mb-10">
              Find your <span className="font-elegant text-amber-sun">sanctuary</span>
            </h2>
          </FadeUp>

          <StaggerChildren className="grid md:grid-cols-3 gap-4 mb-16">
            {cottageTypes.map((c, i) => (
              <StaggerItem key={c.name}>
                <motion.button
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left rounded-xl p-6 transition-all border-2 ${
                    selected === i
                      ? "border-coral bg-warm shadow-lg"
                      : "border-sand bg-warm/50 hover:border-keppel"
                  }`}
                >
                  <p className="font-display-brand text-xs tracking-[0.15em] uppercase text-keppel mb-2">{c.beds}</p>
                  <h3 className="font-serif-brand text-xl text-ink mb-2">{c.name}</h3>
                  <p className="text-mud/60 text-sm mb-4">{c.desc}</p>
                  <p className="font-display-brand text-2xl text-coral">
                    €{c.price}<span className="text-sm text-mud/40">/night</span>
                  </p>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Booking form */}
          {!submitted ? (
            <FadeUp>
              <div className="bg-warm rounded-2xl p-8 md:p-12 shadow-sm max-w-2xl mx-auto">
                <h3 className="font-serif-brand text-2xl text-ink mb-6 text-center">
                  Booking: <span className="text-coral">{cottageTypes[selected].name}</span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Full Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Email</label>
                      <input
                        required type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Phone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                      placeholder="+212 ..."
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-5">
                    <div>
                      <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Check-in</label>
                      <input
                        required type="date"
                        value={form.checkin}
                        onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                        className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Check-out</label>
                      <input
                        required type="date"
                        value={form.checkout}
                        onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                        className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Guests</label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Notes</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={3}
                      className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors resize-none"
                      placeholder="Any special requests..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-full bg-coral py-4 font-display-brand text-xs tracking-[0.2em] uppercase text-cream hover:bg-amber-sun transition-colors"
                  >
                    Confirm Booking
                  </motion.button>
                </form>
              </div>
            </FadeUp>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-keppel/10 border-2 border-keppel rounded-2xl p-12 text-center max-w-lg mx-auto"
            >
              <span className="text-5xl block mb-4">🌊</span>
              <h3 className="font-serif-brand text-2xl text-ink mb-2">Booking Received!</h3>
              <p className="text-mud/60 mb-4">
                Thank you, {form.name}! We'll confirm your {cottageTypes[selected].name} cottage shortly.
              </p>
              <p className="font-serif-brand italic text-keppel">
                "Ta vague n'attend pas. Et nous non plus."
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
