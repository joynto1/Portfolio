import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#05050a] text-white overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative flex flex-col items-center z-10">
        {/* Animated Logo/Spinner */}
        <div className="relative w-32 h-32 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-4 border-neon-blue/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-b-4 border-neon-purple/30"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          />
          
          {/* Hexagon shape element */}
          <svg className="absolute inset-0 w-full h-full p-6 text-neon-blue opacity-80" viewBox="0 0 100 100">
             <motion.path 
                d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
          </svg>
        </div>

        {/* Text */}
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-widest mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            JOYONTO
          </span>
        </h2>
        
        <div className="flex items-center gap-2 font-mono text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            INITIALIZING SYSTEM...
          </motion.span>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mt-6 overflow-hidden border border-white/5">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-neon-blue via-purple-500 to-neon-blue"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;