import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Toolbar from './components/layout/Toolbar';
import Home from './pages/Home';
import Lab from './pages/Lab';
import Shop from './pages/Shop';
import About from './pages/About';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/': return <Home />;
      case '/lab': return <Lab />;
      case '/shop': return <Shop />;
      case '/about': return <About />;
      default: return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-charcoal min-h-screen text-white font-sans selection:bg-electric-teal selection:text-studio-purple">
        <Toolbar onNavigate={navigate} currentPath={currentPath} />
        <main>
          {renderPage()}
        </main>
        
        {/* Global Footer Credit */}
        <footer className="ml-20 md:ml-24 py-12 px-8 border-t border-studio-purple flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-studio-medium">
          <div>Made in Cameroon with AI</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-electric-teal">Instagram</a>
            <a href="#" className="hover:text-electric-teal">Twitter</a>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
