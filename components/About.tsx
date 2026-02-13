import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white/50 dark:bg-transparent transition-colors duration-300">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 dark:bg-neon-purple/20 rounded-full blur-[100px] -z-10"></div>
       <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ABOUT ME
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 border-2 border-neon-purple/50 rounded-2xl transform rotate-6"></div>
               <div className="absolute inset-0 border-2 border-neon-blue/50 rounded-2xl transform -rotate-6"></div>
               <div className="absolute inset-0 bg-gray-200 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(188,19,254,0.3)]">
                  <img 
                    src="./images/about.jpg" 
                    alt="Joyonto Kumar Das" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-6"
          >
            
           
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
           I am a motivated and detail-oriented Computer Science and Engineering graduate from Northern University Bangladesh with a strong foundation in Frontend Development and DevOps practices. I have successfully completed my internship at Business Automation Ltd., where I gained practical experience in real-world software development, deployment processes, and teamwork within a professional environment.
           <br/> My technical expertise includes HTML, CSS, JavaScript, React.js, Next.js, and fundamental DevOps tools and workflows. I am passionate about building responsive, user-friendly web applications and continuously improving my skills in modern web technologies and automation practices.
            </p>
           
            
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="p-4 glass-panel rounded-lg border-l-2 border-neon-purple">
                  <span className="block text-3xl font-bold text-gray-900 dark:text-white mb-1">2+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Exp.</span>
               </div>
               <div className="p-4 glass-panel rounded-lg border-l-2 border-neon-blue">
                  <span className="block text-3xl font-bold text-gray-900 dark:text-white mb-1">10+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;