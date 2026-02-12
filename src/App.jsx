import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Toolbar from './components/layout/Toolbar';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Shop from './pages/Shop';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import BlogDetail from './pages/BlogDetail';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    // Basic routing logic
    if (currentPath === '/') return <Home onNavigate={navigate} />;
    if (currentPath === '/lab') return <Lab onNavigate={navigate} />;
    if (currentPath === '/shop') return <Shop onNavigate={navigate} />;
    if (currentPath === '/about') return <About onNavigate={navigate} />;
    
    if (currentPath.startsWith('/projects/')) {
       // Mock project data for now
       return <ProjectDetail project={{ id: 'current', title: 'Cybernetic Echoes', category: 'Visual Identity', tech: 'Affinity + Midjourney', image: 'https://images.unsplash.com/photo-1614850523296-e8c041df43a6?q=80&w=800' }} />;
    }
    
    if (currentPath.startsWith('/blog/')) {
       return <BlogDetail post={{ id: 'current', title: 'AI + Design Workflows', category: 'Workflow', date: 'FEB 2026' }} />;
    }

    return <Home onNavigate={navigate} />;
  };

  return (
    <ThemeProvider>
      <div className="bg-charcoal min-h-screen text-white font-sans selection:bg-electric-teal selection:text-studio-purple">
        <Toolbar onNavigate={navigate} currentPath={currentPath} />
        <main>
          {renderPage()}
        </main>
        
        {/* Global Footer Credit */}
        <footer className="ml-20 md:ml-24 py-20 px-8 md:px-16 lg:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">MYEBSTUDIOS<span className="text-electric-teal">_</span>CANVAS</div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-studio-medium">Made in Cameroon with AI</div>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-studio-soft/40">
            <a href="#" className="hover:text-electric-teal transition-colors italic">Instagram</a>
            <a href="#" className="hover:text-electric-teal transition-colors italic">Twitter</a>
            <a href="#" className="hover:text-electric-teal transition-colors italic">Dribbble</a>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
