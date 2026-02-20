"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && gsap.core.globals().ScrollTrigger == null) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ force3D: true, nullTargetWarn: false });
}

export default function ScrollVisual() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const mm = ScrollTrigger.matchMedia({});

    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
        },
        (context) => {
          const isDesktop = context.conditions?.desktop ?? false;

          const distance = isDesktop ? 220 : 140;
          const rotation = isDesktop ? 10 : 4;
          const scaleFrom = isDesktop ? 0.9 : 0.95;
          const blurMax = isDesktop ? 8 : 4;

          gsap.set(card, {
            yPercent: -10,
            scale: scaleFrom,
            rotateX: isDesktop ? -12 : -6,
            rotateY: isDesktop ? 18 : 8,
            rotateZ: 0,
            opacity: 0.9,
            filter: "blur(0px)",
            transformOrigin: "50% 50%",
            willChange: "transform, opacity, filter",
          });

          gsap.to(card, {
            y: distance,
            scale: 1.05,
            rotateX: isDesktop ? 6 : 3,
            rotateY: isDesktop ? -8 : -4,
            rotateZ: isDesktop ? -6 : -2,
            opacity: 1,
            filter: `blur(${blurMax}px)`,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom+=1000 top",
              scrub: 1.1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.to(card, {
            filter: "blur(0px)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top+=100 top",
              end: "top+=400 top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        }
      );
    }, container);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[70vh] w-full items-center justify-center overflow-visible md:h-[80vh]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 animate-bg-pulse-slow bg-hero-gradient opacity-80" />

      <div
        ref={cardRef}
        className="relative aspect-[4/3] w-[78vw] max-w-xl rounded-[2.5rem] border border-white/20 bg-white/[0.08] p-[1.6px] shadow-glass-lg shadow-glass-glow backdrop-blur-3xl sm:w-[60vw] md:w-[40vw]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-black/90 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(96,165,250,0.35),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(244,114,182,0.35),transparent_55%)] opacity-90" />

          <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="glass inline-flex h-8 w-8 items-center justify-center rounded-2xl text-xs font-semibold text-white">
                  IF
                </span>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
                    Interactive Studio
                  </p>
                  <p className="text-xs text-hero-muted">
                    Scroll Engine · GSAP + Next
                  </p>
                </div>
              </div>

              <div className="glass-pill flex items-center gap-1.5 text-[10px] font-medium text-white/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.35)]" />
                Real‑time scroll sync
              </div>
            </div>

            <div className="glass-subtle rounded-2xl p-4 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                Experience Preview
              </p>
              <h3 className="text-balance text-lg font-medium tracking-tight text-white sm:text-2xl">
                Every pixel responds to your scroll.
              </h3>
              <p className="max-w-xs text-[11px] leading-relaxed text-hero-muted">
                Motion tuned with ScrollTrigger scrub, easing, and GPU
                transforms for a cinematic, zero-jitter hero reveal.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 text-[11px] text-hero-muted">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="glass inline-flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-medium"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-white/70">
                  Live motion samples
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="glass-subtle h-1.5 w-12 overflow-hidden rounded-full">
                  <span className="block h-full w-1/2 translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.26em] text-white/60">
                  Scrub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

