import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem } from '../types/portfolio';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { data, setActiveProjectModal } = usePortfolio();
  const [filter, setFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'networking', label: 'Networking' },
    { id: 'it-support', label: 'IT Support' },
    { id: 'telecom', label: 'Telecom & IoT' },
    { id: 'digital-web', label: 'Digital Tools' },
  ];

  const filteredProjects = data.projects.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-[#070b16]/60 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase font-display">
              <span className="w-5 h-[2px] bg-sky-500 inline-block" />
              <span>03. Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Technical Projects & Systems
            </h2>
          </div>

          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto scrollbar-none">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  filter === tab.id
                    ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, index) => {
            // First item spans 8 columns for visual variety and focal anchor
            const isFeatured = index === 0 && filter === 'all';
            const colSpan = isFeatured
              ? 'lg:col-span-8'
              : index === 1 && filter === 'all'
              ? 'lg:col-span-4'
              : 'lg:col-span-6';

            return (
              <article
                key={project.id}
                onClick={() => setActiveProjectModal(project)}
                className={`${colSpan} group cursor-pointer rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Visual Thumbnail */}
                <div className={`relative ${isFeatured ? 'aspect-[16/9] sm:aspect-[2/1]' : 'aspect-video'} w-full bg-slate-950 overflow-hidden`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category text kicker overlaid on top-left */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 drop-shadow-sm font-display">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Expand Hint */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-sky-400" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Clean unboxed technologies with typographic separator */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-slate-500 dark:text-slate-400">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="font-medium">{tech}</span>
                          {idx < Math.min(project.technologies.length, 3) - 1 && (
                            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[11px] text-sky-600 dark:text-sky-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 shrink-0">
                      <span>View Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
