import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Network, Wrench, Database, FileCode2, ArrowUpRight, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const { data, setIsResumeModalOpen } = usePortfolio();
  const { profile } = data;

  const pillars = [
    {
      icon: Network,
      title: "Telecommunications & Networks",
      description: "Trained in data transmission theory, IP routing, VLAN segmentation, and packet inspection to diagnose root-cause network bottlenecks."
    },
    {
      icon: Wrench,
      title: "IT Support & Troubleshooting",
      description: "Methodical approach to hardware diagnostics, OS maintenance (Windows/Linux/macOS), and user provisioning with quick turnaround."
    },
    {
      icon: Database,
      title: "Data Management & Backups",
      description: "Managing structured SQL records, audit inventories, and scheduled backup strategies to ensure zero data loss."
    },
    {
      icon: FileCode2,
      title: "Technical Documentation",
      description: "Developing comprehensive SOP runbooks, knowledge base articles, and diagrams that turn complex tech into repeatable workflows."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-[#070b16]/70 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase font-display">
            <span className="w-5 h-[2px] bg-sky-500 inline-block" />
            <span>01. Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            About Me & Technical Background
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Biography */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              {profile.bioParagraph1}
            </p>
            <p>
              {profile.bioParagraph2}
            </p>
            <p>
              {profile.bioParagraph3}
            </p>

            {/* Quick Factual Details Table */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Education
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-sky-500" />
                  <span>B.Eng in Telecommunications</span>
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {profile.location}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Email Contact
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-semibold text-sky-600 dark:text-sky-400 hover:underline truncate block"
                >
                  {profile.email}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Languages
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Indonesian (Native) · English (Professional)
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors"
              >
                <span>Read Full Curriculum Vitae</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Foundation Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-[#0b1329] border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-sky-500/40 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
