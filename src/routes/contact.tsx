import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeUp, StaggerChildren, StaggerItem } from "../components/AnimatedSection";
import rooftopImg from "../assets/lunja-rooftop.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in Touch — Lunja Village" },
      { name: "description", content: "Talk to Lunja Village. Imi Ouddar, Taghazout, Morocco." },
      { property: "og:title", content: "Get in Touch — Lunja Village" },
      { property: "og:description", content: "Talk to Lunja Village in Taghazout, Morocco." },
      { property: "og:image", content: rooftopImg },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-coral overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img src={rooftopImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-20 -right-10 font-script text-[30vw] text-cream/10 leading-none select-none pointer-events-none">
          hi
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }}
            className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-vanilla mb-6"
          >
            ✶ Let's talk
          </motion.p>
          <h1 className="font-script text-5xl md:text-7xl lg:text-[12vw] text-cream leading-[0.85]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }} animate={{ y: "0%" }}
                transition={{ delay: 2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Say hello.
              </motion.span>
            </span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-paper bg-grain section-padding">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
            {/* INFO */}
            <div className="lg:col-span-5">
              <FadeUp>
                <h2 className="font-serif-brand text-3xl md:text-5xl text-ink leading-tight mb-6">
                  Like a friend
                  <br />
                  <span className="font-elegant text-coral">who always answers.</span>
                </h2>
                <p className="text-mud/70 leading-relaxed mb-12 max-w-md">
                  Whether you have questions about your stay, want to plan an event, or just want to say hi — we're here. We answer fast, in plain language, with care.
                </p>
              </FadeUp>

              <StaggerChildren className="space-y-8 border-t border-mud/10 pt-10">
                {[
                  { num: "01", label: "Address", value: "Imi Ouddar, Taghazout\nAgadir, Morocco" },
                  { num: "02", label: "Email", value: "hello@lunjavillage.com" },
                  { num: "03", label: "Phone", value: "+212 528 200 100" },
                  { num: "04", label: "Reception", value: "Open 24/7 · Check-in from 15h" },
                ].map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[60px_120px_1fr] gap-x-4 gap-y-1 items-baseline group">
                      <span className="font-display-brand text-[10px] tracking-[0.3em] text-coral">{item.num}</span>
                      <p className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/50">
                        {item.label}
                      </p>
                      <p className="font-serif-brand text-lg text-ink whitespace-pre-line group-hover:translate-x-1 transition-transform">
                        {item.value}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <FadeUp delay={0.4}>
                <div className="mt-12 pt-10 border-t border-mud/10">
                  <p className="font-display-brand text-[10px] tracking-[0.3em] uppercase text-mud/50 mb-4">
                    Follow the journey
                  </p>
                  <div className="flex gap-4">
                    {["Instagram", "TikTok", "YouTube"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="font-elegant text-2xl text-ink hover:text-coral transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-cream p-6 md:p-10 lg:p-14 card-soft space-y-8"
                  >
                    <p className="font-elegant text-3xl text-coral">Drop us a line</p>

                    <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required placeholder="Marie Dubois" />
                    <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required placeholder="you@example.com" />
                    <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} placeholder="How can we help?" />

                    <div>
                      <label className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/60 block mb-3">
                        Your message
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        placeholder="Tell us everything..."
                        className="w-full border-b-2 border-mud/20 bg-transparent px-0 py-2 text-ink font-serif-brand text-lg placeholder:text-mud/30 focus:border-coral focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full rounded-full bg-ink py-5 font-display-brand text-xs tracking-[0.3em] uppercase text-cream hover:bg-coral transition-colors"
                    >
                      Send message →
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-keppel text-cream p-14 text-center"
                  >
                    <span className="text-5xl block mb-6">✨</span>
                    <h3 className="font-script text-5xl mb-4">Message received!</h3>
                    <p className="text-cream/70 mb-6">
                      Thanks {form.name.split(" ")[0]} — we'll get back to you within 24 hours.
                    </p>
                    <p className="font-elegant text-2xl text-vanilla">
                      "L'Atlas écoute. L'Atlantique répond."
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
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
      <label className="font-display-brand text-[10px] tracking-[0.2em] uppercase text-mud/60 block mb-3">
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
