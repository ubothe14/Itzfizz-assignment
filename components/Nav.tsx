"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/40 py-3 shadow-glass backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-12">
        <a
          href="#"
          className="glass-pill text-sm font-medium tracking-wide text-white/90 transition hover:bg-white/[0.1] hover:text-white"
        >
          ItzFizz
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#about"
            className="glass-subtle rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          >
            About
          </a>
          <a
            href="#features"
            className="glass-subtle rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/[0.06] hover:text-white"
          >
            Features
          </a>
        </div>
      </nav>
    </header>
  );
}
