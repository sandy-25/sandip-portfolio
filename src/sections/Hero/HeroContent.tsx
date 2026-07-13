// src/sections/Hero/HeroContent.tsx
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import {
  SiDotnet,
  SiReact,
  SiSharp,
  SiTypescript,
  SiSqlite,
  SiTailwindcss,
} from 'react-icons/si';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer, fadeIn } from '@/utils/animations';

// Floating tech icons configuration
const TECH_ICONS = [
  { Icon: SiDotnet, color: '#512BD4', label: 'ASP.NET Core', delay: 0 },
  { Icon: SiSharp, color: '#239120', label: 'C#', delay: 0.1 },
  { Icon: SiReact, color: '#61DAFB', label: 'React', delay: 0.2 },
  { Icon: SiTypescript, color: '#3178C6', label: 'TypeScript', delay: 0.3 },
  { Icon: SiSqlite, color: '#CC2927', label: 'SQLite', delay: 0.4 },
  { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind', delay: 0.5 },
];

/**
 * Hero section text content and CTAs.
 * Separated from the 3D scene for clean component boundaries.
 */
export function HeroContent() {
  const handleScrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
    >
      {/* Status badge */}
      <motion.div variants={fadeInUp} className="mb-8">
        <span className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full
          text-xs font-semibold tracking-wide
          bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
        `}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for new opportunities
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.div variants={fadeInUp} className="mb-6">
        <h1 className="text-5xl sm:text-6xl lg:text-display-2xl font-bold tracking-tight">
          <span className="gradient-text">Hi, I'm Sandip</span>
          <br />
          <span className="text-text-primary">Prajapati</span>
        </h1>
      </motion.div>

      {/* Role */}
      <motion.div variants={fadeInUp} className="mb-6">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-12 bg-accent/50" />
          <span className="text-lg sm:text-xl font-medium text-accent tracking-wide">
            Full Stack .NET Developer
          </span>
          <div className="h-px w-12 bg-accent/50" />
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeInUp}
        className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mb-10 text-balance"
      >
        Building{' '}
        <span className="text-text-primary font-medium">scalable enterprise applications</span>{' '}
        with ASP.NET Core, C#, React, and SQL Server. 5+ years of experience delivering
        production-grade solutions at{' '}
        <span className="text-text-primary font-medium">Cognizant</span> and beyond.
      </motion.p>

      {/* Stats row */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-8 sm:gap-12 mb-12"
      >
        {[
          { value: '5+', label: 'Years Experience' },
          { value: '10+', label: 'Projects Delivered' },
          { value: '2', label: 'Companies' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text-accent">{stat.value}</div>
            <div className="text-xs text-text-muted mt-1 tracking-wide">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
      >
        <Button
          variant="primary"
          size="lg"
          rightIcon={<FiArrowRight />}
          onClick={() => handleScrollTo('#projects')}
        >
          View Projects
        </Button>
        <Button
          variant="secondary"
          size="lg"
          leftIcon={<FiDownload />}
          href="/resume.pdf"
          external
        >
          Download Resume
        </Button>
        <Button
          variant="ghost"
          size="lg"
          leftIcon={<FiMail />}
          onClick={() => handleScrollTo('#contact')}
        >
          Contact Me
        </Button>
      </motion.div>

      {/* Floating tech icons */}
      <motion.div
        variants={fadeIn}
        className="flex items-center gap-3 flex-wrap justify-center"
      >
        <span className="text-xs text-text-muted tracking-wider uppercase mr-2">Built with</span>
        {TECH_ICONS.map(({ Icon, color, label, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + delay, duration: 0.4 }}
            whileHover={{ scale: 1.2, y: -4 }}
            className="group relative"
            title={label}
          >
            <div className="p-2 rounded-lg bg-surface-tertiary border border-border hover:border-border-hover transition-colors">
              <Icon size={18} color={color} />
            </div>
            {/* Tooltip */}
            <span className={`
              absolute -top-8 left-1/2 -translate-x-1/2
              px-2 py-1 rounded text-xs text-text-primary bg-surface-overlay border border-border
              opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap
            `}>
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
