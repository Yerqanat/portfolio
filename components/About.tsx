import React from "react";
import SectionWrapper from "./SectionWrapper";
import { User } from "lucide-react";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-slate-lightest">
              <span className="text-cyan-400 font-mono text-xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-gray-300 dark:bg-navy-700 flex-grow max-w-xs"></div>
          </div>

          <div className="text-gray-600 dark:text-slate-light space-y-4 leading-relaxed">
            <p>
              I’m Yerqanat, a full-stack engineer who enjoys building real,
              working products — not just demos. Over the past few years, I’ve
              worked across frontend and backend, mainly using{" "}
              <strong>Next.js</strong>, <strong>Supabase</strong>,{" "}
              <strong>Firebase</strong>, <strong>Express.js</strong> and{" "}
              <strong>FastAPI</strong> to build scalable web applications and
              internal systems..
            </p>
            <p>
              I’m comfortable handling the full development cycle — from
              designing APIs and databases to deploying services with{" "}
              <strong> Docker </strong> on a <strong> VPS </strong>. I like
              understanding how systems actually run in production, not just how
              they work locally.
            </p>
            <p>
              Lately, I’ve been focusing more on AI systems and automation. I’m
              building tools that use <strong> LLM APIs </strong>, agent
              workflows, and retrieval-based systems to solve real business
              problems. I’m looking for remote opportunities where I can
              contribute to building practical, high-impact products —
              especially in <strong>AI-driven</strong> startups or backend-heavy
              environments.
            </p>
          </div>
        </div>

        <div className="relative group mx-auto md:mx-0">
          <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded bg-cyan-200 overflow-hidden shadow-xl z-10">
            <img
              src="/portfolio.png"
              alt="Yerqanat Yrymbai"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative border */}
          <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-400 rounded -z-0 transition-transform duration-300 group-hover:top-2 group-hover:left-2"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
