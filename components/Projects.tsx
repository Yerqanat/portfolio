import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../constants';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-navy-900 dark:text-slate-lightest">
          <span className="text-cyan-400 font-mono text-xl mr-2">03.</span>
          Featured Projects
        </h2>
        <div className="h-px bg-gray-300 dark:bg-navy-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {FEATURED_PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-navy-700 flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </div>
                <div className="flex gap-4 z-20">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-navy-900 dark:text-slate-lightest mb-2 group-hover:text-cyan-500 transition-colors">
                <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>

              <p className="text-gray-600 dark:text-slate-light text-sm mb-4">
                {project.problem}
              </p>

              <div className="mb-6 flex-grow">
                 <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-gray-500 dark:text-slate-light flex items-start">
                             <span className="text-cyan-400 mr-2 mt-0.5">▹</span> {feature}
                        </li>
                    ))}
                 </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-gray-500 dark:text-slate-light">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-bold text-navy-900 dark:text-slate-lightest">
          Other Noteworthy Projects
        </h3>
        <div className="h-px bg-gray-300 dark:bg-navy-700 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {OTHER_PROJECTS.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white dark:bg-navy-800 p-6 rounded shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-navy-700"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-cyan-600 dark:text-cyan-400">
                <Folder size={32} />
              </div>
              <div className="text-gray-500 group-hover:text-cyan-500 transition-colors">
                <ExternalLink size={20} />
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-navy-900 dark:text-slate-lightest mb-2 group-hover:text-cyan-500 transition-colors">
              {project.title}
            </h4>
            
            <p className="text-sm text-gray-600 dark:text-slate-light mb-4 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map(tech => (
                <span key={tech} className="text-xs font-mono text-gray-500 dark:text-slate-light opacity-70">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;