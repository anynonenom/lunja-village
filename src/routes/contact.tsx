import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { FadeUp, StaggerChildren, StaggerItem } from "../components/AnimatedSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lunja Village" },
      { name: "description", content: "Get in touch with Lunja Village. Imi Ouddar, Taghazout, Morocco." },
      { property: "og:title", content: "Contact — Lunja Village" },
      { property: "og:description", content: "Reach out to Lunja Village in Taghazout, Morocco." },
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
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden bg-keppel">
        <div className="absolute -bottom-10 -right-10 font-script text-[20vw] text-cream/5 leading-none select-none pointer-events-none">
          Hello
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-display-brand text-xs tracking-[0.35em] uppercase text-vanilla mb-4"
          >Get in Touch</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="font-script text-5xl md:text-7xl text-cream"
          >Contact <span className="text-vanilla">Us</span></motion.h1>
        </div>
      </section>

      <section className="section-padding bg-cream bg-grain">
        <div className="relative z-10 mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <FadeUp>
              <h2 className="font-serif-brand text-3xl text-ink mb-6">
                We'd love to <span className="font-elegant text-coral">hear from you</span>
              </h2>
              <p className="text-mud/60 leading-relaxed mb-10">
                Whether you have questions about your stay, want to plan an event, 
                or just want to say hello — we're here. Like a friend who always answers.
              </p>
            </FadeUp>

            <StaggerChildren className="space-y-6">
              {[
                { icon: "📍", label: "Address", value: "Imi Ouddar, Taghazout\nAgadir, Morocco" },
                { icon: "📧", label: "Email", value: "hello@lunjavillage.com" },
                { icon: "📞", label: "Phone", value: "+212 528 200 100" },
                { icon: "⏰", label: "Reception", value: "Open 24/7 · Check-in from 15h" },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-display-brand text-xs tracking-[0.15em] uppercase text-keppel mb-1">{item.label}</p>
                      <p className="text-mud/70 text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          {/* Form */}
          <FadeUp delay={0.2}>
            {!sent ? (
              <div className="bg-warm rounded-2xl p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Name</label>
                    <input
                      required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Email</label>
                    <input
                      required type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Subject</label>
                    <input
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/60 block mb-2">Message</label>
                    <textarea
                      required value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full rounded-lg border border-sand bg-cream px-4 py-3 text-ink text-sm focus:border-keppel focus:outline-none transition-colors resize-none"
                      placeholder="Tell us everything..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-full bg-coral py-4 font-display-brand text-xs tracking-[0.2em] uppercase text-cream hover:bg-keppel transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-keppel/10 border-2 border-keppel rounded-2xl p-12 text-center"
              >
                <span className="text-5xl block mb-4">✨</span>
                <h3 className="font-serif-brand text-2xl text-ink mb-2">Message Sent!</h3>
                <p className="text-mud/60">We'll get back to you soon, {form.name}.</p>
                <p className="font-serif-brand italic text-keppel mt-4">
                  "L'Atlas écoute. L'Atlantique répond."
                </p>
              </motion.div>
            )}
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
