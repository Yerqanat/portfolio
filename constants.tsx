import { Experience, Project, OtherProject, SkillCategory } from './types';
import { 
  Code, 
  Layout, 
  Bot, 
  Terminal, 
  Database,
  Globe
} from 'lucide-react';
import React from 'react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_CATEGORIES: (SkillCategory & { icon: React.ReactNode })[] = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'React Native', 'Python', 'Java', 'Dart'],
    icon: <Code className="w-6 h-6" />
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Next.js', 'React', 'Express.js', 'FastAPI', 'Flutter'],
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: 'AI & Automation',
    skills: ['LLM API Integration', 'AI Agent Workflows', 'RAG Architecture', 'Prompt Engineering', 'Workflow Automation'],
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'Git & GitHub', 'Firebase', 'Supabase', 'Linux / SSH', 'REST APIs', 'Postman'],
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase Firestore', 'Supabase (Postgres)'],
    icon: <Database className="w-6 h-6" />
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'AI Full-stack Engineer (Contract)',
    company: 'IE ALL500',
    period: '2025 – Present',
    responsibilities: [
      'Built a full e-commerce website for batch selling products online for a local chain shop.',
      'Created AI agent workflows to help the sales team respond to customers and manage leads faster.',
      'Integrated and managed a CRM system for tracking customers and sales activity.',
      'Worked closely with the marketing team to improve sales processes using automation.'
    ]
  },
  {
    id: 2,
    role: 'Full-Stack Engineer (Contract)',
    company: 'TOO Tezjet / TOO Elbrus Logistics Co',
    period: '2024 – 2025',
    responsibilities: [
      'Built a complete logistics mobile app for shipment tracking and order management.',
      'Developed a logistics website and admin dashboard for managing orders and operations.',
      'Created backend APIs and handled database design for storing logistics data.',
      'Improved workflow efficiency by building internal tools for the team.',
      'Helped manage CRM system and supported marketing automation.',
      'Deployed and managed backend services using Docker and VPS (SSH).'
    ]
  },
  {
    id: 3,
    role: 'Technical Assistant',
    company: 'IE Aqerke-Online',
    period: '2023 – 2024',
    responsibilities: [
      'Built a simple marketing website for the business.',
      'Managed Facebook advertising campaigns to generate leads.',
      'Helped with website updates and basic technical support.',
      'Assisted with online marketing tools and customer communication setup.'
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Elbrus Logistics Platform',
    category: 'Logistics & Mobile',
    problem: 'Need for a comprehensive system to track shipments from China to Kazakhstan with admin management.',
    techStack: ['Flutter', 'Next.js', 'Docker', 'PostgreSQL', 'VPS'],
    features: [
      'Real-time shipment tracking mobile app',
      'Admin dashboard for order management',
      'Automated status updates',
      'Scalable backend API'
    ],
    liveUrl: 'https://www.elbruslogistics.kz/en',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 2,
    title: 'ALL500 E-Commerce AI',
    category: 'E-commerce & AI',
    problem: 'Improving customer response times and automating sales lead management for an online store.',
    techStack: ['Next.js', 'AI Agents', 'CRM Integration', 'FastAPI'],
    features: [
      'Full e-commerce functionality',
      'AI sales agent workflows',
      'Automated CRM lead entry',
      'Inventory management dashboard'
    ],
    liveUrl: 'https://www.all500.kz/',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 3,
    title: 'Foyer-mu Dashboard',
    category: 'Web App Tool',
    problem: 'Internal management tool requiring a robust backend dashboard system.',
    techStack: ['React', 'Supabase', 'Express.js', 'Tailwind CSS'],
    features: [
      'User management system',
      'Real-time data visualization',
      'Secure authentication',
      'Responsive dashboard layout',
      'Camera & Geo-fencing'
    ],
    liveUrl: 'https://foyer-mu.vercel.app/',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 4,
    title: 'Trioxidil Landing',
    category: 'Marketing Website',
    problem: 'High-performance marketing site needed for desktop and mobile users.',
    techStack: ['Next.js', 'TypeScript', 'Responsive Design', 'SEO'],
    features: [
      'Mobile-first responsive design',
      'Fast loading performance',
      'SEO optimization',
      'Interactive UI elements'
    ],
    liveUrl: 'https://www.trioxidil.kz/',
    imageUrl: 'https://picsum.photos/800/600?random=4'
  }
];

export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: 'Jelpost',
    description: 'International logistics and shipping platform for global delivery services.',
    techStack: ['Next.js', 'React', 'Desktop Optimized'],
    link: 'https://www.jelpost.com/en'
  },
  {
    title: 'Infini Web Alpha',
    description: 'E-commerce platform prototype featuring a comprehensive backend dashboard system.',
    techStack: ['React', 'Node.js', 'Dashboard'],
    link: 'https://infini-web-alpha.vercel.app/'
  },
  {
    title: 'Hanshaiym',
    description: 'Mobile-first marketing landing page optimized for high conversion on mobile devices.',
    techStack: ['Mobile Web', 'React', 'Responsive'],
    link: 'https://hanshaiym.vercel.app/'
  },
  {
    title: 'Travel with Aqerke',
    description: 'A travel agency portfolio and booking inquiry landing page designed for mobile users.',
    techStack: ['Vite', 'Mobile First', 'CSS Animations'],
    link: 'https://travel-with-aqerke-aruzhan.vercel.app/'
  }
];