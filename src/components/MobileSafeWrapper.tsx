import { ReactNode, useState, useEffect } from 'react';

interface MobileSafeWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const MobileSafeWrapper = ({ children, fallback }: MobileSafeWrapperProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Error boundary for mobile - just log errors, don't prevent rendering
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.warn('Mobile error caught but continuing to render:', error);
      // Don't prevent rendering - just log and continue
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [isMobile]);

  // Always render children - no error pages on mobile
  return <>{children}</>;
};

export default MobileSafeWrapper;
