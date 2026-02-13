import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Send, Github, Linkedin, Facebook, Instagram,Phone, MapPin, Clock  } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gray-50 dark:bg-black pt-20 pb-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              LET'S <span className="text-neon-purple">CONNECT</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md">
              Have a project in mind or want to discuss DevOps strategies? My inbox is always open for new opportunities.
            </p>

            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-neon-purple transition-colors p-4 glass-panel rounded-lg w-fit">
                <Mail className="text-neon-purple" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
              </a>
              
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-neon-purple transition-colors p-4 glass-panel rounded-lg w-fit">
                <Phone className="text-neon-purple" />
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 p-4 glass-panel rounded-lg w-fit">
                <MapPin className="text-neon-purple" />
                <span className="font-mono">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 p-4 glass-panel rounded-lg w-fit">
                <Clock className="text-neon-purple" />
                <span className="font-mono">{PERSONAL_INFO.availability}</span>
              </div>
            
              
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                 <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-white/5 rounded-full hover:bg-gray-300 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                   <Github size={24} />
                 </a>
                 <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-white/5 rounded-full hover:bg-gray-300 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-neon-blue transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                   <Linkedin size={24} />
                 </a>
                 <a href={PERSONAL_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-white/5 rounded-full hover:bg-gray-300 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                   <Facebook size={24} />
                 </a>
                 <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-200 dark:bg-white/5 rounded-full hover:bg-gray-300 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                   <Instagram size={24} />
                 </a>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-panel p-8 rounded-2xl border border-gray-200 dark:border-white/10"
          >
             <form className="space-y-6">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Name</label>
                 <input type="text" id="name" className="w-full bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors" placeholder="John Doe" />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Email</label>
                 <input type="email" id="email" className="w-full bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors" placeholder="john@example.com" />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Message</label>
                 <textarea id="message" rows={4} className="w-full bg-white dark:bg-black/50 border border-gray-300 dark:border-gray-800 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-colors" placeholder="Your message..." />
               </div>
               <button type="button" className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-neon-purple to-purple-600 hover:from-purple-600 hover:to-neon-purple text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-[0_4px_14px_0_rgba(188,19,254,0.39)]">
                 <span>Send Transmission</span>
                 <Send size={18} />
               </button>
             </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
           <p className="text-gray-500 dark:text-gray-500 text-sm">© {new Date().getFullYear()} Joyonto Kumar Das. All rights reserved.</p>
           <p className="text-gray-500 dark:text-gray-600 text-xs mt-2 md:mt-0 font-mono">System Status: Online | Version 2.5.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;