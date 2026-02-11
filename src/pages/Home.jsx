import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticBackground from '../components/ui/MagneticBackground';
import ProjectCard from '../components/ui/ProjectCard';

const Home = () => {
  const featuredProjects = [
    {
      title: "Cybernetic Echoes",
      category: "Visual Identity",
      tech: "Affinity + Midjourney",
      skeletonText: "grid-layout: 12-col; focus: neon-contrast;",
      image: "https://images.unsplash.com/photo-1614850523296-e8c041df43a6?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Liquid Motion UI",
      category: "Web Experience",
      tech: "React + R3F + Framer",
      skeletonText: "physics: magnetic; shaders: custom-warp;",
      image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Solar Branding",
      category: "Creative Strategy",
      tech: "AI-Augmented Logic",
      skeletonText: "concept: high-energy; mood: neo-pop;",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Studio Log",
      category: "Content Pillar",
      tech: "Markdown + Vite",
      skeletonText: "structure: masonry; logic: ai-search;",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="ml-20 md:ml-24 min-h-screen relative overflow-hidden bg-charcoal">
      <MagneticBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative z-10">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block px-3 py-1 bg-studio-purple text-electric-teal text-xs font-bold tracking-widest uppercase border border-electric-teal/20"
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
              className="text-xl md:text-2xl text-studio-soft/80 max-w-lg font-light leading-relaxed backdrop-blur-sm bg-charcoal/30 p-4 rounded-lg"
            >
              Full-stack creative execution for the next generation of <span className="text-white font-bold italic underline decoration-studio-purple">digital culture</span>. From visual identity to immersive experiences.
            </motion.p>
            
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 rounded-full border border-electric-teal/30 flex items-center justify-center bg-charcoal/50 backdrop-blur-md"
              >
                <ArrowDown size={24} className="text-electric-teal" />
              </motion.div>
              <span className="text-xs uppercase font-black tracking-widest text-studio-medium">Explore our canvas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-solar-yellow py-6 overflow-hidden border-y-4 border-charcoal relative z-20">
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

      {/* Featured Work Grid */}
      <section className="px-8 md:px-16 lg:px-24 py-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 text-white">The Lab <span className="text-studio-purple">/</span> 01</h2>
            <p className="text-studio-medium font-medium">Recent high-impact experiments and creative collisions.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-electric-teal text-electric-teal font-bold uppercase tracking-widest hover:bg-electric-teal hover:text-charcoal transition-all shadow-[4px_4px_0px_#00C9A8]"
          >
            View All Experiments
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
