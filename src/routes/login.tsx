import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { FadeUp } from "../components/AnimatedSection";
import { useAuth } from "../hooks/useAuth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Admin Login — Lunja Village" },
      { name: "description", content: "Admin login for Lunja Village dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(email, password);
      navigate({ to: "/dashboard" });
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-warm flex items-center justify-center">
      <FadeUp>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-cream rounded-2xl shadow-lg p-10"
        >
          <div className="text-center mb-8">
            <p className="font-display-brand text-xs tracking-[0.35em] uppercase text-keppel mb-2">
              Admin Access
            </p>
            <h1 className="font-serif-brand text-3xl text-ink">
              Welcome <span className="font-elegant text-coral">Back</span>
            </h1>
            <p className="text-sm text-mud/50 mt-2 font-body-brand">
              Sign in to manage your bookings
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-xl bg-coral/10 border border-coral/20 px-4 py-3 text-sm text-coral font-body-brand"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-display-brand text-xs tracking-[0.1em] uppercase text-mud/50 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-sand bg-warm px-4 py-3 text-sm text-ink font-body-brand placeholder:text-mud/30 focus:outline-none focus:ring-2 focus:ring-keppel/30 focus:border-keppel transition-all"
                placeholder="admin@lunjavillage.com"
              />
            </div>

            <div>
              <label className="block font-display-brand text-xs tracking-[0.1em] uppercase text-mud/50 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-sand bg-warm px-4 py-3 text-sm text-ink font-body-brand placeholder:text-mud/30 focus:outline-none focus:ring-2 focus:ring-keppel/30 focus:border-keppel transition-all"
                placeholder="••••••••"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-coral py-3 font-display-brand text-xs tracking-[0.2em] uppercase text-cream hover:bg-keppel transition-all disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign In"}
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="font-display-brand text-xs tracking-[0.1em] uppercase text-mud/40 hover:text-coral transition-colors"
            >
              ← Back to Site
            </Link>
          </div>
        </motion.div>
      </FadeUp>
    </main>
  );
}
