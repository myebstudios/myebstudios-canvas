import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="group relative bg-charcoal border-2 border-studio-purple overflow-hidden h-[400px] cursor-pointer shadow-[4px_4px_0px_#39235E] hover:shadow-[8px_8px_0px_#00C9A8] transition-shadow duration-300"
    >
      {/* Skeleton / BTS Layer (The Base) */}
      <div className="absolute inset-0 bg-studio-purple/20 p-6 flex flex-col justify-center items-center text-center opacity-50">
        <div className="w-full h-full border border-dashed border-studio-medium flex flex-col items-center justify-center p-4">
          <code className="text-electric-teal text-xs mb-2">{project.tech}</code>
          <p className="text-studio-soft/40 text-[10px] uppercase font-mono tracking-tighter">
            {project.skeletonText}
          </p>
        </div>
      </div>

      {/* Final Render Layer (The Peel) */}
      <motion.div 
        className="absolute inset-0 z-10"
        initial={{ y: 0 }}
        whileHover={{ y: -340 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative w-full h-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-black text-electric-teal uppercase bg-charcoal/80 px-2 py-1 mb-2 inline-block tracking-widest border border-electric-teal/30">
              {project.category}
            </span>
            <h3 className="text-2xl font-black text-white uppercase group-hover:text-solar-yellow transition-colors leading-none">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Bottom Action Label (Revealed when peeled) */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-0">
        <span className="text-electric-teal font-black text-xs uppercase tracking-[0.3em] animate-pulse">
          View Skeleton BTS
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
