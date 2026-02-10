import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Dark Mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-navy-900 dark:text-cyan-300">
          YY<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-gray-700 dark:text-slate-lightest hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-cyan-400 mr-1">.</span>{link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-navy-800 transition-colors text-gray-700 dark:text-cyan-300"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="/resume.pdf" 
            className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
           <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full text-gray-700 dark:text-cyan-300"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-cyan-300"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween" }}
            className="fixed inset-0 top-0 bg-white dark:bg-navy-800 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
             <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 text-gray-700 dark:text-cyan-300"
            >
              <X size={32} />
            </button>

            {NAV_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-navy-900 dark:text-slate-lightest hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/resume.pdf" 
              className="px-8 py-3 text-lg font-medium text-cyan-400 border border-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
