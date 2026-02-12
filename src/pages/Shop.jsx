import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  const [activeTab, setActiveTab] = useState('assets');

  const assets = [
    { name: "Affinity Flyer Kit", price: "$29", category: "Templates", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=400" },
    { name: "Neo-Pop UI Kit", price: "$45", category: "UI/UX", image: "https://images.unsplash.com/photo-1541462608141-ad60397d5830?q=80&w=400" },
    { name: "Creative Brushes", price: "$15", category: "Brushes", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400" },
    { name: "Social Media Pack", price: "$25", category: "Marketing", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400" },
  ];

  const services = [
    { name: "Brand Identity", desc: "From Concept to Culture.", price: "From $500" },
    { name: "Product Development", desc: "AI-Enhanced UI/UX and Code.", price: "From $1500" },
    { name: "Motion Design", desc: "High-Energy Visuals for Social.", price: "From $300" },
  ];

  return (
    <div className="ml-20 md:ml-24 min-h-screen p-8 md:p-16 lg:p-24 bg-charcoal text-white">
      <header className="mb-16">
        <div className="dev-comment">// view: ShopView; tabs: assets, services;</div>
        <h1 className="text-6xl font-black text-solar-yellow uppercase italic">Studio Shop</h1>
        <p className="text-studio-medium text-xl mt-4 max-w-xl italic">
          Premium digital tools for creators and strategic services for clients.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex gap-12 mb-16 border-b border-studio-purple">
        <button 
          onClick={() => setActiveTab('assets')}
          className={`pb-4 text-2xl font-black uppercase tracking-widest transition-all relative ${activeTab === 'assets' ? 'text-electric-teal' : 'text-studio-medium hover:text-studio-soft'}`}
        >
          Digital Assets
          {activeTab === 'assets' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-electric-teal shadow-[0_0_10px_#00C9A8]" />}
        </button>
        <button 
          onClick={() => setActiveTab('services')}
          className={`pb-4 text-2xl font-black uppercase tracking-widest transition-all relative ${activeTab === 'services' ? 'text-electric-teal' : 'text-studio-medium hover:text-studio-soft'}`}
        >
          Creative Services
          {activeTab === 'services' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-electric-teal shadow-[0_0_10px_#00C9A8]" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'assets' ? (
          <motion.div 
            key="assets"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {assets.map((item, idx) => (
              <div key={idx} className="bg-charcoal border-2 border-studio-purple rounded-2xl overflow-hidden group shadow-[4px_4px_0px_#39235E] hover:shadow-[6px_6px_0px_#00C9A8] transition-all">
                <div className="h-48 overflow-hidden relative">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute top-4 right-4 bg-solar-yellow text-charcoal px-3 py-1 font-black text-sm rounded">{item.price}</div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-studio-soft/40 uppercase font-mono tracking-widest">{item.category}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-electric-teal transition-colors">{item.name}</h3>
                  <button className="w-full mt-6 py-3 bg-studio-purple/30 border border-studio-medium text-studio-soft font-black uppercase text-xs tracking-[0.2em] hover:bg-electric-teal hover:text-charcoal transition-all">Buy Now</button>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="services"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-8"
          >
            {services.map((item, idx) => (
              <div key={idx} className="bg-charcoal border-2 border-studio-purple p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center group shadow-[4px_4px_0px_#39235E] hover:shadow-[8px_8px_0px_#00C9A8] transition-all">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white group-hover:text-electric-teal transition-colors">{item.name}</h3>
                  <p className="text-studio-soft/60 text-xl mt-2">{item.desc}</p>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                  <span className="text-solar-yellow font-black text-2xl italic block mb-4">{item.price}</span>
                  <button className="px-8 py-3 bg-electric-teal text-charcoal font-black uppercase text-sm tracking-widest shadow-[4px_4px_0px_#FBEAFF] hover:translate-x-1 hover:-translate-y-1 transition-transform">Request Quote</button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
