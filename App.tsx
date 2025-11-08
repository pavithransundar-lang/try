import React, { useState, useCallback, useEffect } from 'react';
import { STUDENT_NAME, TOTAL_TOKENS } from './constants';
import { getMotivationalMessage } from './services/geminiService';
import MoodScreen from './components/MoodScreen';
import CatchButterflyScreen from './components/CatchButterflyScreen';
import TokenBoard from './components/TokenBoard';
import MotivationalMessage from './components/MotivationalMessage';
import Controls from './components/Controls';
import RoyalJournalModal from './components/RoyalJournalModal';

type Screen = 'mood' | 'quest' | 'catch';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('mood');
  const [tokenCount, setTokenCount] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showJournal, setShowJournal] = useState(false);

  const isCompleted = tokenCount >= TOTAL_TOKENS;

  const fetchMotivationalMessage = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const message = await getMotivationalMessage();
      setMessages(prev => [...prev, message]);
    } catch (err) {
      setError('Failed to get a magical message. Please try again!');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleStartQuest = () => {
    setScreen('quest');
  };

  const handleGoCatch = () => {
    setScreen('catch');
  };

  const handleButterflyCaught = () => {
    setScreen('quest');
    if (isCompleted) return;

    const newTokenCount = tokenCount + 1;
    setTokenCount(newTokenCount);

    if (newTokenCount < TOTAL_TOKENS) {
      fetchMotivationalMessage();
    }
  };

  const handleReset = () => {
    setTokenCount(0);
    setMessages([]);
    setError(null);
    setIsLoading(false);
    setShowJournal(false);
    setScreen('mood');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'mood':
        return <MoodScreen onStart={handleStartQuest} />;
      case 'catch':
        return <CatchButterflyScreen onCatch={handleButterflyCaught} />;
      case 'quest':
      default:
        return (
          <>
            <main className="w-full max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-6 md:p-10 border border-white/50">
              <header className="text-center mb-6">
                <h1 className="text-4xl md:text-6xl font-bold text-pink-500" style={{fontFamily: "'Dancing Script', cursive"}}>
                  Celine's Royal Reading Quest
                </h1>
                <p className="text-md md:text-lg text-purple-500 mt-2">
                  Earn butterflies and travel to the magical castle!
                </p>
              </header>

              <section className="my-8">
                <TokenBoard tokenCount={tokenCount} />
              </section>

              <section className="my-8">
                <MotivationalMessage 
                  message={messages[messages.length - 1] || ''} 
                  isLoading={isLoading} 
                  isComplete={isCompleted}
                  hasStarted={tokenCount > 0 || messages.length > 0}
                />
                {error && <p className="text-center text-red-500 mt-4">{error}</p>}
              </section>

              <section>
                <Controls
                  onEarnToken={handleGoCatch}
                  onReset={handleReset}
                  isCompleted={isCompleted}
                  isLoading={isLoading}
                  onShowJournal={() => setShowJournal(true)}
                />
              </section>
            </main>
            <footer className="text-center mt-6 text-pink-500/80">
              <p>Created with love for a super reader!</p>
            </footer>
            <RoyalJournalModal 
              isOpen={showJournal} 
              onClose={() => setShowJournal(false)}
              messages={messages}
            />
          </>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEFFA] to-[#DEE8FF] text-gray-800 flex flex-col items-center justify-center p-4">
      {renderScreen()}
    </div>
  );
};

export default App;