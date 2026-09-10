import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import ParticleField from "../components/ParticleField";
import Footer from "../components/Footer";

const platforms = [
  {
    name: "PC",
    icon: "⊡",
    cta: "WISHLIST ON STEAM",
    os: "Windows 10 / 11",
    storage: "85 GB",
    specs: [
      { label: "RAM", value: "16 GB" },
      { label: "GPU", value: "RTX 3060 / RX 6700" },
      { label: "CPU", value: "Intel i7 / Ryzen 5 5600X" },
    ],
    accent: "#3b82f6",
  },
  {
    name: "PLAYSTATION",
    icon: "⬡",
    cta: "ADD TO WISHLIST",
    os: "PS5",
    storage: "85 GB",
    specs: [
      { label: "PERFORMANCE", value: "60 FPS / 4K" },
      { label: "RAY TRACING", value: "Supported" },
      { label: "HAPTICS", value: "DualSense Enhanced" },
    ],
    accent: "#a855f7",
  },
  {
    name: "XBOX",
    icon: "⬢",
    cta: "ADD TO WISHLIST",
    os: "Xbox Series X|S",
    storage: "85 GB",
    specs: [
      { label: "PERFORMANCE", value: "60 FPS / 4K" },
      { label: "SMART DELIVERY", value: "Included" },
      { label: "GAME PASS", value: "Day One" },
    ],
    accent: "#10b981",
  },
];

const minSpecs = [
  { label: "OS", value: "Windows 10 64-bit" },
  { label: "CPU", value: "Intel i5-8400 / Ryzen 5 2600" },
  { label: "RAM", value: "12 GB" },
  { label: "GPU", value: "GTX 1070 / RX 5700" },
  { label: "STORAGE", value: "85 GB SSD" },
];

const recSpecs = [
  { label: "OS", value: "Windows 11 64-bit" },
  { label: "CPU", value: "Intel i7-12700K / Ryzen 7 5800X3D" },
  { label: "RAM", value: "16 GB" },
  { label: "GPU", value: "RTX 3080 / RX 6800 XT" },
  { label: "STORAGE", value: "85 GB NVMe SSD" },
];

export default function Play() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,8,16,0.97) 0%, rgba(5,8,16,0.7) 100%)" }} />
        <ParticleField count={60} className="absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-xs tracking-widest mb-6" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
              VANGUARD DEPLOYMENT — Q4 2147
            </div>
            <h1
              className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-4 glow-text"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              YOUR JOURNEY<br />BEGINS HERE
            </h1>
            <div
              className="text-base md:text-xl tracking-widest mb-10"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent-bright)" }}
            >
              ECLIPSE · THE LAST FRONTIER
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary text-sm px-10 py-4" data-hover>
                <span className="relative z-10">JOIN THE BETA</span>
              </button>
              <button className="btn-secondary text-sm px-10 py-4" data-hover>
                WISHLIST NOW
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Platform cards */}
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
              AVAILABLE ON
            </div>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              CHOOSE YOUR PLATFORM
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100} className="border flex flex-col p-8 transition-all duration-300 hover:border-opacity-60 group" style={{ borderColor: p.accent + "40", background: "var(--bg2)" }}>
                <div className="text-4xl mb-4" style={{ color: p.accent }}>{p.icon}</div>
                <div
                  className="text-2xl font-black tracking-widest mb-2 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-display)", color: p.accent }}
                >
                  {p.name}
                </div>
                <div className="text-xs mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {p.os} · {p.storage}
                </div>

                <div className="flex flex-col gap-2 mb-8 flex-1">
                  {p.specs.map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-xs" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem" }}>
                      <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{label}</span>
                      <span style={{ color: "rgba(226,232,240,0.8)" }}>{value}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3 text-xs tracking-widest font-bold transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: p.accent + "20",
                    color: p.accent,
                    border: `1px solid ${p.accent}40`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = p.accent;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = p.accent + "20";
                    (e.currentTarget as HTMLElement).style.color = p.accent;
                  }}
                  data-hover
                >
                  {p.cta}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* PC System Requirements */}
      <div className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              PC REQUIREMENTS
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: "MINIMUM", specs: minSpecs, accent: "var(--text-muted)" },
              { title: "RECOMMENDED", specs: recSpecs, accent: "var(--accent-bright)" },
            ].map(({ title, specs, accent }) => (
              <div key={title} className="border p-8" style={{ borderColor: "var(--border)" }}>
                <div
                  className="text-xs tracking-widest mb-6"
                  style={{ fontFamily: "var(--font-display)", color: accent }}
                >
                  {title}
                </div>
                <div className="flex flex-col gap-3">
                  {specs.map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-4 text-xs pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <span className="shrink-0" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{label}</span>
                      <span className="text-right" style={{ color: "rgba(226,232,240,0.8)" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beta CTA */}
      <div className="relative py-32 px-6 overflow-hidden text-center">
        <ParticleField count={40} className="absolute inset-0" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10">
          <ScrollReveal>
            <div className="text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}>
              LIMITED ACCESS PROGRAM
            </div>
            <h2
              className="text-4xl md:text-6xl font-black tracking-tight mb-4 glow-text"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              JOIN THE BETA
            </h2>
            <p className="text-sm max-w-lg mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
              Be among the first Vanguards to set foot on Elyra. Apply for early access and help shape the frontier.
            </p>
            <button className="btn-primary text-sm px-12 py-4" data-hover>
              <span className="relative z-10">APPLY FOR BETA ACCESS</span>
            </button>
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </div>
  );
}
