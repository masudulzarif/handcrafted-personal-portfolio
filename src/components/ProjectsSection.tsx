import React, { useState } from 'react';
import { ArrowUpRight, Github, Info, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'web-apps' | 'tools' | 'editorial'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'web-apps', label: 'Web Apps' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'editorial', label: 'Editorial' }
  ];

  return (
    <section id="projects" className="py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 space-y-2">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Portfolio & Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-stone-900 dark:text-stone-50">
            Selected Projects
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 max-w-2xl font-sans">
            A curated collection of web applications, tools, and experiments engineered with attention to performance, typography, and pure web standards.
          </p>
        </div>

        {/* Interactive Filter Bar (Functional Buttons) */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2" role="tablist">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            const count = cat.id === 'all' 
              ? PROJECTS.length 
              : PROJECTS.filter(p => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                role="tab"
                aria-selected={isActive}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 border border-stone-200 dark:border-stone-800'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid (Responsive 2-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl overflow-hidden hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              {/* Media Preview Container */}
              {project.image ? (
                <div 
                  className="relative w-full aspect-video bg-stone-100 dark:bg-stone-950 overflow-hidden border-b border-stone-200 dark:border-stone-800 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div 
                  className="w-full aspect-video bg-stone-100 dark:bg-stone-950 p-6 flex flex-col justify-between border-b border-stone-200 dark:border-stone-800 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                    <span>{project.categoryLabel}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold font-display text-stone-900 dark:text-stone-100">
                      {project.title}
                    </h4>
                    <p className="text-xs text-stone-500 font-mono">Zero-dependency visual graph architecture</p>
                  </div>
                  <div className="text-xs text-amber-600 dark:text-amber-400 font-mono">
                    Explore Architecture Details →
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="text-xl font-bold font-display text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-stone-500 dark:text-stone-400 tabular-nums">
                    {project.year}
                  </span>
                </div>

                <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mb-3 font-sans">
                  {project.tagline}
                </p>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4 flex-1 font-sans">
                  {project.description}
                </p>

                {/* Zero-Pill Unboxed Metadata Tags */}
                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center flex-wrap gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 mb-4">
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {idx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Interactive Actions */}
                <div className="flex items-center justify-between pt-1 text-xs font-semibold">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-stone-900 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Study & Highlights</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
