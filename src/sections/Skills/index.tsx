// src/sections/Skills/index.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillCard } from './SkillCard';
import { SKILL_GROUPS } from '@/data/skills';
import { cn } from '@/utils/cn';
import type { SkillCategory } from '@/types';

const CATEGORY_COLORS = {
  backend: { accent: '#3B82F6', gradient: 'from-blue-500/10 to-blue-600/5', border: 'border-blue-500/20', text: 'text-blue-400' },
  frontend: { accent: '#7C3AED', gradient: 'from-violet-500/10 to-violet-600/5', border: 'border-violet-500/20', text: 'text-violet-400' },
  tools: { accent: '#10B981', gradient: 'from-emerald-500/10 to-emerald-600/5', border: 'border-emerald-500/20', text: 'text-emerald-400' },
};

/**
 * Skills section with category tabs and animated skill cards.
 */
export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('backend');

  const activeGroup = SKILL_GROUPS.find((g) => g.category === activeCategory)!;
  const colors = CATEGORY_COLORS[activeCategory];

  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-secondary" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container relative">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Technologies I"
          titleAccent="Work With"
          description="5+ years of hands-on experience with enterprise Microsoft technologies and modern frontend frameworks."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {SKILL_GROUPS.map((group) => {
            const groupColors = CATEGORY_COLORS[group.category];
            const isActive = activeCategory === group.category;
            return (
              <motion.button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={cn(
                  'px-6 py-2.5 rounded-xl text-sm font-medium',
                  'border transition-all duration-300',
                  isActive
                    ? `bg-gradient-to-r ${groupColors.gradient} ${groupColors.border} ${groupColors.text}`
                    : 'bg-transparent border-border text-text-secondary hover:border-border-hover hover:text-text-primary'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {group.label}
                <span className={cn(
                  'ml-2 px-1.5 py-0.5 rounded-full text-xs',
                  isActive ? groupColors.text : 'text-text-muted',
                  'bg-surface-tertiary'
                )}>
                  {group.skills.length}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-text-secondary">{activeGroup.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {activeGroup.skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                accentColor={colors.accent}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom highlight — core competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass-card rounded-2xl p-8"
        >
          <h3 className="text-center text-sm font-semibold text-text-muted uppercase tracking-widest mb-6">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Scalable Backend Architecture',
              'REST API Design',
              'Real-Time Systems (SignalR)',
              'Database Optimization',
              'Clean Code Practices',
              'SOLID Principles',
              'Agile Development',
              'Team Mentoring',
              'Performance Optimization',
              'Enterprise Applications',
            ].map((competency) => (
              <motion.span
                key={competency}
                className="tech-tag"
                whileHover={{ scale: 1.05 }}
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
