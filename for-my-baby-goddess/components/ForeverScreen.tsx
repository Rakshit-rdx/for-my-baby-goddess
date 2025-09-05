import React, { useState, useEffect, useMemo } from 'react';
import Heart from './Heart';

interface AnimatedHeart {
  id: number;
  style: React.CSSProperties;
}

const ForeverScreen: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mount and trigger fade-in
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  const hearts: AnimatedHeart[] = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 8}s`,
      },
    })), []);

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-red-300 via-pink-400 to-purple-400 transition-opacity duration-[2000ms] ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Flying Hearts */}
      {hearts.map((heart) => (
        <Heart key={heart.id} style={heart.style} />
      ))}

      {/* Central Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-6xl md:text-8xl font-dancing-script animate-pulse-glow text-center drop-shadow-lg px-4">
          I love you soo much and forever
        </h1>
      </div>
    </div>
  );
};

export default ForeverScreen;
