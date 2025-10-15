import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  compact?: boolean;
}

const Hero = ({ title, subtitle, description, imageUrl, compact = false }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative ${compact ? 'h-[40vh] min-h-[300px]' : 'h-[100svh] min-h-[600px]'} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-background via-background to-card" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(356 100% 52% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(356 100% 52% / 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {subtitle && (
            <p className="text-primary text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-4 sm:mb-6 animate-fade-in">
              {subtitle}
            </p>
          )}
          <h1 className={`font-bold text-foreground mb-4 sm:mb-6 animate-fade-in-up ${compact ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'}`}>
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
    </div>
  );
};

export default Hero;
