import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// const breakpoints = { mobile: 0, desktop: 960 };

const useIsMobile = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return isClient ? isMobile : false;
};

export default useIsMobile;
