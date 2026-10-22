import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { data } = usePortfolio();
  const { profile } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand Wordmark & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-lg font-bold text-white hover:text-sky-400 transition-colors font-display inline-flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-sm bg-sky-400 inline-block" />
              <span>{profile.brandName || "GusAL Corps"}</span>
            </a>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Telecommunications Engineering & Enterprise IT Support Solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              title="Back to top"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-sky-500 hover:text-slate-950 text-slate-300 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <span aria-hidden="true">·</span>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
            <span aria-hidden="true">·</span>
            <a href="#experience" className="hover:text-slate-300 transition-colors">Experience</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
