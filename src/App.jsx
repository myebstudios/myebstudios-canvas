import React from 'react';
import Toolbar from './components/layout/Toolbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-charcoal min-h-screen text-white font-sans selection:bg-electric-teal selection:text-studio-purple">
      <Toolbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
