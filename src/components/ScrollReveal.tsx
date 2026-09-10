import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

export default function ScrollReveal({ children, className = "", delay = 0, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
