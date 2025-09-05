import React, { useState, useEffect, useMemo } from 'react';
import Heart from './Heart';

interface WelcomeScreenProps {
  onFadeOutComplete: () => void;
}

interface AnimatedHeart {
  id: number;
  style: React.CSSProperties;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onFadeOutComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mount and trigger fade-in
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    
    // Set timer for fade out
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
      // After the fade-out animation (2s), call the completion handler
      setTimeout(onFadeOutComplete, 2000);
    }, 6000); // Start fading out after 6 seconds

    // Clean up timers on unmount
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [onFadeOutComplete]);

  const hearts: AnimatedHeart[] = useMemo(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`, // 5s to 10s duration
        animationDelay: `${Math.random() * 7}s`, // 0s to 7s delay
      },
    })), []);

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 transition-opacity duration-[2000ms] ease-in-out ${isMounted && !isFadingOut ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Flying Hearts */}
      {hearts.map((heart) => (
        <Heart key={heart.id} style={heart.style} />
      ))}

      {/* Central Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-6xl md:text-8xl font-dancing-script animate-pulse-glow text-center drop-shadow-lg px-4">
          For my baby goddess
        </h1>
      </div>
    </div>
  );
};

export default WelcomeScreen;
