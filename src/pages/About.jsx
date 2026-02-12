import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stack = [
    { name: "Design", tools: ["Affinity Designer", "Midjourney", "Figma"], color: "bg-electric-teal", accent: "text-electric-teal" },
    { name: "Code", tools: ["React", "Three.js", "Tailwind"], color: "bg-solar-yellow", accent: "text-solar-yellow" },
    { name: "Strategy", tools: ["AI-Assisted", "Brand Culture", "Social First"], color: "bg-studio-medium", accent: "text-studio-medium" },
  ];

  return (
    <div className="ml-20 md:ml-24 min-h-screen bg-charcoal text-white relative overflow-hidden">
      <div className="dev-comment">// view: AboutView; maker: Esoe Bidje Fildine; loc: Yaoundé, CM;</div>
      
      {/* Bio Section */}
      <section className="px-8 md:px-16 lg:px-24 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-black uppercase leading-[0.85] mb-12 tracking-tighter italic">
              THE <span className="text-solar-yellow drop-shadow-[0_0_20px_rgba(229,195,73,0.3)]">MAKER</span> <br />
              <span className="text-white">BEHIND THE</span> <br />
              <span className="text-electric-teal drop-shadow-[0_0_20px_rgba(0,201,168,0.3)]">CANVAS</span>
            </h1>

            <div className="space-y-8 text-xl md:text-2xl text-studio-soft/80 leading-relaxed max-w-xl font-medium">
              <p className="backdrop-blur-md bg-white/5 p-8 rounded-[2.5rem] border border-white/5">
                I am <span className="text-white font-black underline decoration-solar-yellow decoration-4">Esoe Bidje Fildine</span>. A creative designer mixing low-budget grit with high-end technology.
              </p>
              <p className="px-8">
                Myebstudios is more than a design studio—it's a lifestyle. We build for the next generation of digital culture, right from the heart of Yaoundé, Cameroon.
              </p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mt-12 p-8 border-2 border-studio-purple rounded-[3rem] bg-studio-purple/20 inline-block shadow-2xl backdrop-blur-xl"
            >
               <h4 className="text-solar-yellow font-black uppercase text-xs tracking-[0.4em] mb-4">Location Spotlight</h4>
               <p className="text-white font-black text-3xl md:text-4xl uppercase italic tracking-tighter">Yaoundé, Cameroon 🇨🇲</p>
               <div className="flex items-center gap-4 mt-2">
                 <div className="w-2 h-2 rounded-full bg-electric-teal animate-pulse" />
                 <p className="text-studio-soft/40 text-sm uppercase font-mono tracking-widest">03° 52' N, 11° 31' E</p>
               </div>
            </motion.div>
          </motion.div>

          <div className="relative">
             {/* Tech Stack Map */}
            <div className="dev-comment">// module: TechStackMap; type: visual-web; transition: spring;</div>
            <h2 className="text-4xl font-black uppercase mb-16 text-electric-teal tracking-tighter italic text-center lg:text-left">The Tech Stack Map</h2>
            
            <div className="space-y-16">
              {stack.map((group, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-12 border-l-2 border-studio-purple/30 group"
                >
                  <div className={`absolute -left-[13px] top-0 w-6 h-6 rounded-full ${group.color} border-4 border-charcoal group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]`} />
                  <h3 className={`text-3xl font-black uppercase mb-6 italic tracking-tight ${group.accent}`}>{group.name}</h3>
                  <div className="flex flex-wrap gap-4">
                    {group.tools.map((tool, tIdx) => (
                      <motion.span 
                        key={tIdx} 
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="px-6 py-3 bg-charcoal border border-white/10 text-studio-soft text-sm font-black rounded-full uppercase tracking-widest shadow-lg hover:border-electric-teal/50 transition-all cursor-default backdrop-blur-sm"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Ticker at bottom of About */}
      <div className="w-full bg-studio-purple py-12 overflow-hidden border-y border-white/5 mt-20">
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 text-white/10 font-black text-8xl uppercase tracking-tighter italic"
        >
          <span>BUILD THE CULTURE *</span>
          <span>MIX THE GRIT *</span>
          <span>BUILD THE CULTURE *</span>
          <span>MIX THE GRIT *</span>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
