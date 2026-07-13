// src/App.tsx
import { Suspense, lazy } from 'react';
import { Navbar } from '@/layouts/Navbar';
import { HeroSection } from '@/sections/Hero';
import { Footer } from '@/sections/Footer';

// Lazy load below-fold sections for performance
const AboutSection = lazy(() =>
  import('@/sections/About').then((m) => ({ default: m.AboutSection }))
);
const SkillsSection = lazy(() =>
  import('@/sections/Skills').then((m) => ({ default: m.SkillsSection }))
);
const ProjectsSection = lazy(() =>
  import('@/sections/Projects').then((m) => ({ default: m.ProjectsSection }))
);
const ExperienceSection = lazy(() =>
  import('@/sections/Experience').then((m) => ({ default: m.ExperienceSection }))
);
const ContactSection = lazy(() =>
  import('@/sections/Contact').then((m) => ({ default: m.ContactSection }))
);

/**
 * Loading fallback for lazy-loaded sections.
 * Minimal to avoid layout shift.
 */
function SectionLoader() {
  return (
    <div className="section-padding flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

/**
 * Root application component.
 * Single-page layout with smooth scroll sections.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-surface text-text-primary overflow-x-hidden">
      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* Hero is NOT lazy loaded — it's the first thing users see */}
        <HeroSection />

        {/* Below-fold sections — lazy loaded */}
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
