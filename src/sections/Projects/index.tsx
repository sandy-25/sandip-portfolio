// src/sections/Projects/index.tsx
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '@/data/projects';

/**
 * Projects section displaying featured enterprise projects.
 */
export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Enterprise Applications"
          titleAccent="I've Built"
          description="A selection of production-grade enterprise applications demonstrating full-stack expertise, scalable architecture, and real-world impact."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
