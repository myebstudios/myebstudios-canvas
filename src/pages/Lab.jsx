import React from 'react';
import { motion } from 'framer-motion';

const Lab = () => {
  const experiments = [
    { title: "AI + Design Workflows", date: "FEB 2026", category: "Workflow", size: "tall", tags: ["Automation", "Vision"] },
    { title: "Designing in Cameroon", date: "JAN 2026", category: "Culture", size: "short", tags: ["Global", "Art"] },
    { title: "Weekly BTS #12", date: "FEB 2026", category: "BTS", size: "short", tags: ["Process", "Vlog"] },
    { title: "Generative Warp Shaders", date: "DEC 2025", category: "Code", size: "tall", tags: ["R3F", "GLSL"] },
    { title: "Low-Budget High-End", date: "JAN 2026", category: "Strategy", size: "tall", tags: ["Grit", "Luxury"] },
    { title: "Neo-Pop Color Theory", date: "FEB 2026", category: "Design", size: "short", tags: ["Vibrant", "Pop"] },
  ];

  return (
    <div className="ml-20 md:ml-24 min-h-screen bg-charcoal text-white overflow-x-hidden">
      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 pt-32 pb-16">
        <div className="dev-comment">// view: LabView; layout: masonry-rounded; auth: admin;</div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black text-electric-teal uppercase italic tracking-tighter leading-none"
        >
          The Lab
        </motion.h1>
        <p className="text-studio-soft/60 text-2xl md:text-3xl mt-8 max-w-2xl font-medium leading-tight">
          Deep Studio Purple boundaries. <span className="text-solar-yellow">Electric Teal</span> experiments. This is where we push the lifestyle.
        </p>
      </section>

      {/* Masonry Grid */}
      <section className="px-8 md:px-16 lg:px-24 pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {experiments.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`break-inside-avoid bg-studio-purple/5 border border-white/5 p-10 rounded-[3rem] shadow-2xl hover:border-electric-teal/40 transition-all relative overflow-hidden group flex flex-col justify-between ${exp.size === 'tall' ? 'h-[550px]' : 'h-[350px]'} backdrop-blur-md`}
            >
              <div className="dev-comment">// experiment_id: {idx}; category: {exp.category}; status: experimental;</div>
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs font-mono text-studio-soft/30 tracking-[0.2em]">{exp.date}</span>
                  <span className="text-[10px] font-black text-electric-teal uppercase bg-charcoal/80 px-4 py-1.5 rounded-full border border-electric-teal/20 tracking-widest">{exp.category}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter group-hover:text-solar-yellow transition-colors italic">{exp.title}</h3>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[9px] uppercase font-black tracking-widest text-studio-soft/40 border border-white/5 px-3 py-1 rounded-full">#{tag}</span>
                ))}
              </div>

              <div className="absolute bottom-10 right-10">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: -45 }}
                  className="w-16 h-16 bg-charcoal rounded-[1.5rem] flex items-center justify-center text-electric-teal border border-electric-teal/30 group-hover:bg-electric-teal group-hover:text-charcoal transition-all shadow-xl"
                >
                  <span className="text-2xl font-bold">→</span>
                </motion.div>
              </div>

              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-teal opacity-[0.02] rounded-full blur-[80px] group-hover:opacity-[0.05] transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lab;
