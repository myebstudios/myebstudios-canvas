import React from 'react';
import { motion } from 'framer-motion';

const Lab = () => {
  const experiments = [
    { title: "AI + Design Workflows", date: "FEB 2026", category: "Workflow", size: "tall" },
    { title: "Designing in Cameroon", date: "JAN 2026", category: "Culture", size: "short" },
    { title: "Weekly BTS #12", date: "FEB 2026", category: "BTS", size: "short" },
    { title: "Generative Warp Shaders", date: "DEC 2025", category: "Code", size: "tall" },
    { title: "Low-Budget High-End", date: "JAN 2026", category: "Strategy", size: "tall" },
    { title: "Neo-Pop Color Theory", date: "FEB 2026", category: "Design", size: "short" },
  ];

  return (
    <div className="ml-20 md:ml-24 min-h-screen p-8 md:p-16 lg:p-24 bg-charcoal text-white">
      <header className="mb-16">
        <div className="dev-comment">// view: LabView; layout: masonry;</div>
        <h1 className="text-6xl font-black text-electric-teal uppercase italic">The Lab</h1>
        <p className="text-studio-medium text-xl mt-4 max-w-xl italic">
          Deep Studio Purple boundaries. Electric Teal experiments. This is where we push the lifestyle.
        </p>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {experiments.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className={`break-inside-avoid bg-charcoal border-2 border-studio-purple p-8 rounded-2xl shadow-[4px_4px_0px_#39235E] hover:shadow-[6px_6px_0px_#00C9A8] transition-all relative overflow-hidden group ${exp.size === 'tall' ? 'h-[450px]' : 'h-[300px]'}`}
          >
            <div className="dev-comment">// experiment_id: {idx}; category: {exp.category};</div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-mono text-studio-soft/40">{exp.date}</span>
              <span className="text-[10px] font-black text-electric-teal uppercase bg-studio-purple/30 px-2 py-1 border border-electric-teal/20 tracking-widest">{exp.category}</span>
            </div>
            <h3 className="text-3xl font-black uppercase leading-tight group-hover:text-solar-yellow transition-colors">{exp.title}</h3>
            
            <div className="absolute bottom-8 right-8">
              <div className="w-12 h-12 bg-studio-purple rounded-full flex items-center justify-center text-electric-teal border border-electric-teal/30 group-hover:bg-electric-teal group-hover:text-charcoal transition-colors">
                <span className="font-bold">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Lab;
