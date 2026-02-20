/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      colors: {
        'hero-bg': '#050509',
        'hero-muted': '#9ca3af'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(96,165,250,0.18), transparent 60%), radial-gradient(circle at bottom right, rgba(244,114,182,0.18), transparent 60%)'
      },
      keyframes: {
        'bg-pulse': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-10px,0) scale(1.02)' }
        }
      },
      animation: {
        'bg-pulse-slow': 'bg-pulse 16s ease-in-out infinite'
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px'
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-lg': '0 24px 64px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-glow': '0 0 40px rgba(96,165,250,0.08), 0 0 80px rgba(244,114,182,0.06), inset 0 1px 0 rgba(255,255,255,0.06)'
      }
    }
  },
  plugins: []
};

