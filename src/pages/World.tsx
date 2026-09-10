import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locations, type Location } from "../data/locations";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";

const dangerColors: Record<Location["danger"], string> = {
  LOW: "#10b981",
  MEDIUM: "#f59e0b",
  HIGH: "#ef4444",
  EXTREME: "#a855f7",
};

const loreCards = [
  {
    title: "THE ELYRA ARCHITECTS",
    body: "An ancient civilization that disappeared thousands of years ago, leaving behind structures that still function — and still watch.",
  },
  {
    title: "THE ECLIPSE",
    body: "A mysterious energy capable of altering matter itself. It doesn't follow thermodynamic laws. It follows something older.",
  },
  {
    title: "THE RUINS",
    body: "No human civilization could have built them. The inscriptions change when you're not looking. We have confirmed this.",
  },
  {
    title: "THE VANGUARD PROGRAM",
    body: "Humanity's last best option. Twelve operatives sent to answer every question about Elyra. None have returned yet.",
  },
];

export default function World() {
  const [selected, setSelected] = useState<Location | null>(locations[1]);

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Header */}
      <div className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
            PLANET ELYRA — SECTOR MAP
          </div>
          <h1
            className="text-5xl md:text-8xl font-black tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            THE WORLD
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Every zone on Elyra has a story. Most of those stories end badly for those who don't come prepared.
          </p>
        </div>
      </div>

      {/* Interactive map */}
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* SVG Map */}
            <div className="flex-1 min-h-[400px] md:min-h-[500px] relative border" style={{ borderColor: "var(--border)", background: "var(--bg2)" }}>
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                aria-label="Interactive map of Elyra"
              >
                {/* Map background texture */}
                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0a1628" />
                    <stop offset="100%" stopColor="#050810" />
                  </radialGradient>
                  <filter id="blur-sm">
                    <feGaussianBlur stdDeviation="1" />
                  </filter>
                </defs>
                <rect width="100" height="100" fill="url(#mapGlow)" />

                {/* Stylized continent shapes */}
                <path
                  d="M20 20 Q35 15 50 25 Q65 20 75 30 Q80 45 70 55 Q75 65 65 75 Q50 80 35 70 Q20 75 15 60 Q10 45 20 30 Z"
                  fill="rgba(13,21,38,0.8)"
                  stroke="rgba(59,130,246,0.15)"
                  strokeWidth="0.3"
                />

                {/* Grid overlay */}
                {[20, 40, 60, 80].map(x => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" stroke="rgba(59,130,246,0.04)" strokeWidth="0.2" />
                ))}
                {[20, 40, 60, 80].map(y => (
                  <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke="rgba(59,130,246,0.04)" strokeWidth="0.2" />
                ))}

                {/* Location markers */}
                {locations.map((loc) => {
                  const isSelected = selected?.id === loc.id;
                  const color = dangerColors[loc.danger];
                  return (
                    <g
                      key={loc.id}
                      transform={`translate(${loc.svgX}, ${loc.svgY})`}
                      onClick={() => setSelected(loc)}
                      style={{ cursor: "none" }}
                      role="button"
                      aria-label={loc.name}
                    >
                      {/* Pulse rings */}
                      {isSelected && (
                        <>
                          <circle r="4" fill="none" stroke={color} strokeWidth="0.3" opacity="0.5" className="pulse-ring" />
                          <circle r="7" fill="none" stroke={color} strokeWidth="0.2" opacity="0.3" className="pulse-ring" style={{ animationDelay: "0.5s" }} />
                        </>
                      )}
                      {/* Marker */}
                      <circle
                        r={isSelected ? "2.5" : "1.8"}
                        fill={color}
                        opacity={isSelected ? 1 : 0.6}
                        style={{ filter: isSelected ? `drop-shadow(0 0 3px ${color})` : "none", transition: "all 0.3s" }}
                      />
                      {/* Label */}
                      <text
                        y="-4"
                        textAnchor="middle"
                        fontSize="3"
                        fill={isSelected ? "white" : "rgba(255,255,255,0.4)"}
                        style={{ fontFamily: "var(--font-mono)", transition: "all 0.3s", pointerEvents: "none" }}
                      >
                        {loc.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map legend */}
              <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                {(["LOW", "MEDIUM", "HIGH", "EXTREME"] as Location["danger"][]).map(d => (
                  <div key={d} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: dangerColors[d] }} />
                    <span className="text-[9px] tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location panel */}
            <div className="w-full lg:w-80 border" style={{ borderColor: "var(--border)", background: "var(--bg2)", minHeight: 300 }}>
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="p-6 flex flex-col gap-4 h-full"
                  >
                    {/* Image */}
                    <div
                      className="h-40 bg-cover bg-center relative overflow-hidden"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/${selected.unsplashId}?w=600&h=300&fit=crop&auto=format)`,
                        backgroundColor: "var(--surface)",
                      }}
                    >
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,12,24,0.9) 0%, transparent 50%)" }} />
                      <div className="absolute bottom-3 left-3">
                        <div
                          className="text-xs px-2 py-0.5"
                          style={{
                            fontFamily: "var(--font-mono)",
                            background: dangerColors[selected.danger] + "20",
                            color: dangerColors[selected.danger],
                            border: `1px solid ${dangerColors[selected.danger]}40`,
                          }}
                        >
                          DANGER: {selected.danger}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs tracking-widest mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
                        {selected.subtitle}
                      </div>
                      <h3
                        className="text-2xl font-black tracking-wider"
                        style={{ fontFamily: "var(--font-display)", color: "white" }}
                      >
                        {selected.name}
                      </h3>
                    </div>

                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {selected.description}
                    </p>

                    <div className="border-t pt-4 flex flex-col gap-2" style={{ borderColor: "var(--border)" }}>
                      {[
                        { label: "ENEMIES", value: selected.enemies },
                        { label: "RESOURCES", value: selected.resources },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div className="text-[10px] tracking-widest mb-0.5" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
                            {label}
                          </div>
                          <div className="text-xs" style={{ color: "rgba(226,232,240,0.7)" }}>{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 text-xs leading-relaxed italic" style={{ borderColor: "var(--border)", color: "rgba(226,232,240,0.5)", fontFamily: "var(--font-mono)" }}>
                      {selected.lore}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex items-center justify-center p-6 text-center"
                  >
                    <div style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }} className="text-xs tracking-widest">
                      SELECT A LOCATION ON THE MAP
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Click hint */}
          <p className="text-xs tracking-wider mt-4 text-center" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            CLICK A MARKER TO EXPLORE THE LOCATION
          </p>
        </div>
      </div>

      {/* Lore cards */}
      <div className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-12">
            <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
              CLASSIFIED INTEL
            </div>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              WORLD LORE
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loreCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 120} className="border p-6 transition-all duration-300 hover:border-blue-500/40 group" style={{ borderColor: "var(--border)" }}>
                <h3
                  className="text-lg font-black tracking-wider mb-3 group-hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "var(--font-display)", color: "white" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{card.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
