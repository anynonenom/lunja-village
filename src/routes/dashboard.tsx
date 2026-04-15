import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FadeUp } from "../components/AnimatedSection";
import { useAuth } from "../hooks/useAuth";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Lunja Village" },
      { name: "description", content: "Admin dashboard for Lunja Village bookings." },
    ],
  }),
  component: DashboardPage,
});

// Mock data for now (will be replaced with Cloud DB later)
const mockBookings = [
  { id: 1, name: "Sarah Chen", email: "sarah@example.com", cottage: "Surf Suite", checkin: "2026-05-01", checkout: "2026-05-07", guests: 2, status: "confirmed" },
  { id: 2, name: "Marco Rossi", email: "marco@example.com", cottage: "Ocean Breeze", checkin: "2026-05-03", checkout: "2026-05-10", guests: 1, status: "pending" },
  { id: 3, name: "Léa Dubois", email: "lea@example.com", cottage: "Atlas View", checkin: "2026-05-05", checkout: "2026-05-12", guests: 3, status: "confirmed" },
  { id: 4, name: "James Wright", email: "james@example.com", cottage: "Surf Suite", checkin: "2026-05-08", checkout: "2026-05-15", guests: 2, status: "confirmed" },
  { id: 5, name: "Amira Khalil", email: "amira@example.com", cottage: "Ocean Breeze", checkin: "2026-05-10", checkout: "2026-05-14", guests: 1, status: "pending" },
];

function DashboardPage() {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate({ to: "/login" });
    }
  }, [loading, user, isAdmin, navigate]);

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-warm flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-8 h-8 border-2 border-keppel border-t-transparent rounded-full"
        />
      </main>
    );
  }

  if (!user || !isAdmin) return null;

  const filtered = statusFilter === "all"
    ? mockBookings
    : mockBookings.filter((b) => b.status === statusFilter);

  const stats = [
    { label: "Total Bookings", value: mockBookings.length, icon: "📋", color: "bg-keppel" },
    { label: "Confirmed", value: mockBookings.filter((b) => b.status === "confirmed").length, icon: "✅", color: "bg-celadon" },
    { label: "Pending", value: mockBookings.filter((b) => b.status === "pending").length, icon: "⏳", color: "bg-amber-sun" },
    { label: "Revenue (est.)", value: "€4,280", icon: "💰", color: "bg-coral" },
  ];

  return (
    <main className="pt-20 min-h-screen bg-warm">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
        {/* Header */}
        <FadeUp>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-keppel mb-1">Admin</p>
              <h1 className="font-serif-brand text-3xl text-ink">
                Booking <span className="font-elegant text-coral">Dashboard</span>
              </h1>
              <p className="text-xs text-mud/40 mt-1 font-body-brand">{user.email}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={signOut}
                className="rounded-full bg-coral/10 px-6 py-2 font-display-brand text-xs tracking-[0.15em] uppercase text-coral hover:bg-coral hover:text-cream transition-all"
              >
                Sign Out
              </button>
              <Link
                to="/"
                className="rounded-full bg-sand px-6 py-2 font-display-brand text-xs tracking-[0.15em] uppercase text-mud/60 hover:bg-keppel hover:text-cream transition-all"
              >
                ← Back to Site
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                className="bg-cream rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  <span className={`w-2 h-2 rounded-full ${s.color}`} />
                </div>
                <p className="font-display-brand text-2xl text-ink">{s.value}</p>
                <p className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Filter */}
        <FadeUp delay={0.2}>
          <div className="flex gap-3 mb-6">
            {["all", "confirmed", "pending"].map((f) => (
              <button
                key={f}
                onClick={() => setStatusFilter(f)}
                className={`rounded-full px-5 py-2 font-display-brand text-xs tracking-[0.1em] uppercase transition-all ${
                  statusFilter === f
                    ? "bg-coral text-cream"
                    : "bg-sand text-mud/50 hover:bg-keppel hover:text-cream"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Table */}
        <FadeUp delay={0.3}>
          <div className="bg-cream rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-sand">
                    <th className="text-left px-6 py-4 font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40">Guest</th>
                    <th className="text-left px-6 py-4 font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40">Cottage</th>
                    <th className="text-left px-6 py-4 font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40">Check-in</th>
                    <th className="text-left px-6 py-4 font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40">Check-out</th>
                    <th className="text-left px-6 py-4 font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40">Guests</th>
                    <th className="text-left px-6 py-4 font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((b, i) => (
                    <motion.tr
                      key={b.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-sand/50 hover:bg-vanilla/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-ink">{b.name}</p>
                        <p className="text-xs text-mud/40">{b.email}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-mud/70">{b.cottage}</td>
                      <td className="px-6 py-4 text-sm text-mud/70">{b.checkin}</td>
                      <td className="px-6 py-4 text-sm text-mud/70">{b.checkout}</td>
                      <td className="px-6 py-4 text-sm text-mud/70">{b.guests}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block rounded-full px-3 py-1 font-display-brand text-xs tracking-[0.1em] uppercase ${
                          b.status === "confirmed"
                            ? "bg-keppel/10 text-keppel"
                            : "bg-amber-sun/10 text-amber-sun"
                        }`}>
                          {b.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeUp>

        <p className="mt-8 text-center text-xs text-mud/30 font-display-brand tracking-widest uppercase">
          Demo data · Connect Lovable Cloud for real bookings
        </p>
      </div>
    </main>
  );
}
