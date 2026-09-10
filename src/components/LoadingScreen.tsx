import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "./ParticleField";

interface Props {
  onComplete: () => void;
}

const STEPS = [
  "CONNECTING TO ELYRA NETWORK...",
  "LOADING VANGUARD PROTOCOL...",
  "SYNCHRONIZING ECLIPSE DATA...",
  "SYSTEM ONLINE",
];

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));

      const si = Math.min(Math.floor((pct / 100) * STEPS.length), STEPS.length - 1);
      setStepIndex(si);

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 600);
        setTimeout(onComplete, 1400);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  const bars = Array.from({ length: 20 });

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center scanlines noise"
          style={{ background: "var(--bg)" }}
        >
          <ParticleField count={50} className="absolute inset-0" />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center px-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="text-6xl md:text-8xl font-black tracking-widest glow-text"
                style={{ fontFamily: "var(--font-display)", color: "white" }}
              >
                ECLIPSE
              </div>
              <div
                className="text-xs tracking-[0.5em] mt-1"
                style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}
              >
                THE LAST FRONTIER
              </div>
            </motion.div>

            {/* Status text */}
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-widest"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}
            >
              {STEPS[stepIndex]}
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 md:w-80">
              <div className="flex gap-[2px]">
                {bars.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 transition-all duration-100"
                    style={{
                      background: i < Math.floor(progress / 5)
                        ? "var(--accent)"
                        : "rgba(59,130,246,0.15)",
                      boxShadow: i < Math.floor(progress / 5)
                        ? "0 0 6px var(--accent)"
                        : "none",
                    }}
                  />
                ))}
              </div>
              <div
                className="mt-2 text-right text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                {progress}%
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t" style={{ borderColor: "var(--accent)" }} />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r border-t" style={{ borderColor: "var(--accent)" }} />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l border-b" style={{ borderColor: "var(--accent)" }} />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b" style={{ borderColor: "var(--accent)" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
