import { useState, useEffect } from 'react';

const useMobileDetection = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < breakpoint : false);

    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }

    return () => {};
  }, [breakpoint]);

  return isMobile;
};

export default useMobileDetection;
