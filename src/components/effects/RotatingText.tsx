import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const RotatingText = ({ words, className = '', interval = 2000 }: RotatingTextProps) => {
  const [index, setIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView && !isStarted) {
      setIsStarted(true);
    }
  }, [isInView, isStarted]);

  useEffect(() => {
    if (!isStarted || isMobile) return;
    
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, isStarted, isMobile]);

  // On mobile, just show the first word without animation
  if (isMobile) {
    return (
      <span ref={ref} className={`inline-block ${className}`}>
        {words[0]}
      </span>
    );
  }

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        {isStarted && (
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {words[index]}
          </motion.span>
        )}
        {!isStarted && (
          <span className="inline-block">{words[0]}</span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
