import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useMobileDetection } from '@/hooks/use-mobile-detection';

interface ScrollFloatProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

const ScrollFloat = ({ children, className = '', offset = 50 }: ScrollFloatProps) => {
  const isMobile = useMobileDetection();
  const ref = useRef<HTMLDivElement>(null);

  if (isMobile) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollFloat;
