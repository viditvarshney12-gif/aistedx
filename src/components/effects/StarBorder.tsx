import { ReactNode } from 'react';

interface StarBorderProps {
  children: ReactNode;
  className?: string;
}

const StarBorder = ({ children, className = '' }: StarBorderProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl opacity-75 blur-sm animate-pulse" />
      <div className="relative bg-background rounded-3xl">
        {children}
      </div>
    </div>
  );
};

export default StarBorder;
