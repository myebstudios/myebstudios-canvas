import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <div className="ml-20 md:ml-24 min-h-screen bg-charcoal text-white pt-32 pb-20 px-8 md:px-16 lg:px-24">
      <div className="dev-comment">// view: ProjectDetail; project_id: {project.id}; type: editorial-case-study;</div>
      
      {/* Project Header */}
      <header className="max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="max-w-3xl">
            <span className="text-electric-teal font-black uppercase text-xs tracking-[0.4em] mb-6 block">{project.category}</span>
            <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter drop-shadow-2xl">
              {project.title}
            </h1>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-8 rounded-[3rem] min-w-[280px]">
            <h4 className="text-solar-yellow font-black uppercase text-[10px] tracking-widest mb-4 italic">The Tool Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(' + ').map((tool, i) => (
                <span key={i} className="px-4 py-1.5 bg-charcoal border border-white/10 rounded-full text-xs font-bold uppercase tracking-tighter">{tool}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Image / Interaction */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[600px] md:h-[800px] rounded-[4rem] overflow-hidden group shadow-2xl"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          
          {/* Progress Slider Mockup Interface */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center bg-charcoal/40 backdrop-blur-md border border-white/5 p-6 rounded-[2.5rem]">
             <div className="flex items-center gap-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-studio-soft/40 italic">Slide for BTS</span>
                <div className="w-64 h-1 bg-white/10 rounded-full relative overflow-hidden">
                   <motion.div 
                     animate={{ x: [-256, 256] }}
                     transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                     className="absolute inset-0 bg-electric-teal shadow-[0_0_10px_#00C9A8]" 
                   />
                </div>
             </div>
             <span className="text-electric-teal font-black uppercase text-xs tracking-widest">Final Render 01</span>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-4xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-20">
         <div>
            <h2 className="text-4xl font-black uppercase italic text-solar-yellow mb-8 tracking-tighter leading-none">The Story of <br /> Transformation</h2>
            <p className="text-xl text-studio-soft/60 leading-relaxed font-medium">
               This project represents a fusion of high-energy pop aesthetics and technical precision. We started with low-budget grit and scaled it into a high-end cultural moment.
            </p>
         </div>
         <div className="space-y-8">
            <div className="p-8 border-l-4 border-electric-teal bg-white/5 rounded-r-[2.5rem]">
               <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2 italic">The Prompt / Logic</h4>
               <p className="text-studio-soft/40 font-mono text-sm leading-tight italic">
                  // process: iteration_32; <br />
                  // goal: maximize_visual_impact; <br />
                  // result: success;
               </p>
            </div>
            <p className="text-lg text-studio-soft/40 italic px-8">
               "We don't just design. We build the lifestyle."
            </p>
         </div>
      </section>

      {/* Conversion Section */}
      <section className="max-w-7xl mx-auto">
         <motion.div 
           whileHover={{ scale: 1.02 }}
           className="bg-studio-purple p-16 md:p-24 rounded-[5rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12 shadow-2xl relative overflow-hidden"
         >
            <div className="relative z-10">
               <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-none mb-6">Build your own <br /> version.</h3>
               <p className="text-xl text-studio-soft/60 font-medium">Get the [Template Name] assets used in this project.</p>
            </div>
            <button className="px-12 py-6 bg-solar-yellow text-charcoal font-black uppercase tracking-[0.2em] rounded-full shadow-2xl hover:translate-x-1 hover:-translate-y-1 transition-transform relative z-10">View in Shop</button>
            
            {/* Background Blob */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-teal opacity-10 rounded-full blur-[100px]" />
         </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetail;
