import React, { createContext, useContext, useState } from 'react';

const OffcanvasContext = createContext();

export const OffcanvasProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <OffcanvasContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </OffcanvasContext.Provider>
  );
};

export const useOffcanvas = () => {
  const context = useContext(OffcanvasContext);
  if (!context) {
    throw new Error('useOffcanvas must be used within an OffcanvasProvider');
  }
  return context;
};
