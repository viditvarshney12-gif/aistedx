import { useEffect, useState } from 'react';

const TargetCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = target.closest('button, a, [role="button"]');
      
      if (isButton) {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-200"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping" />
        <div className="absolute inset-2 border-2 border-primary/70 rounded-full" />
        <div className="absolute inset-4 bg-primary/40 rounded-full" />
      </div>
    </div>
  );
};

export default TargetCursor;
