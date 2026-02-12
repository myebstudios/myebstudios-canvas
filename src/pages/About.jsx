import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stack = [
    { name: "Design", tools: ["Affinity Designer", "Midjourney", "Figma"], color: "bg-electric-teal" },
    { name: "Code", tools: ["React", "Three.js", "Tailwind"], color: "bg-solar-yellow" },
    { name: "Strategy", tools: ["AI-Assisted", "Brand Culture", "Social First"], color: "bg-studio-medium" },
  ];

  return (
    <div className="ml-20 md:ml-24 min-h-screen p-8 md:p-16 lg:p-24 bg-charcoal text-white relative overflow-hidden">
      <div className="dev-comment">// view: AboutView; maker: Esoe Bidje Fildine; loc: Yaoundé, CM;</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <section>
          <motion.h1 
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="text-7xl font-black uppercase text-white leading-none mb-12"
          >
            THE <span className="text-solar-yellow">MAKER</span> <br />
            BEHIND THE <br />
            <span className="text-electric-teal">CANVAS</span>
          </motion.h1>

          <div className="space-y-6 text-xl text-studio-soft/80 leading-relaxed max-w-xl">
            <p>
              I am <span className="text-white font-black underline decoration-solar-yellow decoration-4">Esoe Bidje Fildine</span>. A creative designer mixing low-budget grit with high-end technology.
            </p>
            <p>
              Myebstudios is more than a design studio—it's a lifestyle. We build for the next generation of digital culture, right from the heart of Yaoundé, Cameroon.
            </p>
          </div>

          <div className="mt-12 p-6 border-2 border-studio-purple rounded-2xl bg-studio-purple/10 inline-block shadow-[4px_4px_0px_#39235E]">
             <h4 className="text-solar-yellow font-black uppercase text-xs tracking-[0.3em] mb-4">Location Spotlight</h4>
             <p className="text-white font-bold text-2xl uppercase italic">Yaoundé, Cameroon 🇨🇲</p>
             <p className="text-studio-soft/40 text-sm mt-1 uppercase font-mono tracking-tighter">03° 52' N, 11° 31' E</p>
          </div>
        </section>

        <section className="relative">
          <div className="dev-comment">// module: TechStackMap; type: visual-web;</div>
          <h2 className="text-3xl font-black uppercase mb-12 text-electric-teal tracking-widest italic">The Tech Stack Map</h2>
          
          <div className="space-y-12">
            {stack.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-4 border-studio-purple"
              >
                <div className={`absolute -left-[14px] top-0 w-6 h-6 rounded-full ${group.color} border-4 border-charcoal`} />
                <h3 className="text-2xl font-black uppercase text-white mb-4 italic">{group.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="px-4 py-2 bg-charcoal border border-studio-medium text-studio-soft text-sm font-bold rounded-lg uppercase tracking-wider group-hover:bg-studio-purple transition-all">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
