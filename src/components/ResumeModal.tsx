import React, { useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const ResumeModal: React.FC = () => {
  const { data, isResumeModalOpen, setIsResumeModalOpen } = usePortfolio();
  const { profile, education, experiences, skillCategories } = data;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeModalOpen(false);
      }
    };
    if (isResumeModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumeModalOpen, setIsResumeModalOpen]);

  if (!isResumeModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={() => setIsResumeModalOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl my-6 bg-white dark:bg-[#0c1427] text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Toolbar */}
        <div className="p-4 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 id="resume-title" className="text-sm font-bold font-display">
              Curriculum Vitae — {profile.name}
            </h2>
            <span className="text-xs text-slate-500 hidden sm:inline">
              (Telecommunications & IT Support)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 text-white hover:bg-sky-500 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => setIsResumeModalOpen(false)}
              aria-label="Close CV modal"
              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:text-black print:bg-white">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
              {profile.name}
            </h1>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1">
              Telecommunications Engineering Graduate · IT Support & Digital Solutions
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                <span>{profile.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>{profile.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-sky-500" />
                <span>linkedin.com/in/gustin-aldi</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-sky-500" />
                <span>github.com/gustinaldi</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {profile.bioParagraph1} {profile.bioParagraph2}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3">
              Education
            </h2>
            {education.map(edu => (
              <div key={edu.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {edu.period} · {edu.location}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  {edu.institution}
                </p>
                {edu.capstoneProject && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Capstone:</span> {edu.capstoneProject}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3">
              Professional & Practical Experience
            </h2>
            <div className="space-y-5">
              {experiences.map(exp => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role} — <span className="text-sky-600 dark:text-sky-400">{exp.organization}</span>
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300 pl-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Inventory */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skillCategories.map(cat => (
                <div key={cat.id} className="space-y-1">
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">
                    {cat.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {cat.skills.map(s => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
