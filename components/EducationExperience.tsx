import React, { useState } from 'react';
import { EDUCATION, EXPERIENCE, CERTIFICATES } from '../constants';
import { GraduationCap, Briefcase, Award, Calendar, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EducationExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certificates'>('education');

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50/50 dark:bg-dark-bg/50 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
           <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
             JOURNEY
          </h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.3)]' 
                  : 'bg-white/50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white border border-transparent hover:border-gray-300 dark:hover:border-white/20'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {activeTab === 'education' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {EDUCATION.map((edu) => (
                    <div key={edu.id} className="glass-panel p-6 rounded-xl border-l-4 border-l-neon-purple hover:bg-white/80 dark:hover:bg-white/5 transition-colors h-full flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{edu.degree}</h3>
                        <GraduationCap className="text-neon-purple flex-shrink-0" size={24} />
                      </div>
                      <p className="text-neon-blue mb-2 font-medium">{edu.institution}</p>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm bg-gray-200 dark:bg-black/30 w-fit px-3 py-1 rounded-full mb-4">
                        <Calendar size={14} className="mr-2" />
                        {edu.year}
                      </div>
                      
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-auto">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                   {EXPERIENCE.map((exp) => (
                      <div key={exp.id} className="glass-panel p-6 rounded-xl border-l-4 border-l-neon-purple relative overflow-hidden group hover:bg-white/80 dark:hover:bg-white/5 transition-colors">
                         <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                            <Briefcase size={100} className="text-black dark:text-white" />
                         </div>
                         <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                               <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                               <span className="text-xs font-mono py-1 px-2 rounded bg-neon-purple/10 text-neon-purple border border-neon-purple/20 w-fit mt-2 sm:mt-0">{exp.period}</span>
                            </div>
                            <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                         </div>
                      </div>
                   ))}
                </div>
              )}

              {activeTab === 'certificates' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {CERTIFICATES.map((cert) => (
                     <div key={cert.id} className="glass-panel p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] group flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="h-10 w-10 bg-neon-blue/10 rounded-lg flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                              <Award size={20} />
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                              {cert.date}
                            </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                        <p className="text-neon-purple text-sm mb-3 font-medium">{cert.issuer}</p>
                        
                        {cert.description && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                            {cert.description}
                          </p>
                        )}
                        
                        {cert.link && cert.link !== "#" && (
                           <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/5">
                             <a href={cert.link} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-neon-blue transition-colors">
                               Verify Credential <ExternalLink size={14} />
                             </a>
                           </div>
                        )}
                     </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;