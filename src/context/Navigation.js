import React, { createContext, useState, useEffect } from 'react'

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    function handler() {
      setCurrentPath(prev => window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    const cleanup = () => {
      window.removeEventListener('popstate', handler);
    };
    
    return cleanup;
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(prev => to);
  };


  return (
    <NavigationContext.Provider value={{currentPath, navigate}} >
      {children}
    </NavigationContext.Provider>
  );
};

export {NavigationProvider};
export default NavigationContext;