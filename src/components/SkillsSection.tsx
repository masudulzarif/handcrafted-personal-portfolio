import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Capabilities & Craft
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-stone-900 dark:text-stone-50">
            Skills & Technical Toolkit
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 max-w-2xl font-sans">
            A disciplined focus on web standards, native browser capabilities, resilient layout architecture, and high-performance user interfaces.
          </p>
        </div>

        {/* 4 Categorized Columns in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={category.title}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
            >
              <div className="mb-6">
                <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                  0{idx + 1}. Domain Focus
                </span>
                <h3 className="text-lg font-bold font-display text-stone-900 dark:text-stone-100 mt-1">
                  {category.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-sans">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="pb-3 border-b border-stone-100 dark:border-stone-800/80 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-stone-500 dark:text-stone-400 tabular-nums shrink-0">
                        {skill.level} · {skill.experience}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed font-sans">
                      {skill.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
