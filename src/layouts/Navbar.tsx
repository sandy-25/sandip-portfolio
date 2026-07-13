// src/layouts/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_ITEMS } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { navbarVariants } from '@/utils/animations';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';

/**
 * Fixed navigation bar with scroll-aware styling and active section tracking.
 * Collapses to hamburger menu on mobile.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-500',
        isScrolled
          ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-card'
          : 'bg-transparent'
      )}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={cn(
              'w-8 h-8 rounded-lg',
              'bg-gradient-to-br from-accent to-violet-accent',
              'flex items-center justify-center',
              'text-white font-bold text-sm'
            )}>
              SP
            </div>
            <span className="font-semibold text-text-primary hidden sm:block">
              Sandip Prajapati
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={cn(
                  'relative px-4 py-2 rounded-lg text-sm font-medium',
                  'transition-colors duration-200',
                  activeSection === item.id
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-surface-tertiary border border-border"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="hidden lg:inline-flex"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            >
              Hire Me
            </Button>

            {/* Mobile hamburger */}
            <motion.button
              className={cn(
                'lg:hidden p-2 rounded-lg',
                'text-text-secondary hover:text-text-primary',
                'hover:bg-surface-tertiary transition-colors'
              )}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="lg:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-b border-border"
      >
        <div className="section-container py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className={cn(
                'px-4 py-3 rounded-lg text-sm font-medium',
                'transition-colors duration-200',
                activeSection === item.id
                  ? 'bg-accent-subtle text-accent border border-accent/20'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-tertiary'
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.label}
            </motion.a>
          ))}
          <div className="pt-2 border-t border-border mt-2">
            <Button variant="primary" size="md" className="w-full" href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
              Hire Me
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
