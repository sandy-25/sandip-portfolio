// src/sections/About/index.tsx
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiBriefcase, FiAward } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/utils/animations';

const STATS = [
  { icon: FiCalendar, value: '5+', label: 'Years Experience', color: 'text-blue-400' },
  { icon: FiBriefcase, value: '2', label: 'Companies', color: 'text-violet-400' },
  { icon: FiAward, value: '10+', label: 'Projects', color: 'text-emerald-400' },
  { icon: FiMapPin, value: 'IND', label: 'Ahmedabad, India', color: 'text-amber-400' },
];

const TIMELINE = [
  {
    year: '2019',
    title: 'Started .NET Journey',
    description: 'Joined Diyan Technologies as a .NET Developer, beginning my enterprise software career.',
    color: 'bg-violet-500',
  },
  {
    year: '2020',
    title: 'Real-Time Systems',
    description: 'Mastered SignalR and WebSockets, building the Wegodoo real-time task management platform.',
    color: 'bg-blue-500',
  },
  {
    year: '2021',
    title: 'Full Stack Growth',
    description: 'Expanded into React.js and Angular 9 frontend development, built Infovores trade analytics platform.',
    color: 'bg-emerald-500',
  },
  {
    year: '2022',
    title: 'Enterprise Scale',
    description: 'Joined Careernet, deployed at Cognizant building mission-critical SOX compliance systems.',
    color: 'bg-accent',
  },
  {
    year: 'Now',
    title: 'Senior Full Stack Developer',
    description: 'Building enterprise applications with ASP.NET Core, React, and SQL Server at scale.',
    color: 'bg-gradient-to-r from-accent to-violet-accent',
    isCurrent: true,
  },
];

/**
 * About section with professional summary, stats grid, and career timeline.
 */
export function AboutSection() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          eyebrow="About Me"
          title="Building Enterprise Software"
          titleAccent="That Scales"
          description="Full Stack .NET Developer with 5+ years of experience architecting and delivering production-grade enterprise applications."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Professional Summary */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <GlassCard hover={false} className="p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Professional Summary
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I'm a Full Stack .NET Developer based in{' '}
                  <span className="text-text-primary font-medium">Ahmedabad, India</span>, with
                  over 5 years of experience building scalable enterprise web applications using
                  Microsoft technologies.
                </p>
                <p>
                  Currently working at{' '}
                  <span className="text-text-primary font-medium">Careernet</span>, deployed on
                  an enterprise project for{' '}
                  <span className="text-accent font-medium">Cognizant</span>, where I architect
                  and maintain large-scale compliance and audit management systems.
                </p>
                <p>
                  My expertise spans the full development lifecycle — from designing{' '}
                  <span className="text-text-primary font-medium">scalable REST APIs</span> and
                  database architectures to building{' '}
                  <span className="text-text-primary font-medium">modern React frontends</span>.
                  I specialize in real-time systems using SignalR/WebSockets and
                  performance optimization.
                </p>
                <p>
                  I hold a{' '}
                  <span className="text-text-primary font-medium">
                    Bachelor of Computer Applications (BCA)
                  </span>{' '}
                  and have a passion for clean code, SOLID principles, and mentoring junior developers.
                </p>
              </div>
            </GlassCard>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 text-center">
                    <stat.icon size={20} className={`${stat.color} mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Career Timeline */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-text-primary mb-8">Career Journey</h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

              <div className="space-y-8">
                {TIMELINE.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className={`
                      absolute left-0 top-1 w-8 h-8 rounded-full
                      ${item.isCurrent ? 'bg-gradient-to-br from-accent to-violet-accent' : item.color}
                      flex items-center justify-center
                      ${item.isCurrent ? 'ring-4 ring-accent/20' : ''}
                    `}>
                      {item.isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      ) : (
                        <span className="text-white text-xs font-bold">
                          {item.year.slice(-2)}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold text-text-muted tracking-wider uppercase">
                          {item.year}
                        </span>
                        {item.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
