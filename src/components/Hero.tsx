import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowDownRight, FileText, Send, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { data, setIsResumeModalOpen } = usePortfolio();
  const { profile } = data;

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow for dark navy atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Kicker (Clean unboxed kicker) */}
            <div className="flex items-center gap-2 mb-3 text-sky-600 dark:text-sky-400 text-sm font-semibold tracking-wider uppercase font-display">
              <span className="w-6 h-[2px] bg-sky-500 inline-block" />
              <span>{profile.kicker || "Hi, I'm Gustin"}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 font-display [text-wrap:balance]">
              {profile.headline || "IT Support & Digital Solutions"}
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {profile.tagline ||
                "Telecommunications Engineering graduate dedicated to building resilient network infrastructure, solving complex IT challenges, and delivering modern digital systems."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 dark:bg-sky-400 dark:hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-sky-500" />
                <span>View Resume / CV</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Unboxed Credential Markers (No pill capsules) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                <span>{profile.degree.replace("Bachelor of Engineering (S.T.) in ", "B.Eng in ")}</span>
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Hardware & Network Triage</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glass backdrop ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-slate-800/50 to-sky-400/10 blur-md opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-200/40 dark:border-sky-500/20 shadow-2xl">
                <div className="aspect-square w-full relative overflow-hidden bg-slate-950">
                  <img
                    src="https://raw.githubusercontent.com/aldigustin/FIle-Photo/refs/heads/main/Photo%201.jpeg"
                    alt={`${profile.name} - ${profile.headline}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-60" />
                </div>

                {/* Card footer details strip */}
                <div className="p-4 bg-white/90 dark:bg-[#0b1329]/95 backdrop-blur-md border-t border-slate-200 dark:border-sky-950/80 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white font-display">
                      {profile.name}
                    </p>
                    <p className="text-xs text-sky-600 dark:text-sky-400">
                      Telecommunications Engineering & IT
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block">
                      Status
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Open for Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width KPI / Highlights Strip below the hero split */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              Academic Background
            </p>
            <p className="text-base font-bold text-slate-900 dark:text-white font-display">
              Telecommunications
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bachelor of Engineering (S.T.)
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              Primary Specialization
            </p>
            <p className="text-base font-bold text-slate-900 dark:text-white font-display">
              IT Support & Systems
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Diagnostics & Administration
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              Core Competencies
            </p>
            <p className="text-base font-bold text-slate-900 dark:text-white font-display">
              Networks & Diagnostics
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              TCP/IP, VLANs & SOP Runbooks
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              Availability
            </p>
            <p className="text-base font-bold text-slate-900 dark:text-white font-display">
              Ready to Deploy
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Onsite, Hybrid & Remote
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
