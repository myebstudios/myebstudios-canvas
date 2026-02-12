import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="group relative bg-charcoal border border-white/5 overflow-hidden h-[500px] cursor-pointer rounded-[3rem] shadow-2xl hover:border-electric-teal/50 transition-all duration-500"
    >
      {/* Skeleton / BTS Layer (The Base) */}
      <div className="absolute inset-0 bg-studio-purple/10 p-10 flex flex-col justify-center items-center text-center opacity-40">
        <div className="w-full h-full border-2 border-dashed border-studio-medium/30 rounded-[2.5rem] flex flex-col items-center justify-center p-8">
          <code className="text-electric-teal text-sm mb-4 font-mono font-bold bg-charcoal/80 px-4 py-2 rounded-full">{project.tech}</code>
          <p className="text-studio-soft/60 text-xs uppercase font-mono tracking-widest leading-relaxed max-w-xs">
            {project.skeletonText}
          </p>
        </div>
      </div>

      {/* Final Render Layer (The Peel) */}
      <motion.div 
        className="absolute inset-0 z-10"
        initial={{ y: 0 }}
        whileHover={{ y: -420 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="relative w-full h-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10 right-10">
            <motion.span 
              className="text-[10px] font-black text-electric-teal uppercase bg-charcoal/90 px-4 py-1.5 mb-4 inline-block tracking-[0.3em] border border-electric-teal/40 rounded-full"
            >
              {project.category}
            </motion.span>
            <h3 className="text-4xl font-black text-white uppercase group-hover:text-solar-yellow transition-colors leading-[0.9] tracking-tighter italic">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Bottom Action Label (Revealed when peeled) */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-0">
        <span className="text-electric-teal font-black text-xs uppercase tracking-[0.5em] animate-pulse">
          View Skeleton BTS
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
