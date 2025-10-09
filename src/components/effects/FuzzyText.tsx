interface FuzzyTextProps {
  children: React.ReactNode;
  className?: string;
}

const FuzzyText = ({ children, className = '' }: FuzzyTextProps) => {
  return (
    <span className={`inline-block animate-fuzzy ${className}`}>
      {children}
    </span>
  );
};

export default FuzzyText;
