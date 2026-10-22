import React, { useState, useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Search } from 'lucide-react';

export const Skills: React.FC = () => {
  const { data } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    ...data.skillCategories.map(c => ({ id: c.id, label: c.title }))
  ];

  const filteredCategories = useMemo(() => {
    return data.skillCategories
      .filter(category => {
        if (selectedCategory === 'all') return true;
        return category.id === selectedCategory;
      })
      .map(category => {
        const matchingSkills = category.skills.filter(skill => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          return (
            skill.name.toLowerCase().includes(q) ||
            skill.description.toLowerCase().includes(q) ||
            skill.tools.some(t => t.toLowerCase().includes(q))
          );
        });
        return {
          ...category,
          skills: matchingSkills
        };
      })
      .filter(category => category.skills.length > 0);
  }, [data.skillCategories, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase font-display">
              <span className="w-5 h-[2px] bg-sky-500 inline-block" />
              <span>02. Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Technical Skills & Proficiencies
            </h2>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools or skills..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Category Sections */}
        <div className="space-y-10">
          {filteredCategories.map(category => (
            <div key={category.id} className="space-y-4">
              <div className="border-b border-slate-200/70 dark:border-slate-800/80 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {category.shortDesc}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map(skill => (
                  <div
                    key={skill.id}
                    className="p-5 rounded-xl bg-white dark:bg-[#0b1329] border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/30 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span className="text-xs font-medium text-sky-600 dark:text-sky-400">
                          {skill.level}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Unboxed tools metadata with typographic separators */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                      <span className="font-medium text-slate-700 dark:text-slate-300">Tools:</span>
                      {skill.tools.map((tool, idx) => (
                        <React.Fragment key={tool}>
                          <span>{tool}</span>
                          {idx < skill.tools.length - 1 && (
                            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="p-12 text-center rounded-xl bg-slate-50 dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                No matching skills found for &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs font-semibold text-sky-500 hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
