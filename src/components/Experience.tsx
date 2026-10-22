import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, GraduationCap, Calendar, MapPin, Plus, Edit2, Trash2 } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

export const Experience: React.FC = () => {
  const { data, addExperience, deleteExperience, setIsEditModalOpen } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newRole, setNewRole] = useState({
    role: '',
    organization: '',
    period: '',
    location: '',
    description: '',
    achievements: ''
  });

  const handleAddNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRole.role.trim() || !newRole.organization.trim()) return;

    const newExp: ExperienceItem = {
      id: `exp-${Date.now()}`,
      role: newRole.role.trim(),
      organization: newRole.organization.trim(),
      period: newRole.period.trim() || 'Present',
      location: newRole.location.trim() || 'Indonesia',
      description: newRole.description.trim() || 'Managed technical workflows and IT support.',
      achievements: newRole.achievements
        ? newRole.achievements.split('\n').filter(a => a.trim().length > 0)
        : ['Assisted end-users with daily hardware and network inquiries.'],
      skillsApplied: []
    };

    addExperience(newExp);
    setIsAddingNew(false);
    setNewRole({
      role: '',
      organization: '',
      period: '',
      location: '',
      description: '',
      achievements: ''
    });
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase font-display">
              <span className="w-5 h-[2px] bg-sky-500 inline-block" />
              <span>04. Background & Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Experience & Education
            </h2>
          </div>

          {/* Toggle between Experience and Education */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'experience'
                    ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Work Experience</span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'education'
                    ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </button>
            </div>

            {/* Quick Edit Profile Button */}
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
              title="Edit Profile Data"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Edit Details</span>
            </button>
          </div>
        </div>

        {/* Work Experience Tab View */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            <div className="flex justify-end">
              <button
                onClick={() => setIsAddingNew(!isAddingNew)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingNew ? 'Cancel Adding' : 'Add New Work Entry'}</span>
              </button>
            </div>

            {/* Form to add custom work experience */}
            {isAddingNew && (
              <form
                onSubmit={handleAddNewSubmit}
                className="p-6 rounded-2xl bg-white dark:bg-[#0b1329] border border-sky-500/40 shadow-lg space-y-4 mb-6 animate-in fade-in duration-200"
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
                  Add Professional Experience
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Job Title / Role *
                    </label>
                    <input
                      type="text"
                      required
                      value={newRole.role}
                      onChange={(e) => setNewRole({ ...newRole, role: e.target.value })}
                      placeholder="e.g. IT Support Specialist"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={newRole.organization}
                      onChange={(e) => setNewRole({ ...newRole, organization: e.target.value })}
                      placeholder="e.g. Enterprise Solutions Corp"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Period
                    </label>
                    <input
                      type="text"
                      value={newRole.period}
                      onChange={(e) => setNewRole({ ...newRole, period: e.target.value })}
                      placeholder="e.g. 2024 — Present"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={newRole.location}
                      onChange={(e) => setNewRole({ ...newRole, location: e.target.value })}
                      placeholder="e.g. Jakarta, Indonesia"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Summary Description
                  </label>
                  <input
                    type="text"
                    value={newRole.description}
                    onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                    placeholder="Brief description of responsibilities..."
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Key Achievements (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={newRole.achievements}
                    onChange={(e) => setNewRole({ ...newRole, achievements: e.target.value })}
                    placeholder="Resolved 100+ hardware tickets&#10;Configured local VLAN routing"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingNew(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg"
                  >
                    Save Entry
                  </button>
                </div>
              </form>
            )}

            {/* Experience List */}
            <div className="space-y-6">
              {data.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/30 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-500" />
                        <span>{exp.period}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-500" />
                        <span>{exp.location}</span>
                      </span>
                      {data.experiences.length > 1 && (
                        <button
                          onClick={() => deleteExperience(exp.id)}
                          title="Delete Entry"
                          className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                        Key Accomplishments
                      </span>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Tab View */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {data.education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0b1329] border border-slate-200/80 dark:border-slate-800/80"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      <span>{edu.period}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {edu.gpaOrHonors && (
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                    {edu.gpaOrHonors}
                  </p>
                )}

                {/* Capstone Project */}
                {edu.capstoneProject && (
                  <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                      Undergraduate Engineering Capstone
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      Classification of Bird Sound Using Deep Learning Based On Compressive Sensing
                    </p>
                  </div>
                )}

                {/* Core subjects (Unboxed with separators) */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Core Engineering Coursework
                  </span>
                  <div className="text-xs text-slate-600 dark:text-slate-300 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    {edu.coreSubjects.map((subject, idx) => (
                      <React.Fragment key={subject}>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{subject}</span>
                        {idx < edu.coreSubjects.length - 1 && (
                          <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
