// src/sections/Skills/SkillCard.tsx
import { motion } from 'framer-motion';
import type { Skill } from '@/types';
import { cn } from '@/utils/cn';

interface SkillCardProps {
  skill: Skill;
  index: number;
  accentColor: string;
}

/**
 * Individual skill card with animated proficiency bar.
 */
export function SkillCard({ skill, index, accentColor }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className={cn(
        'glass-card rounded-xl p-4',
        'hover:border-border-hover transition-all duration-300',
        skill.highlight && 'border-accent/20 bg-accent-subtle/5'
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={cn(
          'text-sm font-medium text-text-primary',
          skill.highlight && 'text-blue-200'
        )}>
          {skill.name}
        </span>
        {skill.highlight && (
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
        )}
      </div>

      {/* Proficiency bar */}
      <div className="h-1 bg-surface-overlay rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: accentColor }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-text-muted">
          {skill.yearsOfExperience}yr{skill.yearsOfExperience !== 1 ? 's' : ''}
        </span>
        <span className="text-xs text-text-muted">{skill.proficiency}%</span>
      </div>
    </motion.div>
  );
}
