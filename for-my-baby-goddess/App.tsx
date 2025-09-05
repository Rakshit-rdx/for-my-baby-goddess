import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import KittyScreen from './components/KittyScreen';
import BookScreen from './components/BookScreen';
import FinalLetterScreen from './components/FinalLetterScreen';
import ForeverScreen from './components/ForeverScreen';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('welcome');

  const handleWelcomeFinish = () => {
    setCurrentView('kitty');
  };
  
  const handleYesClick = () => {
    setCurrentView('book');
  };

  const handleBookFinish = () => {
    setCurrentView('finalLetter');
  };

  const handleFinalLetterFinish = () => {
    setCurrentView('forever');
  };

  return (
    <div className="bg-black w-screen h-screen">
      {currentView === 'welcome' && <WelcomeScreen onFadeOutComplete={handleWelcomeFinish} />}
      {currentView === 'kitty' && <KittyScreen onYesClick={handleYesClick} />}
      {currentView === 'book' && <BookScreen onFinish={handleBookFinish} />}
      {currentView === 'finalLetter' && <FinalLetterScreen onFinish={handleFinalLetterFinish} />}
      {currentView === 'forever' && <ForeverScreen />}
    </div>
  );
};

export default App;