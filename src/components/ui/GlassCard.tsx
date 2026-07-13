// src/components/ui/GlassCard.tsx
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { cardHover } from '@/utils/animations';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  hover?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Glassmorphism card component — the primary card surface in the portfolio.
 * Subtle glass effect with optional hover animations and glow.
 */
export function GlassCard({
  hover = true,
  glow = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass-card rounded-2xl',
        'transition-colors duration-300',
        hover && 'hover:border-border-hover cursor-pointer',
        glow && 'hover:shadow-accent',
        className
      )}
      variants={hover ? cardHover : undefined}
      initial={hover ? 'rest' : undefined}
      whileHover={hover ? 'hover' : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
