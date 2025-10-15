import { ReactNode, useState, useEffect } from 'react';

interface MobileSafeWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const MobileSafeWrapper = ({ children, fallback }: MobileSafeWrapperProps) => {
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Error boundary for mobile
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Mobile error caught:', error);
      if (isMobile) {
        setHasError(true);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [isMobile]);

  if (hasError && isMobile) {
    console.warn("MobileSafeWrapper suppressed an error, but continuing to render.");
    return <>{children}</>;
  }

  return <>{children}</>;
};

export default MobileSafeWrapper;
