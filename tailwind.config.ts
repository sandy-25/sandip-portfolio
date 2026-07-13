import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#080B14',
          secondary: '#0D1117',
          tertiary: '#111827',
          overlay: '#1a2235',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          muted: '#1D4ED8',
          subtle: 'rgba(59, 130, 246, 0.1)',
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        violet: {
          accent: '#7C3AED',
          subtle: 'rgba(124, 58, 237, 0.1)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#475569',
          disabled: '#334155',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          hover: 'rgba(255,255,255,0.12)',
          accent: 'rgba(59, 130, 246, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.5)',
        accent: '0 0 40px rgba(59, 130, 246, 0.15)',
        'accent-strong': '0 0 60px rgba(59, 130, 246, 0.25)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        xs: '4px',
        '4xl': '72px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        noise: "url('/noise.png')",
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
