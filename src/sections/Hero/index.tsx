// src/sections/Hero/index.tsx
import { Suspense, lazy } from 'react';
import { HeroContent } from './HeroContent';

// Lazy load the 3D scene — it's heavy and not critical for initial render
const HeroScene = lazy(() =>
  import('./HeroScene').then((mod) => ({ default: mod.HeroScene }))
);


/**
 * Hero section — the first impression.
 * 3D scene is lazy loaded to keep initial bundle lean.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-surface" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-100" />

        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* 3D Scene — lazy loaded */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Hero content */}
      <div className="section-container section-padding relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
}
