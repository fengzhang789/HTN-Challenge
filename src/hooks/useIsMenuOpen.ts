import { useState, useEffect } from "react";

// useIsMenuOpen() is a custom React hook that tracks whether the mobile menu is open or not.
const useIsMenuOpen = (): boolean => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);  
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return isMenuOpen;
}


export default useIsMenuOpen;