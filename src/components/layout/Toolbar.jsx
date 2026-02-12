import React from 'react';
import { Layout, FlaskConical, ShoppingBag, User, Briefcase, Zap, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Toolbar = ({ onNavigate, currentPath }) => {
  const { creativeMode, toggleCreativeMode } = useTheme();
  
  const navItems = [
    { name: 'Work', icon: Briefcase, path: '/' },
    { name: 'Lab', icon: FlaskConical, path: '/lab' },
    { name: 'Shop', icon: ShoppingBag, path: '/shop' },
    { name: 'About', icon: User, path: '/about' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-24 bg-charcoal border-r border-studio-purple flex flex-col items-center py-8 z-50">
      <div className="mb-12">
        <motion.div 
          onClick={() => onNavigate('/')}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 bg-electric-teal rounded flex items-center justify-center text-charcoal font-bold text-xl border-2 border-electric-teal shadow-[4px_4px_0px_#00C9A8] cursor-pointer"
        >
          eb
        </motion.div>
      </div>

      <nav className="flex-1 flex flex-col gap-8 items-center">
        {navItems.map((item) => (
          <motion.button
            key={item.name}
            onClick={() => onNavigate(item.path)}
            whileHover={{ scale: 1.1 }}
            className={`group flex flex-col items-center gap-1 transition-colors ${currentPath === item.path ? 'text-electric-teal' : 'text-studio-medium hover:text-electric-teal'}`}
          >
            <item.icon size={24} />
            <span className="text-[10px] uppercase tracking-tighter font-bold">{item.name}</span>
          </motion.button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-6">
        {/* Creative Mode Toggle */}
        <button 
          onClick={toggleCreativeMode}
          className={`p-3 rounded-lg transition-all ${creativeMode ? 'bg-solar-yellow text-charcoal shadow-[0_0_15px_#E5C349]' : 'text-studio-medium hover:text-solar-yellow'}`}
          title="Toggle Creative Mode"
        >
          <Terminal size={24} />
          <span className="sr-only">Creative Mode</span>
        </button>

        <motion.button 
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-electric-teal text-charcoal p-3 rounded-lg shadow-[0_0_20px_rgba(0,201,168,0.4)] hover:shadow-[0_0_30px_rgba(0,201,168,0.6)] transition-all flex flex-col items-center gap-1 group"
        >
          <Zap size={20} className="group-hover:animate-pulse" />
          <span className="text-[10px] uppercase font-black">Hire</span>
        </motion.button>
      </div>
    </aside>
  );
};

export default Toolbar;
