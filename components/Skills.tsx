import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-navy-900 dark:text-slate-lightest">
          <span className="text-cyan-400 font-mono text-xl mr-2">02.</span>
          Technical Skills
        </h2>
        <div className="h-px bg-gray-300 dark:bg-navy-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-navy-800 p-6 rounded shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-navy-700"
          >
            <div className="flex items-center gap-3 mb-4 text-cyan-600 dark:text-cyan-400">
              {category.icon}
              <h3 className="font-bold text-lg text-navy-900 dark:text-slate-lightest">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-gray-600 dark:text-slate-light text-sm">
                  <span className="text-cyan-400 mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
