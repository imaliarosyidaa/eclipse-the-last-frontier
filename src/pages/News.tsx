import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { newsItems, eventCountdownTarget, type NewsCategory } from "../data/news";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";

const categories: NewsCategory[] = ["ALL", "NEWS", "UPDATE", "EVENT", "LORE"];

const categoryColors: Record<Exclude<NewsCategory, "ALL">, string> = {
  NEWS: "#3b82f6",
  UPDATE: "#10b981",
  EVENT: "#f59e0b",
  LORE: "#a855f7",
};

function useCountdown(target: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Simulate future date for demo — add offset to ensure countdown
      const simulatedTarget = new Date(now.getTime() + 9 * 24 * 60 * 60 * 1000 + 21 * 60 * 60 * 1000 + 43 * 60 * 1000 + 12 * 1000);
      const diff = simulatedTarget.getTime() - now.getTime();

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="text-4xl md:text-6xl font-black tabular-nums"
        style={{ fontFamily: "var(--font-display)", color: "white" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs tracking-widest mt-1" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
        {label}
      </div>
    </div>
  );
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("ALL");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const countdown = useCountdown(eventCountdownTarget);

  const filtered = activeCategory === "ALL"
    ? newsItems
    : newsItems.filter(n => n.category === activeCategory);

  const selectedArticle = selectedSlug ? newsItems.find(n => n.slug === selectedSlug) : null;

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Header */}
      <div className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
            INCOMING TRANSMISSION
          </div>
          <h1
            className="text-5xl md:text-8xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            LATEST<br />TRANSMISSIONS
          </h1>
        </div>
      </div>

      {/* Featured Event */}
      <div
        className="relative py-20 px-6 overflow-hidden border-b"
        style={{ borderColor: "var(--border)", background: "rgba(245,158,11,0.03)" }}
      >
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1920&h=600&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 20%, transparent 80%, var(--bg) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)", color: "#f59e0b" }}>
            ⬛ GLOBAL EVENT — ACTIVE NOW
          </div>
          <h2
            className="text-4xl md:text-6xl font-black tracking-tight mb-2"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            THE AWAKENING
          </h2>
          <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
            Something beneath Elyra has awakened. Every Vanguard's actions matter.
          </p>

          <div className="flex items-center justify-center gap-4 md:gap-10 mb-10">
            <CountUnit value={countdown.days} label="DAYS" />
            <div className="text-3xl font-black" style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-display)" }}>:</div>
            <CountUnit value={countdown.hours} label="HOURS" />
            <div className="text-3xl font-black" style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-display)" }}>:</div>
            <CountUnit value={countdown.minutes} label="MIN" />
            <div className="text-3xl font-black" style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-display)" }}>:</div>
            <CountUnit value={countdown.seconds} label="SEC" />
          </div>

          <button className="btn-primary" data-hover style={{ background: "#f59e0b" }}>
            <span className="relative z-10">JOIN EVENT</span>
          </button>
        </div>
      </div>

      {/* Category filter */}
      <div className="py-8 px-6 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-xs px-4 py-2 tracking-widest transition-all duration-200"
              style={{
                fontFamily: "var(--font-display)",
                background: activeCategory === cat ? "var(--accent)" : "transparent",
                color: activeCategory === cat ? "white" : "var(--text-muted)",
                border: `1px solid ${activeCategory === cat ? "var(--accent)" : "var(--border)"}`,
              }}
              data-hover
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News grid */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              NO TRANSMISSIONS FOUND
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filtered.map((item) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="border group cursor-none flex flex-col overflow-hidden transition-all duration-300 hover:border-blue-500/40"
                    style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
                    onClick={() => setSelectedSlug(item.slug)}
                    data-hover
                  >
                    <div
                      className="h-48 bg-cover bg-center relative overflow-hidden"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/${item.unsplashId}?w=600&h=300&fit=crop&auto=format)`,
                        backgroundColor: "var(--surface)",
                      }}
                    >
                      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 bg-cover bg-center"
                        style={{ backgroundImage: `url(https://images.unsplash.com/${item.unsplashId}?w=600&h=300&fit=crop&auto=format)` }}
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,12,24,0.9) 0%, transparent 50%)" }} />
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-[10px] px-2 py-0.5 tracking-wider"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: categoryColors[item.category],
                            background: categoryColors[item.category] + "20",
                            border: `1px solid ${categoryColors[item.category]}40`,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <div className="text-[10px] tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                        {item.subtitle} · {item.date}
                      </div>
                      <h3
                        className="text-xl font-black tracking-wider group-hover:text-blue-400 transition-colors"
                        style={{ fontFamily: "var(--font-display)", color: "white" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                        {item.excerpt}
                      </p>
                      <div
                        className="text-xs tracking-widest flex items-center gap-2 group-hover:text-blue-400 transition-colors"
                        style={{ fontFamily: "var(--font-display)", color: "var(--accent-bright)" }}
                      >
                        READ MORE →
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* Article modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            key="article-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto p-4 md:p-12"
            style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelectedSlug(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-2xl my-8 border"
              style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
              onClick={e => e.stopPropagation()}
            >
              <div
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(https://images.unsplash.com/${selectedArticle.unsplashId}?w=800&h=400&fit=crop&auto=format)`, backgroundColor: "var(--surface)" }}
              >
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg2) 0%, transparent 50%)" }} />
              </div>

              <div className="p-8">
                <div className="text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)", color: categoryColors[selectedArticle.category] }}>
                  {selectedArticle.category} · {selectedArticle.date}
                </div>
                <h2
                  className="text-3xl font-black tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "white" }}
                >
                  {selectedArticle.title}
                </h2>
                <div className="text-sm mb-6" style={{ color: "var(--accent-bright)", fontFamily: "var(--font-mono)" }}>
                  {selectedArticle.subtitle}
                </div>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(226,232,240,0.75)" }}>
                  {selectedArticle.content}
                </p>
                <button
                  onClick={() => setSelectedSlug(null)}
                  className="btn-secondary text-xs"
                  data-hover
                >
                  ← BACK TO TRANSMISSIONS
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
