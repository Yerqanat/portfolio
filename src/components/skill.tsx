import { motion } from "framer-motion";
import React from "react";

interface SkillProps {
  icon: React.ReactNode;
  name: string;
  level: number; // Skill level out of 10
}

const Skill: React.FC<SkillProps> = ({ icon, name, level }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="flex items-center justify-between md:px-16 px-6 h-20 "
    >
      <div className="flex items-center">
        {icon}
        <span className="font-inter font-bold ml-4">{name}</span>
      </div>
      <ul className="flex space-x-2">
        {Array.from({ length: 10 }, (_, i) => (
          <li
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < level ? "bg-[#cf4f50]" : "bg-gray-500"
            }`}
          ></li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skill;
