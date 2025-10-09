import { useEffect, useState } from 'react';

interface DecryptTextProps {
  children: string;
  className?: string;
}

const DecryptText = ({ children, className = '' }: DecryptTextProps) => {
  const [text, setText] = useState(children);
  const chars = '█▓▒░!@#$%^&*()_+-={}[]|:;<>?,./';

  useEffect(() => {
    let iteration = 0;
    const maxIterations = children.length * 2;
    
    const interval = setInterval(() => {
      setText(
        children
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 2) {
              return children[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        setText(children);
        clearInterval(interval);
      }

      iteration++;
    }, 30);

    return () => clearInterval(interval);
  }, [children]);

  return <span className={className}>{text}</span>;
};

export default DecryptText;
