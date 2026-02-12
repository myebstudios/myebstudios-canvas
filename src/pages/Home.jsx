import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import MagneticBackground from '../components/ui/MagneticBackground';
import FloatingObject from '../components/ui/FloatingObject';
import ProjectCard from '../components/ui/ProjectCard';
import ShopRibbon from '../components/ui/ShopRibbon';

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
      <div className="dev-comment">// view: HomeView; context: LandingHero; auth: guest;</div>
      <MagneticBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="dev-comment">// module: HeroSection; animation: staggerChildren;</div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-block px-4 py-1.5 bg-studio-purple/40 backdrop-blur-md text-electric-teal text-xs font-black tracking-widest uppercase border border-electric-teal/20 rounded-full"
            >
              Status: Building the Future
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8">
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white block"
              >
                WE DON'T
              </motion.span>
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-solar-yellow block drop-shadow-[0_0_30px_rgba(229,195,73,0.3)]"
              >
                DESIGN.
              </motion.span>
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white block"
              >
                WE BUILD
              </motion.span>
              <motion.span 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-electric-teal block drop-shadow-[0_0_30px_rgba(0,201,168,0.3)]"
              >
                CULTURE.
              </motion.span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-studio-soft/70 max-w-lg font-medium leading-relaxed backdrop-blur-md bg-charcoal/40 p-6 rounded-[2rem] border border-white/5"
              >
                Full-stack creative execution for the next generation of <span className="text-white font-black italic underline decoration-electric-teal decoration-4">digital culture</span>.
              </motion.p>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-16 h-16 rounded-full border-2 border-electric-teal flex items-center justify-center bg-charcoal/50 backdrop-blur-md group-hover:bg-electric-teal transition-all">
                  <ArrowDown size={32} className="text-electric-teal group-hover:text-charcoal transition-colors" />
                </div>
                <span className="text-xs uppercase font-black tracking-widest text-studio-medium group-hover:text-electric-teal transition-colors">Explore</span>
              </motion.button>
            </div>
          </div>

          {/* 3D Object Space */}
          <div className="hidden lg:block h-[600px] relative">
             <div className="dev-comment">// canvas: Hero3D; object: DistortedSphere;</div>
             <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingObject />
             </Canvas>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-solar-yellow py-8 overflow-hidden border-y-4 border-charcoal relative z-20 shadow-[0_0_40px_rgba(229,195,73,0.2)]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 text-charcoal font-black text-4xl uppercase italic tracking-tighter"
        >
          <span>* High Energy *</span>
          <span>* Digital Craft *</span>
          <span>* Neo-Pop *</span>
          <span>* Creative Lifestyle *</span>
          <span>* High Energy *</span>
          <span>* Digital Craft *</span>
          <span>* Neo-Pop *</span>
          <span>* Creative Lifestyle *</span>
        </motion.div>
      </div>

      <ShopRibbon />

      {/* Featured Work Grid */}
      <section className="px-8 md:px-16 lg:px-24 py-32 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="dev-comment">// module: ProjectGrid; count: {featuredProjects.length};</div>
            <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 text-white tracking-tighter italic">The Lab <span className="text-studio-purple">/</span> 01</h2>
            <p className="text-studio-medium font-bold text-lg max-w-md">Recent high-impact experiments and creative collisions.</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-electric-teal text-charcoal font-black uppercase tracking-[0.2em] rounded-full shadow-[0_10px_30px_rgba(0,201,168,0.3)] hover:shadow-[0_15px_40px_rgba(0,201,168,0.5)] transition-all"
          >
            All Experiments
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
