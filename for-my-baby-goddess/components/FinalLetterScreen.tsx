import React, { useState, useEffect, useMemo } from 'react';
import Heart from './Heart';

interface AnimatedHeart {
  id: number;
  style: React.CSSProperties;
}

interface FinalLetterScreenProps {
  onFinish: () => void;
}

const FinalLetterScreen: React.FC<FinalLetterScreenProps> = ({ onFinish }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mount and trigger fade-in
    const mountTimer = setTimeout(() => setIsMounted(true), 100);

    // After all animations are done (last one starts at 2.5s, lasts 1s), wait a bit then transition.
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 6000); // Wait 6 seconds before finishing

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const hearts: AnimatedHeart[] = useMemo(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationDelay: `${Math.random() * 7}s`,
      },
    })), []);

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 transition-opacity duration-[2000ms] ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Flying Hearts */}
      {hearts.map((heart) => (
        <Heart key={heart.id} style={heart.style} />
      ))}

      {/* Central Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white text-3xl md:text-5xl font-dancing-script text-center drop-shadow-lg px-8 max-w-3xl space-y-6">
            <p className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                I love you more than anything. I promise I’ll never leave you—I’ll stay with you, always.
            </p>
            <p className="opacity-0 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                You’re not just my girl, you’re my forever, my whole world.
            </p>
            <p className="opacity-0 animate-fade-in-up" style={{animationDelay: '2.5s'}}>
                Every moment with you is endless, and my heart is yours for eternity.
            </p>
        </div>
      </div>
    </div>
  );
};

export default FinalLetterScreen;