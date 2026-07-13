// src/sections/Projects/ProjectCard.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import type { Project } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { TechTag } from '@/components/ui/TechTag';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Premium project card with expandable details.
 * Shows key info upfront, reveals full details on expand.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const allTechTags = [
    ...project.techStack.backend,
    ...project.techStack.frontend,
    ...project.techStack.database,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <GlassCard
        hover={false}
        className="overflow-hidden group"
        style={{ background: project.gradient }}
      >
        {/* Card Header — always visible */}
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              {/* Status badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className={cn(
                  'px-2.5 py-0.5 rounded-full text-xs font-medium',
                  project.status === 'maintained'
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                    : project.status === 'in-progress'
                    ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                    : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                )}>
                  {project.status === 'maintained' ? '● Live' :
                   project.status === 'in-progress' ? '● In Progress' : '✓ Completed'}
                </span>
                <span className="text-xs text-text-muted">{project.role}</span>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
              <p className="text-sm text-text-secondary font-medium">{project.subtitle}</p>
            </div>

            {/* Accent color indicator */}
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 opacity-80"
              style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}30` }}
            />
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex items-center gap-6 mb-5">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-lg font-bold text-text-primary"
                       style={{ color: project.accentColor }}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-text-muted">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack — preview */}
          <div className="flex flex-wrap gap-2 mb-5">
            {allTechTags.slice(0, 5).map((tech: string) => (
              <TechTag key={tech} label={tech} />
            ))}
            {allTechTags.length > 5 && (
              <span className="tech-tag">+{allTechTags.length - 5} more</span>
            )}
          </div>

          {/* Action row */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {project.githubUrl && (
                <Button variant="ghost" size="sm" href={project.githubUrl} external
                  leftIcon={<FiGithub size={14} />}>
                  GitHub
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="outline" size="sm" href={project.liveUrl} external
                  leftIcon={<FiExternalLink size={14} />}>
                  Live Demo
                </Button>
              )}
            </div>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                'flex items-center gap-1.5 text-xs font-medium',
                'text-text-secondary hover:text-text-primary transition-colors'
              )}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <><FiChevronUp size={14} /> Less</>
              ) : (
                <><FiChevronDown size={14} /> Details</>
              )}
            </motion.button>
          </div>
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-border pt-6 space-y-6">

                {/* Architecture */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full" style={{ background: project.accentColor }} />
                    Architecture
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{project.architecture}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full" style={{ background: project.accentColor }} />
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {project.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: project.accentColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full" style={{ background: project.accentColor }} />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.keyAchievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 text-xs" style={{ color: project.accentColor }}>✓</span>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full tech stack */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 rounded-full" style={{ background: project.accentColor }} />
                    Full Tech Stack
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(project.techStack).map(([category, techs]) =>
                      techs.length > 0 ? (
                        <div key={category} className="flex items-start gap-3">
                          <span className="text-xs text-text-muted capitalize w-16 flex-shrink-0 pt-1">
                            {category}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {techs.map((tech: string) => (
                              <TechTag key={tech} label={tech} size="sm" />
                            ))}
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}
