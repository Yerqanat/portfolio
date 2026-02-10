import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
      <div className="max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cyan-400 font-mono mb-4 text-lg"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-slate-lightest mb-4 tracking-tight"
        >
          Yerqanat Yrymbai.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-gray-600 dark:text-slate-light mb-8 leading-tight"
        >
          Full-Stack Engineer.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-slate-light max-w-2xl mb-12 leading-relaxed"
        >
          Full-stack engineer specializing in <span className="text-cyan-600 dark:text-cyan-300 font-medium">Next.js</span>, <span className="text-cyan-600 dark:text-cyan-300 font-medium">FastAPI</span>, and <span className="text-cyan-600 dark:text-cyan-300 font-medium">AI agent systems</span> with 3+ years of experience building scalable web applications and intelligent automation tools.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="/resume.pdf"
            className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-600 dark:text-cyan-300 rounded font-semibold hover:bg-cyan-400/10 transition-colors text-center"
          >
            Download Resume
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
          >
            Contact Me <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors animate-bounce block">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
