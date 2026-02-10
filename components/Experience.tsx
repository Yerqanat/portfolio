import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-navy-900 dark:text-slate-lightest">
          <span className="text-cyan-400 font-mono text-xl mr-2">04.</span>
          Work Experience
        </h2>
        <div className="h-px bg-gray-300 dark:bg-navy-700 flex-grow max-w-xs"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-navy-700"></div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[11px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-white dark:border-navy-900 shadow-lg shadow-cyan-400/50"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-navy-900 dark:text-slate-lightest">
                  {exp.role}
                </h3>
                <span className="font-mono text-sm text-cyan-600 dark:text-cyan-400 whitespace-nowrap mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-lg text-cyan-600 dark:text-cyan-300 font-medium mb-4 flex items-center gap-2">
                <Briefcase size={16} />
                {exp.company}
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 dark:text-slate-light">
                    <span className="text-cyan-400 mr-2 mt-1.5 text-xs">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
