import { CSSProperties } from 'react';

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyText = ({ children, className = '' }: ShinyTextProps) => {
  return (
    <span
      className={`inline-block animate-shiny bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
      style={{
        '--shiny-width': '200%',
      } as CSSProperties}
    >
      {children}
    </span>
  );
};

export default ShinyText;
