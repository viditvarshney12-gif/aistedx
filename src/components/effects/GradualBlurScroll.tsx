import { useRef, useEffect, useState } from 'react';

interface GradualBlurScrollProps {
  children: React.ReactNode;
  className?: string;
}

const GradualBlurScroll = ({ children, className = '' }: GradualBlurScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
      const maxDistance = windowHeight / 2;
      const blurAmount = Math.min((distanceFromCenter / maxDistance) * 8, 8);
      setBlur(blurAmount);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        filter: `blur(${blur}px)`,
        transition: 'filter 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default GradualBlurScroll;
