import { useEffect, useState, useRef } from "react";

interface ContentBlockProps {
  heading: string;
  body: string;
  imageUrl?: string;
  reverse?: boolean;
}

const ContentBlock = ({ heading, body, imageUrl, reverse = false }: ContentBlockProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${reverse ? 'translate-x-10' : '-translate-x-10'}`
            } ${reverse ? 'lg:order-2' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {heading}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
              {body}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${reverse ? '-translate-x-10' : 'translate-x-10'}`
            } ${reverse ? 'lg:order-1' : ''}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={heading}
                  className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full h-[400px] bg-card rounded-lg shadow-2xl flex items-center justify-center border border-border">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl">📸</span>
                    </div>
                    <p className="text-muted-foreground">Image Placeholder</p>
                    <p className="text-sm text-muted-foreground mt-2">Replace with your image</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
