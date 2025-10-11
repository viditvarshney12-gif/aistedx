import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FuzzyText from '@/components/effects/FuzzyText';

const CircularGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const items = Array.from({ length: 6 }, (_, i) => i);
  const radius = 280;

  return (
    <div ref={containerRef} className="relative h-[700px] sm:h-[800px] flex items-center justify-center">
      <motion.div 
        style={{ rotate }}
        className="relative w-full h-full max-w-[700px] max-h-[700px]"
      >
        {items.map((_, index) => {
          const angle = (index / items.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover-lift"
              style={{
                x,
                y,
              }}
              onClick={() => navigate('/speakers')}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-primary-glow to-primary-dark border-4 border-primary/50 shadow-2xl hover:shadow-primary/60 transition-all duration-300 flex items-center justify-center">
                <span className="text-6xl sm:text-7xl md:text-8xl">🎤</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <FuzzyText className="gradient-text text-glow">Coming Soon</FuzzyText>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CircularGallery;
