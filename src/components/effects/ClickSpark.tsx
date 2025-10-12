import { useEffect, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
}

const ClickSpark = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSpark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setSparks((prev) => [...prev, newSpark]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: spark.x,
            top: spark.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <div
                key={i}
                className="absolute w-1 h-3 bg-gradient-to-t from-primary via-primary-glow to-transparent animate-spark-fade"
                style={{
                  transform: `rotate(${angle}deg) translateY(-20px)`,
                  animationDelay: `${i * 0.02}s`,
                }}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};

export default ClickSpark;
