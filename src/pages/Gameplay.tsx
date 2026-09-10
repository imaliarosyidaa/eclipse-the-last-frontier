import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { features } from "../data/features";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";

function FeatureSection({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
      {/* BG image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url(https://images.unsplash.com/${feature.unsplashId}?w=1920&h=1080&fit=crop&auto=format)`,
          y,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isEven
            ? "linear-gradient(to right, rgba(5,8,16,0.97) 0%, rgba(5,8,16,0.7) 100%)"
            : "linear-gradient(to left, rgba(5,8,16,0.97) 0%, rgba(5,8,16,0.7) 100%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 flex ${isEven ? "justify-start" : "justify-end"}`}
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-6xl font-black opacity-20"
              style={{ fontFamily: "var(--font-display)", color: feature.accentColor }}
            >
              {feature.number}
            </span>
            <div className="h-px flex-1 opacity-30" style={{ background: feature.accentColor }} />
          </div>

          <div
            className="text-xs tracking-widest mb-3"
            style={{ fontFamily: "var(--font-mono)", color: feature.accentColor }}
          >
            {feature.title}
          </div>

          <h2
            className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            {feature.subtitle}
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "rgba(226,232,240,0.75)" }}>
            {feature.description}
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
            {feature.detail}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Gameplay() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Header */}
      <div className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
            VANGUARD TRAINING MANUAL
          </div>
          <h1
            className="text-5xl md:text-8xl font-black tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            GAMEPLAY
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Elyra doesn't offer second chances. Master every system, or become part of the planet's history.
          </p>
        </div>
      </div>

      {/* Feature sections */}
      {features.map((f, i) => (
        <FeatureSection key={f.number} feature={f} index={i} />
      ))}

      {/* System specs teaser */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              POWERED BY ECLIPSE ENGINE
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "ENVIRONMENTS", value: "200+", sub: "Unique biomes" },
              { label: "ENEMIES", value: "80+", sub: "Creature variants" },
              { label: "ABILITIES", value: "200+", sub: "Skill combinations" },
              { label: "HOURS", value: "60+", sub: "Campaign content" },
            ].map(({ label, value, sub }) => (
              <ScrollReveal key={label} className="text-center border p-6" style={{ borderColor: "var(--border)" }}>
                <div
                  className="text-4xl md:text-5xl font-black mb-2 glow-text"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent-bright)" }}
                >
                  {value}
                </div>
                <div
                  className="text-xs tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "white" }}
                >
                  {label}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>{sub}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
