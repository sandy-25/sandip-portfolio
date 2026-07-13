// src/sections/Footer/index.tsx
import type { ComponentType, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIAL_LINKS } from '@/data/social';
import { cn } from '@/utils/cn';

const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  FiGithub,
  FiLinkedin,
  FiMail,
};

/**
 * Minimal footer with social links, copyright, and back-to-top button.
 */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — Name + Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-violet-accent flex items-center justify-center text-white text-xs font-bold">
              SP
            </div>
            <div>
              <span className="text-sm font-medium text-text-primary">Sandip Prajapati</span>
              <span className="text-text-muted text-sm"> · </span>
              <span className="text-text-muted text-sm">
                © {new Date().getFullYear()} All rights reserved
              </span>
            </div>
          </div>

          {/* Center — Social Links */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICON_MAP[link.icon];
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    'w-8 h-8 rounded-lg',
                    'flex items-center justify-center',
                    'text-text-muted hover:text-text-primary',
                    'hover:bg-surface-tertiary',
                    'transition-all duration-200'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {Icon && <Icon />}
                </motion.a>
              );
            })}
          </div>

          {/* Right — Back to top */}
          <motion.button
            onClick={scrollToTop}
            className={cn(
              'flex items-center gap-2 text-xs font-medium',
              'text-text-muted hover:text-text-primary',
              'transition-colors duration-200'
            )}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={14} />
            Back to top
          </motion.button>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-6 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">
            Built with React 19, TypeScript, Three.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
