import React, { createContext, useContext, useEffect, useState } from 'react';
import { initialPortfolioData } from '../data/defaultData';
import { EducationItem, ExperienceItem, PortfolioData, ProfileData, ProjectItem } from '../types/portfolio';

const STORAGE_KEY = 'gusal_portfolio_data_v5';
const THEME_KEY = 'gusal_theme_mode';

interface PortfolioContextType {
  data: PortfolioData;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  updateProfile: (updated: Partial<ProfileData>) => void;
  updateProject: (id: string, updated: Partial<ProjectItem>) => void;
  addProject: (project: ProjectItem) => void;
  deleteProject: (id: string) => void;
  updateExperience: (id: string, updated: Partial<ExperienceItem>) => void;
  addExperience: (exp: ExperienceItem) => void;
  deleteExperience: (id: string) => void;
  updateEducation: (id: string, updated: Partial<EducationItem>) => void;
  resetToDefault: () => void;
  exportDataJson: () => void;
  importDataJson: (jsonString: string) => boolean;
  activeProjectModal: ProjectItem | null;
  setActiveProjectModal: (project: ProjectItem | null) => void;
  isResumeModalOpen: boolean;
  setIsResumeModalOpen: (open: boolean) => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse portfolio data from storage, using initial data', e);
    }
    return initialPortfolioData;
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'dark'; // Dark navy default per requirements
  });

  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#080d1a';
      document.body.style.color = '#f1f5f9';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Sync data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [data]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const updateProfile = (updated: Partial<ProfileData>) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...updated }
    }));
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => (p.id === id ? { ...p, ...updated } : p))
    }));
  };

  const addProject = (project: ProjectItem) => {
    setData(prev => ({
      ...prev,
      projects: [project, ...prev.projects]
    }));
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const updateExperience = (id: string, updated: Partial<ExperienceItem>) => {
    setData(prev => ({
      ...prev,
      experiences: prev.experiences.map(e => (e.id === id ? { ...e, ...updated } : e))
    }));
  };

  const addExperience = (exp: ExperienceItem) => {
    setData(prev => ({
      ...prev,
      experiences: [exp, ...prev.experiences]
    }));
  };

  const deleteExperience = (id: string) => {
    setData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(e => e.id !== id)
    }));
  };

  const updateEducation = (id: string, updated: Partial<EducationItem>) => {
    setData(prev => ({
      ...prev,
      education: prev.education.map(e => (e.id === id ? { ...e, ...updated } : e))
    }));
  };

  const resetToDefault = () => {
    setData(initialPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const exportDataJson = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gustin-aldi-portfolio-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importDataJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.profile && parsed.skillCategories && parsed.projects) {
        setData(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON import', e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        theme,
        toggleTheme,
        updateProfile,
        updateProject,
        addProject,
        deleteProject,
        updateExperience,
        addExperience,
        deleteExperience,
        updateEducation,
        resetToDefault,
        exportDataJson,
        importDataJson,
        activeProjectModal,
        setActiveProjectModal,
        isResumeModalOpen,
        setIsResumeModalOpen,
        isEditModalOpen,
        setIsEditModalOpen,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
