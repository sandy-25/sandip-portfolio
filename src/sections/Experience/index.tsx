// src/sections/Experience/index.tsx
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { TechTag } from '@/components/ui/TechTag';
import { EXPERIENCE } from '@/data/experience';
import { cn } from '@/utils/cn';

/**
 * Animated vertical timeline showing professional experience.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-secondary" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container relative">
        <SectionHeader
          eyebrow="Work Experience"
          title="Professional"
          titleAccent="Journey"
          description="5+ years of enterprise software development across multiple industries and domains."
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent hidden md:block" />

            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline marker */}
                  <div className={cn(
                    'absolute left-0 top-6 w-16 h-16 rounded-2xl',
                    'hidden md:flex items-center justify-center',
                    'text-xl font-bold',
                    exp.isCurrentRole
                      ? 'bg-gradient-to-br from-accent to-violet-accent text-white shadow-accent'
                      : 'bg-surface-tertiary border border-border text-text-secondary'
                  )}>
                    {exp.company.slice(0, 2).toUpperCase()}
                  </div>

                  {/* Current role indicator */}
                  {exp.isCurrentRole && (
                    <div className="absolute left-[52px] top-4 w-3 h-3 rounded-full bg-accent hidden md:block">
                      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                    </div>
                  )}

                  <GlassCard hover={false} className="p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                          {exp.isCurrentRole && (
                            <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-accent font-semibold">{exp.company}</span>
                          {exp.companyUrl && (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                               className="text-text-muted hover:text-accent transition-colors">
                              <FiExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        {exp.clientProject && (
                          <span className="text-xs text-text-muted mt-1 block">
                            {exp.clientProject}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-1 text-xs text-text-muted">
                        <span className="flex items-center gap-1">
                          <FiCalendar size={11} />
                          {exp.startDate} — {exp.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin size={11} />
                          {exp.location}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-tertiary border border-border">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {exp.achievements.length > 0 && (
                      <div className="mb-5">
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                          Achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="mt-0.5 text-accent text-xs">✓</span>
                              <span className="text-text-secondary">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <TechTag key={tech} label={tech} size="sm" />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
