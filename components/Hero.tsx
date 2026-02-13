import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  "Web Developer",
  "DevOps Engineer",
  "Frontend Developer",
  "CSE Graduate"
];

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Name Typing State
  const [displayName, setDisplayName] = useState('');
  
  // Role Blinking State
  const [roleIndex, setRoleIndex] = useState(0);

  // Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = Math.min(width * 0.1, 100);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Check if dark mode is active to adjust particle color
      const isDark = document.documentElement.classList.contains('dark');
      // Changed light mode particle to Slate-400 to avoid deep blue sky look
      const particleColor = isDark ? '#00f3ff' : '#94a3b8';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = isDark 
               ? `rgba(0, 243, 255, ${1 - dist / 150})` 
               : `rgba(148, 163, 184, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous Name Typing Effect
  useEffect(() => {
    const fullName = PERSONAL_INFO.name;
    let timeout: ReturnType<typeof setTimeout>;
    let isDeleting = false;
    let textIndex = 0;

    const animateTyping = () => {
      const currentText = fullName.substring(0, textIndex);
      setDisplayName(currentText);

      let typingSpeed = 150; // Normal typing speed

      if (isDeleting) {
        typingSpeed = 75; // Deleting speed
        textIndex--;
      } else {
        textIndex++;
      }

      if (!isDeleting && textIndex > fullName.length) {
        // Finished typing
        isDeleting = true;
        typingSpeed = 3000; // Pause at end before deleting
        textIndex = fullName.length;
      } else if (isDeleting && textIndex < 0) {
        // Finished deleting
        isDeleting = false;
        typingSpeed = 500; // Pause before restarting
        textIndex = 0;
      }

      timeout = setTimeout(animateTyping, typingSpeed);
    };

    animateTyping();

    return () => clearTimeout(timeout);
  }, []);

  // Role Blinking/Cycling Effect
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(roleTimer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30 dark:opacity-40" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-dark-bg/50 dark:to-dark-bg z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
              {/* Spinning border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-blue rounded-[2rem] opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-[2px] bg-white dark:bg-dark-bg rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 z-10">
                 <img 
                    src="/images/joyonto.jpg" 
                    alt="Joyonto" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                 />
                 {/* Tech Overlay lines */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-3 z-20 glass-panel px-3 py-1.5 rounded-lg border border-neon-purple/30 text-neon-purple flex items-center gap-2 animate-bounce">
                 
                 <span className="text-[10px] font-mono font-bold">OPEN FOR WORK</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <div className="text-center md:text-left space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 mb-3 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue font-mono text-xs tracking-wide">
                HELLO, I'M
              </div>
              
              {/* Name - Typing Effect */}
              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight min-h-[1.2em] whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-neon-blue to-purple-600 dark:from-white dark:via-neon-blue dark:to-neon-purple drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                  {displayName}
                </span>
                <span className="inline-block w-1 h-[0.8em] bg-neon-purple ml-1 align-bottom animate-pulse"></span>
              </h1>

              {/* Role - Blinking/Fading One by One */}
              <div className="h-8 md:h-10 flex items-center justify-center md:justify-start">
                 <AnimatePresence mode="wait">
                    <motion.p
                      key={roleIndex}
                      initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5 }}
                      className="font-mono text-lg md:text-xl text-neon-purple dark:text-neon-purple font-bold tracking-wide"
                    >
                   {ROLES[roleIndex]}
                    </motion.p>
                 </AnimatePresence>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
            >
              <a href={`mailto:${PERSONAL_INFO.email}`} className="px-6 py-2.5 bg-neon-blue text-black font-bold text-sm rounded hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.5)] flex items-center gap-2">
                Hire Me <Mail size={16} />
              </a>
              <a href="../document/Joyonto_Resume.pdf" className="px-6 py-2.5 bg-transparent border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white font-bold text-sm rounded hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                <Download size={16} /> Resume
              </a>
            </motion.div>

            
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-500 hidden md:block"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;