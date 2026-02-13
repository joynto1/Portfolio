import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { Layout, Server, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
           WHAT I OFFER
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="group relative glass-panel p-8 rounded-2xl hover:bg-white/80 dark:hover:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(188,19,254,0.15)]"
            >
              {/* Decorative Blur */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-purple/20 blur-[50px] group-hover:bg-neon-purple/30 transition-all duration-500 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-white/10 dark:to-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-neon-purple group-hover:scale-110 group-hover:text-neon-blue transition-all duration-300 shadow-lg">
                  {service.icon === 'Layout' ? <Layout size={32} /> : <Server size={32} />}
                </div>

                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-neon-purple transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-sm font-bold text-neon-purple group-hover:text-neon-blue transition-colors">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;