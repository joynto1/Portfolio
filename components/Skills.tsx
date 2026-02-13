import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Brain, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SKILLS[0].category);

  // Map category names to icons
  const getIcon = (category: string) => {
    if (category.includes('Frontend')) return <Code size={18} />;
    if (category.includes('DevOps')) return <Terminal size={18} />;
    if (category.includes('Professional')) return <Brain size={18} />;
    return <Cpu size={18} />;
  };

  const activeSkills = SKILLS.find(s => s.category === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-20 relative bg-gray-100 dark:bg-black/30 transition-colors duration-300">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(18,18,27,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,27,0.8)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
           TECHNICAL ARSENAL
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SKILLS.map((skillGroup) => (
            <button
              key={skillGroup.category}
              onClick={() => setActiveTab(skillGroup.category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-bold transition-all duration-300 ${
                activeTab === skillGroup.category
                  ? 'bg-neon-purple/10 text-neon-purple border border-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.3)]' 
                  : 'bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:border-white/20'
              }`}
            >
              {getIcon(skillGroup.category)}
              {skillGroup.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[400px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               transition={{ duration: 0.3 }}
               className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
             >
               {activeSkills.map((skill, idx) => (
                 <motion.div 
                   key={skill.name}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.05 }}
                   className="group"
                 >
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-gray-800 dark:text-white font-bold tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon-purple/50 group-hover:bg-neon-purple transition-colors"></span>
                        {skill.name}
                     </span>
                     <span className="text-xs font-mono text-neon-purple/80 bg-neon-purple/10 px-2 py-1 rounded border border-neon-purple/20">
                       {skill.proficiency}
                     </span>
                   </div>
                   
                   <div className="w-full bg-gray-200 dark:bg-gray-800/50 rounded-full h-2.5 overflow-hidden backdrop-blur-sm border border-black/5 dark:border-white/5">
                     <motion.div
                       initial={{ width: 0 }}
                       animate={{ width: `${skill.level}%` }}
                       transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                       className="h-full bg-gradient-to-r from-neon-purple/40 via-neon-purple to-white rounded-full shadow-[0_0_10px_rgba(188,19,254,0.3)] relative"
                     >
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                     </motion.div>
                   </div>
                 </motion.div>
               ))}
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;