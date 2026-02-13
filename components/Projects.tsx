import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
           DEPLOYED SYSTEMS
          </h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative glass-panel rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-300"
            >
              {/* Image Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-neon-blue/10 dark:bg-neon-blue/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                <div className="absolute top-2 right-2 z-20 flex gap-2">
                   {/* <span className="px-2 py-1 text-[10px] font-mono font-bold bg-white/90 dark:bg-black/70 text-black dark:text-white rounded border border-black/10 dark:border-white/20 backdrop-blur-sm">
                      {project.role}
                   </span> */}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded border border-neon-blue/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-white hover:text-neon-blue transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.sourceUrl} className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;