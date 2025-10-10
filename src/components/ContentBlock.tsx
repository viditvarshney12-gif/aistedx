import { useEffect, useState } from "react";

interface ContentBlockProps {
  heading: string;
  body: string;
  imageUrl?: string;
  reverse?: boolean;
}

const ContentBlock = ({ heading, body, imageUrl, reverse = false }: ContentBlockProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`content-block-${heading}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [heading]);

  return (
    <section 
      id={`content-block-${heading}`}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div 
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${reverse ? 'translate-x-10' : '-translate-x-10'}`
            } ${reverse ? 'lg:order-2' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight hover:text-primary transition-colors duration-300">
              {heading}
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
      <div className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed whitespace-pre-line font-medium">
        {body}
      </div>
          </div>

          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${reverse ? '-translate-x-10' : 'translate-x-10'}`
            } ${reverse ? 'lg:order-1' : ''}`}
          >
            <div className="relative group overflow-hidden rounded-lg shadow-2xl hover-lift">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={heading}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-card to-secondary flex items-center justify-center">
                  <p className="text-muted-foreground text-sm sm:text-base">Image Placeholder</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-4 sm:top-8 -right-4 sm:-right-8 w-full h-full border-2 border-primary/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
