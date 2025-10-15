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
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">TEDxAhlconIntlSchool</h1>
          <p className="text-muted-foreground mb-6">Loading content...</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdkzkzO1tpNbt7-L6QMA7eW7tB745nKK0Sxcl0ByUpyaUnv4w/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Buy Tickets Now
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileSafeWrapper;
