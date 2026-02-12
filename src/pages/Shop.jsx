import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Zap, ArrowUpRight } from 'lucide-react';

const Shop = () => {
  const [activeTab, setActiveTab] = useState('assets');

  const assets = [
    { name: "Affinity Flyer Kit", price: "$29", category: "Templates", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=600" },
    { name: "Neo-Pop UI Kit", price: "$45", category: "UI/UX", image: "https://images.unsplash.com/photo-1541462608141-ad60397d5830?q=80&w=600" },
    { name: "Creative Brushes", price: "$15", category: "Brushes", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600" },
    { name: "Social Media Pack", price: "$25", category: "Marketing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600" },
  ];

  const services = [
    { name: "Brand Identity", desc: "Building the visual language for next-gen digital culture.", price: "From $500", icon: Zap },
    { name: "Product Development", desc: "AI-enhanced code and design systems for builders.", price: "From $1500", icon: ShoppingBag },
    { name: "Motion Design", desc: "High-energy animation for the scrolling generation.", price: "From $300", icon: ArrowUpRight },
  ];

  return (
    <div className="ml-20 md:ml-24 min-h-screen bg-charcoal text-white overflow-x-hidden">
      {/* Header */}
      <header className="px-8 md:px-16 lg:px-24 pt-32 pb-12">
        <div className="dev-comment">// view: ShopView; tabs: assets, services; theme: modern-rounded;</div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-9xl font-black text-solar-yellow uppercase italic tracking-tighter leading-none"
        >
          Studio Shop
        </motion.h1>
        <p className="text-studio-soft/60 text-2xl md:text-3xl mt-8 max-w-xl font-medium leading-tight">
          Premium digital tools for <span className="text-white">creators</span> and strategic services for builders.
        </p>
      </header>

      {/* Modern Tabs */}
      <div className="px-8 md:px-16 lg:px-24 mb-16">
        <div className="flex gap-4 p-2 bg-white/5 backdrop-blur-xl border border-white/5 rounded-full w-fit">
          {['assets', 'services'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all relative z-10 ${activeTab === tab ? 'text-charcoal' : 'text-studio-soft/60 hover:text-white'}`}
            >
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab" 
                  className={`absolute inset-0 rounded-full z-[-1] shadow-2xl ${tab === 'assets' ? 'bg-electric-teal shadow-electric-teal/40' : 'bg-solar-yellow shadow-solar-yellow/40'}`} 
                />
              )}
              {tab === 'assets' ? 'Digital Assets' : 'Creative Services'}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'assets' ? (
          <motion.div 
            key="assets"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-32"
          >
            {assets.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="bg-charcoal border border-white/5 rounded-[3rem] overflow-hidden group shadow-2xl hover:border-electric-teal/30 transition-all flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                   <div className="absolute top-6 right-6 bg-charcoal/80 backdrop-blur-md text-solar-yellow px-4 py-1.5 font-black text-xs rounded-full border border-solar-yellow/30">{item.price}</div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-studio-soft/30 uppercase font-mono tracking-[0.2em]">{item.category}</span>
                    <h3 className="text-2xl font-black mt-2 leading-tight group-hover:text-electric-teal transition-colors italic uppercase">{item.name}</h3>
                  </div>
                  <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl hover:bg-electric-teal hover:text-charcoal hover:border-electric-teal transition-all">Buy Now</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="px-8 md:px-16 lg:px-24 space-y-10 pb-32 max-w-5xl"
          >
            {services.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 10 }}
                className="bg-studio-purple/5 border border-white/5 p-12 rounded-[4rem] flex flex-col md:flex-row justify-between items-center group shadow-2xl hover:border-solar-yellow/40 transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-10">
                  <div className="w-20 h-20 bg-charcoal rounded-[2rem] flex items-center justify-center border border-white/10 group-hover:border-solar-yellow/30 transition-all">
                    <item.icon size={32} className="text-solar-yellow group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black uppercase text-white group-hover:text-solar-yellow transition-colors italic tracking-tighter">{item.name}</h3>
                    <p className="text-studio-soft/60 text-xl mt-3 max-w-md font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className="mt-8 md:mt-0 text-center md:text-right">
                  <span className="text-electric-teal font-black text-3xl italic block mb-6 tracking-tighter">{item.price}</span>
                  <button className="px-10 py-4 bg-solar-yellow text-charcoal font-black uppercase text-xs tracking-[0.3em] rounded-full shadow-2xl hover:translate-x-1 hover:-translate-y-1 transition-transform">Request Quote</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
