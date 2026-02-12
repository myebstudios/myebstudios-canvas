import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [creativeMode, setCreativeMode] = useState(false);

  const toggleCreativeMode = () => setCreativeMode(!creativeMode);

  return (
    <ThemeContext.Provider value={{ creativeMode, toggleCreativeMode }}>
      <div className={creativeMode ? 'creative-mode' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
