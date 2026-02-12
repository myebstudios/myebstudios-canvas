import React from 'react';
import { motion } from 'framer-motion';

const BlogDetail = ({ post }) => {
  if (!post) return null;

  return (
    <div className="ml-20 md:ml-24 min-h-screen bg-charcoal text-white pt-32 pb-20 px-8 md:px-16 lg:px-24">
      <div className="dev-comment">// view: BlogDetail; post_id: {post.id}; type: technical-log;</div>
      
      <article className="max-w-4xl mx-auto">
        <header className="mb-20">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-6 mb-8"
           >
              <span className="text-[10px] font-black uppercase text-electric-teal bg-studio-purple/40 px-4 py-1.5 rounded-full border border-electric-teal/20 tracking-[0.3em]">{post.category}</span>
              <span className="text-studio-soft/30 font-mono text-xs tracking-widest">{post.date}</span>
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-6xl md:text-8xl font-black uppercase italic italic leading-[0.9] tracking-tighter"
           >
              {post.title}
           </motion.h1>
        </header>

        <section className="space-y-12 text-xl text-studio-soft/80 leading-relaxed font-medium">
           <p className="text-2xl text-white italic border-l-4 border-solar-yellow pl-10 py-4 bg-white/5 rounded-r-[2rem]">
              The following log details the high-energy intersection of AI and design workflows specifically for the Cameroonian creative ecosystem.
           </p>
           
           <div className="dev-comment">// block: content_body; status: drafted;</div>
           
           <p>
              Designing in Cameroon requires a specific kind of grit. We are often operating in environments with limited resources, but the cultural richness is unlimited. This experiment focuses on how to leverage high-end tech like generative AI to amplify that grit.
           </p>

           <div className="h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl my-20">
              <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800" className="w-full h-full object-cover grayscale opacity-50" alt="Process Work" />
           </div>

           <h2 className="text-4xl font-black uppercase italic text-electric-teal tracking-tighter">The Workflow 01</h2>
           
           <p>
              We start with the core concept. AI serves as our "Creative Collision" engine. We feed it the Cameroonian grit—the colors of Yaoundé, the energy of the markets—and let it collide with high-tech Neo-Pop aesthetics.
           </p>
        </section>

        <footer className="mt-32 pt-16 border-t border-white/5">
           <div className="flex justify-between items-center bg-studio-purple/10 p-10 rounded-[3rem] backdrop-blur-md">
              <div>
                 <h4 className="text-solar-yellow font-black uppercase text-[10px] tracking-widest mb-2 italic">Written by</h4>
                 <p className="text-white font-black text-2xl uppercase italic">Fildine</p>
              </div>
              <button className="px-8 py-4 bg-charcoal border border-white/10 rounded-full text-xs font-black uppercase tracking-widest hover:border-electric-teal transition-all">Share Log</button>
           </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetail;
