import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-sky-500 selection:text-slate-950 font-sans">
        
        {/* Subtle developer background grid overlay */}
        <div className="fixed inset-0 bg-grid-pattern opacity-60 dark:opacity-40 pointer-events-none -z-10" />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ResumeModal />
        <EditProfileModal />

      </div>
    </PortfolioProvider>
  );
}
