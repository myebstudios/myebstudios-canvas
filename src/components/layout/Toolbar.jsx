import React from 'react';
import { Layout, FlaskConical, ShoppingBag, User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Toolbar = () => {
  const navItems = [
    { name: 'Work', icon: Briefcase, path: '/' },
    { name: 'Lab', icon: FlaskConical, path: '/lab' },
    { name: 'Shop', icon: ShoppingBag, path: '/shop' },
    { name: 'About', icon: User, path: '/about' },
  ];

  return (
    <motion.div 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 p-4 bg-studio-purple/80 backdrop-blur-md rounded-2xl border border-studio-medium shadow-2xl z-50"
    >
      <div className="w-10 h-10 bg-electric-teal rounded-lg flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform">
        <span className="text-studio-purple font-bold text-xl">eb</span>
      </div>
      
      {navItems.map((item) => (
        <button
          key={item.name}
          className="group relative p-3 text-studio-soft hover:text-electric-teal transition-colors"
          title={item.name}
        >
          <item.icon size={24} />
          <span className="absolute left-16 bg-studio-purple px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-studio-medium">
            {item.name}
          </span>
        </button>
      ))}

      <div className="mt-4 pt-4 border-t border-studio-medium">
        <button className="p-3 bg-electric-teal text-studio-purple rounded-full shadow-[0_0_15px_rgba(0,245,212,0.5)] hover:scale-110 transition-transform" title="Hire Me">
          <span className="sr-only">Hire Me</span>
          <Layout size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default Toolbar;
