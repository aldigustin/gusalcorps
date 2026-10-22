import React, { useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, ExternalLink, Github, CheckCircle2, Layers, Tag } from 'lucide-react';

export const ProjectModal: React.FC = () => {
  const { activeProjectModal, setActiveProjectModal } = usePortfolio();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProjectModal, setActiveProjectModal]);

  if (!activeProjectModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={() => setActiveProjectModal(null)}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-sky-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={() => setActiveProjectModal(null)}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
          <img
            src={activeProjectModal.imageUrl}
            alt={activeProjectModal.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-1">
              {activeProjectModal.categoryLabel}
            </span>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold text-white font-display [text-wrap:balance]"
            >
              {activeProjectModal.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Overview & Objectives
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {activeProjectModal.fullDescription}
            </p>
          </div>

          {/* Key Engineering Outcomes */}
          {activeProjectModal.highlights && activeProjectModal.highlights.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                <span>Key Engineering Highlights</span>
              </h3>
              <ul className="space-y-2">
                {activeProjectModal.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used (Unboxed metadata, zero-pill discipline) */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-500" />
              <span>Technical Stack & Tools</span>
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-300 flex flex-wrap items-center gap-x-2 gap-y-1 py-1">
              {activeProjectModal.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{tech}</span>
                  {idx < activeProjectModal.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Project Metadata Details */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div>
              <span className="block font-medium uppercase tracking-wider text-[11px]">Role</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold">{activeProjectModal.role}</span>
            </div>
            
            <div className="flex items-center gap-3">
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {activeProjectModal.liveUrl && (
                <a
                  href={activeProjectModal.liveUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Project Link</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
