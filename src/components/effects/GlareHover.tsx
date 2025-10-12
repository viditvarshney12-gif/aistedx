import { useRef, useState, MouseEvent } from 'react';

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
}

const GlareHover = ({ children, className = '' }: GlareHoverProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 23, 68, 0.6) 0%, transparent 50%)`,
        }}
      />
      {children}
    </div>
  );
};

export default GlareHover;
