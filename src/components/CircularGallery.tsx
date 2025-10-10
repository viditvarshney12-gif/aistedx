import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FuzzyText from './effects/FuzzyText';

const CircularGallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  const speakers = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: 'Speaker',
  }));

  return (
    <div ref={ref} className="relative h-[600px] sm:h-[700px] md:h-[800px] flex items-center justify-center py-20">
      <motion.div 
        style={{ rotate }}
        className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
      >
        {speakers.map((speaker, index) => {
          const angle = (index * 360) / speakers.length;
          const radius = 150; // Radius for mobile
          const radiusSm = 200; // Radius for tablet
          const radiusMd = 250; // Radius for desktop
          
          return (
            <motion.div
              key={speaker.id}
              className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              style={{
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                x: [
                  `calc(-50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`,
                  `calc(-50% + ${Math.cos((angle * Math.PI) / 180) * radiusSm}px)`,
                  `calc(-50% + ${Math.cos((angle * Math.PI) / 180) * radiusMd}px)`,
                ],
                y: [
                  `calc(-50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
                  `calc(-50% + ${Math.sin((angle * Math.PI) / 180) * radiusSm}px)`,
                  `calc(-50% + ${Math.sin((angle * Math.PI) / 180) * radiusMd}px)`,
                ],
              }}
              transition={{
                x: { duration: 0 },
                y: { duration: 0 },
              }}
            >
              <motion.div
                style={{ rotate: useTransform(rotate, (r) => -r) }}
                className="w-full h-full rounded-full bg-card border-2 border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300 flex items-center justify-center hover-glow"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
            <FuzzyText>Coming Soon</FuzzyText>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">Our Speakers</p>
        </div>
      </div>
    </div>
  );
};

export default CircularGallery;
