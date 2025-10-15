import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useMobileDetection } from '@/hooks/use-mobile-detection';

interface RotatingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const RotatingText = ({ words, className = '', interval = 2000 }: RotatingTextProps) => {
  const [index, setIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const isMobile = useMobileDetection();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isStarted) {
      setIsStarted(true);
    }
  }, [isInView, isStarted]);

  useEffect(() => {
    if (!isStarted) return;
    
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, isStarted]);

  if (isMobile) {
    return (
      <span ref={ref} className={`inline-block ${className}`}>
        <span className="inline-block">{words[0]}</span>
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
