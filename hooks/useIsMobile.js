import { useState, useEffect } from 'react';

const useIsMobile = () => {
  // Initialize state with false to be server-side render friendly
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set state correctly after first render
    setIsMobile(window.innerWidth < 1440);

    // Create resize event listener
    const handleResize = () => setIsMobile(window.innerWidth < 1440);
    window.addEventListener('resize', handleResize);
    
    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return isMobile;
};

export default useIsMobile;
