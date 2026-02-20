import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-hero-bg text-white overflow-hidden">
      <Nav />

      <Hero />

      <section
        id="about"
        className="relative z-10 border-t border-white/10 bg-black/30 py-24 backdrop-blur-sm md:py-32"
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
          <div className="glass-strong rounded-3xl p-8 shadow-glass-glow md:p-12 lg:p-16">
            <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl space-y-6">
                <div className="glass-pill inline-flex">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-hero-muted">
                    About This Experience
                  </p>
                </div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Crafted to feel as smooth as a native app.
                </h2>
                <p className="max-w-lg text-pretty text-sm text-hero-muted md:text-base">
                  This hero is engineered specifically for scroll performance: GPU
                  accelerated transforms, ScrollTrigger scrub-based timelines, and
                  layout-aware animations that avoid unnecessary React re-renders.
                  The result is a premium, confident first impression for any
                  product-focused brand.
                </p>
              </div>

              <div className="grid w-full max-w-lg gap-6 text-sm text-hero-muted md:grid-cols-2">
                <div className="glass-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                    Experience
                  </p>
                  <p className="mt-3 text-base text-white/90">
                    Designed to surpass traditional scroll demos with softer easing,
                    refined timing, and a layout that gracefully adapts across
                    breakpoints.
                  </p>
                </div>
                <div className="glass-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                    Engineering
                  </p>
                  <p className="mt-3 text-base text-white/90">
                    Built on the latest Next.js App Router, Tailwind, and GSAP
                    ScrollTrigger with proper cleanup, refs, and responsive motion
                    tuning for mobile and desktop.
                  </p>
                </div>
                <div className="glass-card md:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                    Why it&apos;s internship ready
                  </p>
                  <p className="mt-3 text-base text-white/90">
                    The codebase is structured, production-minded, and ready to be
                    deployed to GitHub Pages via static export, demonstrating both
                    interaction design and engineering discipline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative z-10 border-t border-white/10 bg-black/20 py-24 backdrop-blur-sm md:py-32"
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <div className="glass-pill mx-auto mb-6 inline-flex">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-hero-muted">
                Features
              </p>
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Premium scroll &amp; motion
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-hero-muted">
              Smooth scroll behavior, GSAP load animations, ScrollTrigger scrub, and
              glassmorphic UI applied across the experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card group">
              <div className="glass-subtle mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold text-white">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">Scroll-driven hero</h3>
              <p className="mt-2 text-sm text-hero-muted">
                100vh hero with headline, stats, and a main visual tied to scroll
                progress via ScrollTrigger.
              </p>
            </div>
            <div className="glass-card group">
              <div className="glass-subtle mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold text-white">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">Load animation</h3>
              <p className="mt-2 text-sm text-hero-muted">
                Staggered letter reveal and stat fade-in with power3.out easing for
                a luxury feel.
              </p>
            </div>
            <div className="glass-card group sm:col-span-2 lg:col-span-1">
              <div className="glass-subtle mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold text-white">
                3
              </div>
              <h3 className="text-lg font-semibold text-white">Glassmorphic UI</h3>
              <p className="mt-2 text-sm text-hero-muted">
                Backdrop blur, soft borders, and translucent panels applied
                consistently for a modern, premium look.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/40 py-12 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-12">
          <div className="glass-pill text-center md:text-left">
            <span className="text-sm font-medium text-white/80">
              Scroll Hero GSAP · ItzFizz Assignment
            </span>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="glass-subtle rounded-full px-4 py-2 text-xs text-white/70 transition hover:text-white"
            >
              Top
            </a>
            <a
              href="#about"
              className="glass-subtle rounded-full px-4 py-2 text-xs text-white/70 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#features"
              className="glass-subtle rounded-full px-4 py-2 text-xs text-white/70 transition hover:text-white"
            >
              Features
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
