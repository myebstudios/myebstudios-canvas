import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="ml-20 md:ml-24 min-h-screen relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #6B5191 1px, transparent 1px), linear-gradient(to bottom, #6B5191 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block px-3 py-1 bg-studio-purple text-electric-teal text-xs font-bold tracking-widest uppercase"
          >
            Status: Building the Future
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-8">
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white block"
            >
              WE DON'T JUST
            </motion.span>
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-solar-yellow block drop-shadow-[0_0_20px_rgba(229,195,73,0.3)]"
            >
              DESIGN.
            </motion.span>
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white block"
            >
              WE BUILD THE
            </motion.span>
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-electric-teal block drop-shadow-[0_0_20px_rgba(0,201,168,0.3)]"
            >
              LIFESTYLE.
            </motion.span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-studio-soft/60 max-w-lg font-light leading-relaxed"
            >
              Full-stack creative execution for the next generation of <span className="text-white font-bold italic underline decoration-studio-purple">digital culture</span>. From visual identity to immersive experiences.
            </motion.p>
            
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 rounded-full border border-electric-teal/30 flex items-center justify-center"
              >
                <ArrowDown size={24} className="text-electric-teal" />
              </motion.div>
              <span className="text-xs uppercase font-black tracking-widest text-studio-medium">Explore our canvas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-solar-yellow py-6 overflow-hidden border-y-4 border-charcoal">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 text-charcoal font-black text-3xl uppercase italic"
        >
          <span>* Bold Vision *</span>
          <span>* Digital Craft *</span>
          <span>* Neo-Pop Aesthetics *</span>
          <span>* High Energy Design *</span>
          <span>* Bold Vision *</span>
          <span>* Digital Craft *</span>
          <span>* Neo-Pop Aesthetics *</span>
          <span>* High Energy Design *</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
