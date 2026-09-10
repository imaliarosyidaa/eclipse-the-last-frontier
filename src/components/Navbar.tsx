import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "HOME" },
  { to: "/characters", label: "CHARACTERS" },
  { to: "/gameplay", label: "GAMEPLAY" },
  { to: "/world", label: "WORLD" },
  { to: "/news", label: "NEWS" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePlay = () => {
    setMobileOpen(false);
    navigate("/play");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5, 8, 16, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col leading-none group" data-hover>
            <span
              className="text-lg font-black tracking-widest group-hover:text-blue-400 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ECLIPSE
            </span>
            <span
              className="text-[8px] tracking-[0.4em]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-bright)", lineHeight: 1 }}
            >
              THE LAST FRONTIER
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                data-hover
                className={({ isActive }) =>
                  `text-xs tracking-widest transition-all duration-300 relative group ${
                    isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
                  }`
                }
                style={{ fontFamily: "var(--font-display)" }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                      style={{
                        background: "var(--accent)",
                        width: isActive ? "100%" : "0%",
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={handlePlay} className="btn-primary text-xs" data-hover>
              <span className="relative z-10">PLAY NOW</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            data-hover
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "var(--accent)",
                transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "var(--accent)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                background: "var(--accent)",
                transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(5,8,16,0.97)", backdropFilter: "blur(20px)" }}
          >
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
              >
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-black tracking-widest transition-colors ${
                      isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                    }`
                  }
                  style={{ fontFamily: "var(--font-display)" }}
                  data-hover
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handlePlay}
              className="btn-primary mt-4"
              data-hover
            >
              <span className="relative z-10">PLAY NOW</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
