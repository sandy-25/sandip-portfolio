// src/components/ui/TechTag.tsx
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TechTagProps {
  label: string;
  color?: 'blue' | 'violet' | 'emerald' | 'amber' | 'rose';
  size?: 'sm' | 'md';
}

const colorStyles = {
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
  rose: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
};

/**
 * Technology badge/tag component for displaying tech stack items.
 */
export function TechTag({ label, color = 'blue', size = 'md' }: TechTagProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center rounded-full font-medium border',
        colorStyles[color],
        sizeStyles[size]
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      {label}
    </motion.span>
  );
}
