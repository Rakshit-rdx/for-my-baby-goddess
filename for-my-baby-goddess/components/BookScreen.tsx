import React, { useState, useEffect, useMemo } from 'react';

// A small, reusable component for the kiss mark SVG
const KissMark = ({ style }: { style: React.CSSProperties }) => (
    <div style={style} className="absolute text-pink-300">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" fill="currentColor" className="w-12 h-12">
            <path d="M25.2,1.2C14.7-2.4,5.2,4.2,3,13.1c-1,4,1.4,8.1,5.2,9.3C13.9,24,19.3,21,22.7,16c0,0,0.5,3.3,0.6,3.4 c1.2,5.2,6.7,8.2,11.8,6.8c5.1-1.4,8-6.8,6.8-11.8C40.6,9.1,35.7,5.8,25.2,1.2z"/>
        </svg>
    </div>
);

const PageContent: React.FC<{ page: number }> = ({ page }) => {
    switch(page) {
        case 1:
            return (
                <div className="text-center">
                    <h1 className="font-dancing-script text-4xl sm:text-5xl md:text-6xl text-rose-600 drop-shadow-sm mb-6">
                        From the bottom of my heart, I love you sooo much
                    </h1>
                    <p className="text-stone-700 text-base md:text-xl font-serif">
                        I can do anything for you if you promise to stay with me forever.
                    </p>
                </div>
            );
        case 2:
            return (
                <div className="text-left">
                    <p className="text-stone-700 text-lg md:text-xl font-serif mb-4">
                        My Baby Goddess,
                    </p>
                    <p className="text-stone-700 text-lg md:text-xl font-serif">
                        I don’t even know where to start because words will never be enough for what I feel for you. Still, I’m writing this because you deserve to know just how much you mean to me.
                    </p>
                </div>
            );
        case 3:
            return (
                <div className="text-left">
                    <p className="text-stone-700 text-lg md:text-xl font-serif">
                        You’re not just the love of my life—you’re the most beautiful part of it. Every moment with you feels like a gift I never deserved but will always cherish. If I could live a thousand lifetimes, I’d still choose you in every single one without hesitation.
                    </p>
                </div>
            );
        case 4:
            return (
                <div className="text-left">
                    <p className="text-stone-700 text-lg md:text-xl font-serif">
                        Forever isn’t just a word to me—it’s a promise. No matter how many storms we face, I’ll be the one holding your hand. I won’t walk away, I won’t let go. My love doesn’t have an ending, because you are my home, always and forever.
                    </p>
                </div>
            );
        case 5:
            return (
                <div className="text-left">
                    <p className="text-stone-700 text-lg md:text-xl font-serif mb-4">
                        My Baby Goddess,
                    </p>
                    <p className="text-stone-700 text-lg md:text-xl font-serif mb-4">
                        If there’s one thing I want you to always remember, it’s this: I’m never leaving. Not today, not tomorrow, not ever. My love for you doesn’t have an ending—it only grows, stronger and deeper with every heartbeat.
                    </p>
                    <p className="text-stone-700 text-lg md:text-xl font-serif mb-4">
                        You are my forever. My safe place. My miracle. The one I’ll stand beside in every storm and celebrate with in every sunshine.
                    </p>
                     <p className="text-stone-700 text-lg md:text-xl font-serif mb-4">
                        No matter where life takes us, no matter how much time passes, I’ll always be yours. Completely, endlessly, and without question.
                    </p>
                    <p className="text-stone-700 text-lg md:text-xl font-serif">
                        Forever and always,
                    </p>
                </div>
            );
        default:
            return <div className="text-stone-700 text-xl font-serif"></div>; // Blank for now
    }
};

interface BookScreenProps {
    onFinish: () => void;
}

const BookScreen: React.FC<BookScreenProps> = ({ onFinish }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTurningPage, setIsTurningPage] = useState(false);
  const totalPages = 5;

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(mountTimer);
  }, []);

  const handlePageTurn = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || isTurningPage) return;
    
    setIsTurningPage(true);
    setTimeout(() => {
        setCurrentPage(newPage);
        setIsTurningPage(false);
    }, 500); // Match this with transition duration
  };

  const backgroundHearts = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      style: {
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`,
        opacity: Math.random() * 0.1 + 0.05,
      },
    })), []);

    const backgroundKisses = useMemo(() =>
        Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            style: {
                top: `${Math.random() * 85}%`,
                left: `${Math.random() * 85}%`,
                transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.4 + 0.6})`,
                opacity: Math.random() * 0.15 + 0.05,
            },
        })), []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-red-200 via-pink-200 to-rose-300">
      <div
        className={`w-full max-w-4xl h-[80vh] bg-stone-100 rounded-lg shadow-2xl flex transition-all duration-1000 ease-in-out transform-gpu ${isMounted ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-6'}`}
        style={{ perspective: '2000px' }}
      >
        {/* Left Page (Pounding Heart) */}
        <div className="relative flex-1 bg-stone-50 rounded-l-lg border-r-2 border-stone-200 shadow-inner-lg flex items-center justify-center p-4 overflow-hidden">
            {backgroundKisses.map(kiss => <KissMark key={kiss.id} style={kiss.style} />)}
            <div className="relative z-10 animate-pound flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-80 h-80 md:w-96 md:h-96 text-red-400 drop-shadow-lg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <p className="absolute font-dancing-script text-white text-3xl text-center w-64 break-words drop-shadow-sm">
                    i love you sooooooooooooooooooooooooooooooooooooooooooooooooo much
                </p>
            </div>
        </div>
        
        {/* Right Page (Content) */}
        <div className="relative flex-1 bg-stone-50 rounded-r-lg p-8 md:p-12 flex flex-col justify-center items-center overflow-hidden">
            {backgroundHearts.map(heart => (
                <div key={heart.id} className="absolute text-red-300" style={heart.style}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                </div>
            ))}
            
            <div className={`relative z-10 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${isTurningPage ? 'opacity-0' : 'opacity-100'}`}>
                <PageContent page={currentPage} />
            </div>

            {/* Navigation Buttons */}
            {currentPage > 1 && (
                <button
                    onClick={() => handlePageTurn(currentPage - 1)}
                    className="absolute left-4 bottom-4 z-20 p-2 rounded-full text-stone-500 hover:bg-stone-200 transition-colors"
                    aria-label="Previous Page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
            )}
            {currentPage < totalPages && (
                 <button
                    onClick={() => handlePageTurn(currentPage + 1)}
                    className="absolute right-4 bottom-4 z-20 p-2 rounded-full text-stone-500 hover:bg-stone-200 transition-colors"
                    aria-label="Next Page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            )}
        </div>
      </div>
      
      {/* Final "Next" button on the last page */}
      {currentPage === totalPages && (
          <button
              onClick={onFinish}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-300 text-lg animate-pulse"
              aria-label="Next"
          >
              Next
          </button>
      )}
    </div>
  );
};

export default BookScreen;