import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-gray-100 dark:bg-navy-900 text-gray-500 dark:text-slate-light text-sm">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="#" className="hover:text-cyan-400 transition-colors">
          <Twitter size={20} />
        </a>
      </div>
      <p>
        Designed & Built by <span className="text-cyan-600 dark:text-cyan-400">Yerqanat Yrymbai</span>
      </p>
      <p className="mt-2 text-xs opacity-70">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
