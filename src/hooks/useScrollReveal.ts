import { useEffect } from "react";

/**
 * Fades in every element marked with `data-reveal` as it scrolls into view.
 * Content stays visible unless this runs, so nothing is hidden without
 * JavaScript or for people who prefer reduced motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    root.classList.add("reveal-on");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // reveal on entry, and anything already scrolled past (deep links, reloads)
          if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove("reveal-on");
    };
  }, []);
}
