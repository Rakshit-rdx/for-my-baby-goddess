import React, { useState, useEffect } from 'react';

// Define a type for the button's position state
type ButtonPosition = {
  position: 'relative' | 'absolute';
  top?: string;
  left?: string;
  transform?: string;
};

interface KittyScreenProps {
  onYesClick: () => void;
}

const KittyScreen: React.FC<KittyScreenProps> = ({ onYesClick }) => {
  const [isMounted, setIsMounted] = useState(false);
  // State to hold the dynamic style of the "No" button
  const [noButtonPosition, setNoButtonPosition] = useState<ButtonPosition>({ position: 'relative' });

  useEffect(() => {
    // Mount and trigger fade-in
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  // This function will now move the "No" button
  const handleNoClick = () => {
    // Generate random positions within the viewport (10% to 90% to avoid edges)
    const newTop = `${Math.random() * 80 + 10}%`;
    const newLeft = `${Math.random() * 80 + 10}%`;
    
    setNoButtonPosition({
      position: 'absolute',
      top: newTop,
      left: newLeft,
      transform: 'translate(-50%, -50%)', // Center the button on the new coordinates
    });
  };

  return (
    <div
      // The parent needs to be relative for absolute positioning of the child
      className={`relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-200 via-purple-200 to-red-200 transition-opacity duration-1000 ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      aria-live="polite"
    >
      {/* Cute Kitty SVG */}
      <div className="text-gray-700 w-48 h-48 mb-8" aria-label="A cute kitty making a heart with its paws">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title>Cute cat making a heart shape with its paws</title>
              {/* Head */}
              <circle cx="50" cy="45" r="25" fill="#f2d5c7"/>
              {/* Ears */}
              <path d="M 30 25 A 5 5 0 0 1 20 20 L 25 35 Z" fill="#f2d5c7"/>
              <path d="M 70 25 A 5 5 0 0 0 80 20 L 75 35 Z" fill="#f2d5c7"/>
              <path d="M 28 27 A 5 5 0 0 1 23 23 L 26 33 Z" fill="#e0ac9d"/>
              <path d="M 72 27 A 5 5 0 0 0 77 23 L 74 33 Z" fill="#e0ac9d"/>
              {/* Eyes */}
              <circle cx="42" cy="42" r="2.5" fill="#333"/>
              <circle cx="58" cy="42" r="2.5" fill="#333"/>
              {/* Nose & Mouth */}
              <path d="M 50 48 C 48 52, 52 52, 50 48 Z" fill="#f08080"/>
              <path d="M 50 50 C 45 55, 45 45, 40 48" stroke="#333" strokeWidth="0.5" fill="none" strokeLinecap="round"/>
              <path d="M 50 50 C 55 55, 55 45, 60 48" stroke="#333" strokeWidth="0.5" fill="none" strokeLinecap="round"/>
              {/* Paws making a heart - now animated */}
              <g className="animate-wave-left" style={{ transformOrigin: '40px 80px' }}>
                <path d="M 35 70 C 20 85, 20 100, 40 90 Q 50 80, 50 65" fill="#f2d5c7"/>
                <path d="M 38 75 C 30 85, 30 95, 42 88" fill="#e0ac9d"/>
              </g>
              <g className="animate-wave-right" style={{ transformOrigin: '60px 80px' }}>
                <path d="M 65 70 C 80 85, 80 100, 60 90 Q 50 80, 50 65" fill="#f2d5c7"/>
                <path d="M 62 75 C 70 85, 70 95, 58 88" fill="#e0ac9d"/>
              </g>
            </g>
        </svg>
      </div>

      <h2 className="text-4xl md:text-5xl text-gray-800 font-dancing-script text-center mb-10 drop-shadow-sm">
        something is coming... are you ready???
      </h2>
      
      <div className="flex space-x-6 items-center">
        <button
          onClick={onYesClick}
          className="px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300 text-lg"
          aria-label="Yes, I am ready"
        >
          Yes
        </button>
        <button
          onClick={handleNoClick}
          style={noButtonPosition as React.CSSProperties} // Cast state to CSSProperties for the style prop
          className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300 text-lg"
          aria-label="No, I am not ready"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default KittyScreen;
