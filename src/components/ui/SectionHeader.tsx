// src/components/ui/SectionHeader.tsx
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeInUp, staggerContainer } from '@/utils/animations';

interface SectionHeaderProps {
  eyebrow?: string;        // Small label above title
  title: string;
  titleAccent?: string;    // Portion of title with gradient accent
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Consistent section header component used across all portfolio sections.
 * Supports eyebrow text, gradient title accents, and description.
 */
export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        'mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <motion.div variants={fadeInUp} className="mb-4">
          <span className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5',
            'rounded-full text-xs font-semibold tracking-widest uppercase',
            'bg-accent-subtle border border-accent/20 text-accent'
          )}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeInUp}
        className={cn(
          'text-display-md lg:text-display-lg font-bold text-text-primary',
          'leading-tight tracking-tight text-balance'
        )}
      >
        {title}{' '}
        {titleAccent && (
          <span className="gradient-text-accent">{titleAccent}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'mt-4 text-lg text-text-secondary leading-relaxed',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          )}
        >
          {description}
        </motion.p>
      )}

      {/* Decorative underline */}
      <motion.div
        variants={fadeInUp}
        className={cn(
          'mt-6 h-px',
          'bg-gradient-to-r from-transparent via-accent/30 to-transparent',
          align === 'center' ? 'mx-auto max-w-xs' : 'max-w-xs'
        )}
      />
    </motion.div>
  );
}
