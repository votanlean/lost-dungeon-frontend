import { useMediaQuery } from 'react-responsive';

const breakpoints = { mobile: 0, desktop: 960 };

const useIsMobile = () => {
  return useMediaQuery({ query: '(max-width: 960px)' });
};

export default useIsMobile;
