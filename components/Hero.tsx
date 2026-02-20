"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Stats from "./Stats";
import ScrollVisual from "./ScrollVisual";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ force3D: true, nullTargetWarn: false });
}

const headline = "W E L C O M E  I T Z F I Z Z";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const headlineEl = headlineRef.current;
    const stats = statsRef.current;
    if (!hero || !headlineEl || !stats) return;

    const ctx = gsap.context(() => {
      const letters = headlineEl.querySelectorAll("span[data-letter]");
      const statItems = stats.querySelectorAll("[data-stat-index]");

      gsap.set([headlineEl, stats], { opacity: 1 });

      gsap.set(letters, {
        yPercent: 40,
        opacity: 0,
        rotateX: 35,
        filter: "blur(8px)",
        transformOrigin: "50% 100%",
      });

      gsap.set(statItems, {
        y: 32,
        opacity: 0,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(letters, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.3,
        stagger: {
          each: 0.035,
          from: "start",
        },
      }).to(
        statItems,
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.15,
        },
        "-=0.6"
      );
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-visible bg-hero-bg pb-24 pt-28 text-white md:pb-32 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black via-black/40 to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-6 md:flex-row md:items-center md:justify-between lg:px-12">
        <div className="relative z-10 max-w-xl space-y-8">
          <div className="glass-pill inline-flex">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-hero-muted">
              Scroll‑Driven Hero
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-8 shadow-glass-glow md:p-10">
            <h1
              ref={headlineRef}
              className="text-balance text-center text-3xl font-semibold leading-tight tracking-[0.9em] text-white opacity-0 md:text-left md:text-4xl lg:text-5xl"
            >
              {headline.split("").map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  data-letter
                  className={`inline-block ${
                    char === " " ? "w-3 md:w-4 lg:w-5" : ""
                  }`}
                >
                  {char}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-md text-pretty text-sm text-hero-muted md:text-base">
              A premium, scroll‑interactive hero experience engineered with GSAP
              ScrollTrigger, Next.js App Router, and Tailwind CSS. Every frame is
              tuned to feel intentional, cinematic, and light on the GPU.
            </p>
          </div>

          <div ref={statsRef} className="opacity-0 will-change-transform">
            <Stats />
          </div>
        </div>

        <div className="relative z-10 mt-10 w-full md:mt-0 md:max-w-md lg:max-w-lg">
          <ScrollVisual />
        </div>
      </div>
    </section>
  );
}
