import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/characters", label: "CHARACTERS" },
  { to: "/gameplay", label: "GAMEPLAY" },
  { to: "/world", label: "WORLD" },
  { to: "/news", label: "NEWS" },
  { to: "/play", label: "PLAY NOW" },
];

const socials = [
  { label: "DISCORD", href: "#" },
  { label: "YOUTUBE", href: "#" },
  { label: "INSTAGRAM", href: "#" },
  { label: "X (TWITTER)", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-3xl font-black tracking-widest mb-1"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              ECLIPSE
            </div>
            <div
              className="text-xs tracking-[0.4em] mb-4"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)" }}
            >
              THE LAST FRONTIER
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              "Beyond the stars lies a world<br />that was never meant to be found."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-xs tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent-bright)" }}
            >
              NAVIGATION
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className="text-xs tracking-wider transition-colors hover:text-white"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                  data-hover
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div
              className="text-xs tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--accent-bright)" }}
            >
              FOLLOW THE MISSION
            </div>
            <div className="flex flex-col gap-2">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs tracking-wider transition-colors hover:text-white"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
                  data-hover
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-6" style={{ borderColor: "var(--border)" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
          <p>ECLIPSE: THE LAST FRONTIER is a fictional game concept created for demonstration purposes.</p>
          <p>© 2147 ECLIPSE PROJECT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
