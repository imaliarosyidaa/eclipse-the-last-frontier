import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleField from "../components/ParticleField";
import TrailerModal from "../components/TrailerModal";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";

const storyChapters = [
  {
    chapter: "SECTION 01",
    year: "2147",
    title: "THE DISCOVERY",
    body: "Humanity pushed past the outer boundary and found Elyra — a planet unlike any in our charts. Rich with an energy that defied every instrument we had.",
    bg: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop&auto=format",
    accent: "#3b82f6",
  },
  {
    chapter: "SECTION 02",
    year: null,
    title: "THE UNKNOWN",
    body: "But something was already waiting. Ruins that predated human civilization by four hundred thousand years. Structures built by hands we have no name for.",
    bg: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1920&h=1080&fit=crop&auto=format",
    accent: "#7c3aed",
  },
  {
    chapter: "SECTION 03",
    year: null,
    title: "THE ECLIPSE",
    body: "A mysterious energy that doesn't follow physics. It alters matter. It alters memory. It alters the people exposed to it. They call it Eclipse.",
    bg: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1920&h=1080&fit=crop&auto=format",
    accent: "#06b6d4",
  },
  {
    chapter: "SECTION 04",
    year: null,
    title: "YOUR MISSION",
    body: "Find the truth. Survive the unknown. You are a Vanguard. The last line between humanity's curiosity and whatever Elyra is protecting.",
    bg: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&h=1080&fit=crop&auto=format",
    accent: "#ef4444",
  },
];

function StorySection({
  chapter, year, title, body, bg, accent,
}: typeof storyChapters[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax bg */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})`, y }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,8,16,0.92) 0%, rgba(5,8,16,0.6) 60%, rgba(5,8,16,0.4) 100%)" }} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 opacity-60" style={{ background: accent }} />
            <span className="text-xs tracking-widest" style={{ fontFamily: "var(--font-mono)", color: accent }}>
              {chapter}
            </span>
            {year && (
              <span className="text-xs tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                {year}
              </span>
            )}
          </div>

          <h2
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none"
            style={{ fontFamily: "var(--font-display)", color: "white" }}
          >
            {title}
          </h2>

          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(226,232,240,0.8)" }}>
            {body}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [trailerOpen, setTrailerOpen] = useState(false);
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden scanlines">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop&auto=format)`,
            y: heroY,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,8,16,0.3) 0%, rgba(5,8,16,0.5) 50%, rgba(5,8,16,0.95) 100%)",
          }}
        />
        <ParticleField count={80} className="absolute inset-0" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <div
              className="text-xs tracking-[0.5em] mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}
            >
              SCI-FI RPG · ACTION ADVENTURE · PC &amp; CONSOLE
            </div>
            <h1
              className="text-7xl md:text-[9rem] lg:text-[11rem] font-black leading-none tracking-tight glow-text mb-2"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              ECLIPSE
            </h1>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-black tracking-widest mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent-bright)" }}
            >
              THE LAST FRONTIER
            </h2>
            <p
              className="text-base md:text-lg max-w-lg mb-10 leading-relaxed"
              style={{ color: "rgba(226,232,240,0.75)" }}
            >
              "Beyond the stars lies a world<br />that was never meant to be found."
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="btn-primary"
                onClick={() => setTrailerOpen(true)}
                data-hover
                aria-label="Watch trailer"
              >
                <span className="relative z-10">▶ WATCH TRAILER</span>
              </button>
              <button
                className="btn-secondary"
                onClick={() => navigate("/characters")}
                data-hover
              >
                EXPLORE THE WORLD
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-10 relative overflow-hidden" style={{ background: "rgba(59,130,246,0.2)" }}>
            <motion.div
              className="absolute inset-x-0 top-0 h-full"
              style={{ background: "var(--accent)" }}
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Story sections */}
      {storyChapters.map((ch, i) => (
        <StorySection key={i} {...ch} />
      ))}

      {/* Character teaser */}
      <div className="relative py-32 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
              THE VANGUARDS
            </div>
            <h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              MEET THE HEROES
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: "var(--text-muted)" }}>
              Four Vanguards. One planet. Every secret Elyra holds is waiting to be pulled from the dark.
            </p>
            <button
              className="btn-primary"
              onClick={() => navigate("/characters")}
              data-hover
            >
              <span className="relative z-10">MEET THE CHARACTERS</span>
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Gameplay teaser */}
      <div className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=800&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 30%, transparent 70%, var(--bg) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--cyan)" }}>
              GAMEPLAY
            </div>
            <h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              EXPERIENCE<br />THE FRONTIER
            </h2>
            <button
              className="btn-secondary"
              onClick={() => navigate("/gameplay")}
              data-hover
            >
              DISCOVER GAMEPLAY
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative py-40 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <ParticleField count={40} className="absolute inset-0" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-5xl md:text-8xl font-black tracking-tight mb-4 glow-text"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              YOUR JOURNEY<br />BEGINS HERE
            </h2>
            <div className="text-sm tracking-widest mb-10" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
              ECLIPSE · THE LAST FRONTIER
            </div>
            <button
              className="btn-primary text-base px-10 py-4"
              onClick={() => navigate("/play")}
              data-hover
            >
              <span className="relative z-10">PLAY NOW</span>
            </button>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
      <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} />
    </div>
  );
}
