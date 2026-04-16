import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center overflow-hidden"
        >
          {/* Sun arc */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute w-[120vw] h-[120vw] rounded-full bg-sunset opacity-20 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display-brand text-[10px] tracking-[0.5em] uppercase text-amber-sun mb-6"
            >
              Welcome to
            </motion.span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-script text-7xl md:text-9xl text-cream"
              >
                Lunja <span className="text-coral">Village</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-coral to-transparent origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
