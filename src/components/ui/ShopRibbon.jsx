import React from 'react';
import { motion } from 'framer-motion';

const ShopRibbon = () => {
  const products = [
    { name: "Affinity Flyer Kit", price: "$29", category: "Assets" },
    { name: "Neo-Pop UI Pack", price: "$45", category: "UI Kit" },
    { name: "Studio Brush Set", price: "$15", category: "Affinity" },
    { name: "Brand Strategy Guide", price: "$99", category: "E-Book" },
  ];

  return (
    <section className="py-12 bg-charcoal border-y border-studio-purple overflow-hidden relative z-20">
      <div className="px-8 md:px-16 lg:px-24 mb-6">
        <h3 className="text-electric-teal font-black uppercase text-xs tracking-[0.4em]">Essential Assets</h3>
      </div>
      
      <div className="flex gap-8 px-8 md:px-16 lg:px-24 overflow-x-auto no-scrollbar pb-4">
        {products.map((product, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="min-w-[280px] bg-studio-purple/10 border border-studio-medium p-6 rounded-xl group relative overflow-hidden"
          >
            <div className="dev-comment">// component: ShopCard; product_id: {idx};</div>
            <span className="text-[10px] text-studio-soft/40 uppercase font-mono tracking-widest">{product.category}</span>
            <h4 className="text-xl font-bold text-white group-hover:text-solar-yellow transition-colors mt-1">{product.name}</h4>
            <div className="mt-4 flex justify-between items-center">
              <span className="bg-solar-yellow text-charcoal px-3 py-1 font-black text-sm rounded shadow-[2px_2px_0px_#FBEAFF]">
                {product.price}
              </span>
              <button className="text-electric-teal font-bold text-xs uppercase hover:underline">Get Access</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopRibbon;
