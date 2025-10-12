const LightRays = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 w-1 h-[200%] origin-top"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 23, 68, 0.3), transparent)',
            transform: `rotate(${i * 30}deg) translateX(-50%)`,
            animation: `ray-pulse ${3 + i * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LightRays;
