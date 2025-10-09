import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  children: string;
  className?: string;
  scrambleSpeed?: number;
}

const ScrambleText = ({ children, className = '', scrambleSpeed = 50 }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(children);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        children
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return children[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= children.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [children, scrambleSpeed]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;
