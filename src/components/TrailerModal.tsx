import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TrailerModal({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="trailer-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Game Trailer"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-4xl aspect-video border"
            style={{ borderColor: "var(--border)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Fallback poster */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ background: "var(--surface)" }}
            >
              <div className="text-center">
                <div
                  className="text-4xl font-black tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "white" }}
                >
                  ECLIPSE
                </div>
                <div
                  className="text-xs tracking-widest mb-6"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}
                >
                  OFFICIAL TRAILER
                </div>
                <div
                  className="text-sm mb-2"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  TRAILER OFFLINE
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Video asset not yet available in this build.
                </div>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-xs tracking-widest transition-colors hover:text-white flex items-center gap-2"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
              data-hover
              aria-label="Close trailer"
            >
              ESC / CLOSE ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
