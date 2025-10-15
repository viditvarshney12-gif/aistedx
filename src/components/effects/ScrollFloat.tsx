import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode, useState, useEffect } from 'react';

interface ScrollFloatProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

const ScrollFloat = ({ children, className = '', offset = 50 }: ScrollFloatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Keep animations enabled on all devices

  // Always initialize scroll hooks to keep hook order stable
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
};

export default ScrollFloat;
