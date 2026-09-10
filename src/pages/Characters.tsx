import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { characters, type Character } from "../data/characters";
import Footer from "../components/Footer";

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
          {label}
        </span>
        <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color }}>
          {value}
        </span>
      </div>
      <div className="h-1 rounded-none overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div
          className="h-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function AbilityCard({ name, description, color }: { name: string; description: string; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-3 border transition-all duration-300 cursor-none"
      style={{
        borderColor: hovered ? color : "rgba(255,255,255,0.08)",
        background: hovered ? `${color}10` : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      <div
        className="text-xs font-bold tracking-widest mb-1"
        style={{ fontFamily: "var(--font-display)", color: hovered ? color : "white" }}
      >
        {name}
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs leading-relaxed overflow-hidden"
            style={{ color: "var(--text-muted)" }}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Characters() {
  const [selected, setSelected] = useState<Character>(characters[0]);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <div
        className="relative pt-32 pb-16 text-center border-b"
        style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10">
          <div className="text-xs tracking-widest mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
            THE VANGUARDS
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            CHARACTERS
          </h1>
        </div>
      </div>

      {/* Main selector */}
      <div className="min-h-screen relative flex flex-col lg:flex-row">
        {/* Animated background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{ background: selected.bgGradient }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* LEFT: character list */}
        <div className="relative z-10 w-full lg:w-64 flex lg:flex-col gap-1 p-6 lg:pt-12 border-b lg:border-b-0 lg:border-r overflow-x-auto lg:overflow-visible" style={{ borderColor: "var(--border)" }}>
          {characters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setSelected(ch)}
              className="flex items-center gap-3 p-3 text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0"
              style={{
                background: selected.id === ch.id ? `${ch.color}15` : "transparent",
                borderLeft: selected.id === ch.id ? `2px solid ${ch.color}` : "2px solid transparent",
              }}
              data-hover
            >
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-mono)", color: selected.id === ch.id ? ch.color : "var(--text-muted)" }}
              >
                {ch.number}
              </span>
              <div>
                <div
                  className="text-sm font-bold tracking-widest"
                  style={{ fontFamily: "var(--font-display)", color: selected.id === ch.id ? "white" : "var(--text-muted)" }}
                >
                  {ch.name}
                </div>
                <div
                  className="text-xs"
                  style={{ color: selected.id === ch.id ? ch.color : "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {ch.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CENTER: artwork */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-12 lg:py-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id + "-art"}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center"
            >
              <img src={selected.artwork} alt={selected.name} className="w-full h-full object-contain" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: info panel */}
        <div className="relative z-10 w-full lg:w-80 border-t lg:border-t-0 lg:border-l p-6 lg:py-12 overflow-y-auto" style={{ borderColor: "var(--border)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id + "-info"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div
                  className="text-xs tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: selected.color }}
                >
                  {selected.role}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  "{selected.quote}"
                </p>
              </div>

              <p className="text-xs leading-relaxed" style={{ color: "rgba(226,232,240,0.6)" }}>
                {selected.description}
              </p>

              {/* Stats */}
              <div>
                <div
                  className="text-xs tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
                >
                  COMBAT STATS
                </div>
                <div className="flex flex-col gap-3">
                  <StatBar label="HP" value={selected.stats.hp} color={selected.color} />
                  <StatBar label="ATTACK" value={selected.stats.attack} color={selected.color} />
                  <StatBar label="DEFENSE" value={selected.stats.defense} color={selected.color} />
                  <StatBar label="SPEED" value={selected.stats.speed} color={selected.color} />
                </div>
              </div>

              {/* Abilities */}
              <div>
                <div
                  className="text-xs tracking-widest mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
                >
                  ABILITIES <span className="text-[10px] opacity-50">(HOVER)</span>
                </div>
                <div className="flex flex-col gap-2">
                  {selected.abilities.map((ab) => (
                    <AbilityCard key={ab.name} {...ab} color={selected.color} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
}
