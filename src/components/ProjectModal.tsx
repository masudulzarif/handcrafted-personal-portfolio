import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50/90 dark:bg-stone-900/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Shipped {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {project.image && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <h2 id="project-modal-title" className="text-2xl font-bold font-display tracking-tight text-stone-900 dark:text-stone-50 mb-1">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
              {project.tagline}
            </p>
          </div>

          {/* Unboxed Metadata Tags */}
          <div className="flex items-center flex-wrap gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            {project.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {idx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="space-y-4 text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Project Architecture & Overview
            </h3>
            <p>{project.description}</p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Key Engineering Highlights
            </h3>
            <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 font-sans">
              {project.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <button
                onClick={() => {
                  alert(`Demo active: ${project.title} live interface preview ready in this environment.`);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Demo</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
