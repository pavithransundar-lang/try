
import React, { useState, useCallback, useRef } from 'react';
import { STUDENT_NAME, TOTAL_TOKENS } from './constants';
import { getMotivationalMessage } from './services/geminiService';
import MoodScreen from './components/MoodScreen';
import CatchButterflyScreen from './components/CatchButterflyScreen';
import TokenBoard from './components/TokenBoard';
import MotivationalMessage from './components/MotivationalMessage';
import Controls from './components/Controls';
import RoyalJournalModal from './components/RoyalJournalModal';
import QuestCompletionAnimation from './components/QuestCompletionAnimation';
import ChatBot from './components/ChatBot';
import ChatIcon from './components/icons/ChatIcon';
import FlyingButterflyAnimation from './components/FlyingButterflyAnimation';
import CastleCelebration from './components/CastleCelebration';

type Screen = 'mood' | 'quest' | 'catch';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('mood');
  const [tokenCount, setTokenCount] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showJournal, setShowJournal] = useState(false);
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const [showCastleCelebration, setShowCastleCelebration] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [flyingButterflyTarget, setFlyingButterflyTarget] = useState<number | null>(null);

  const tokenRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isCompleted = tokenCount >= TOTAL_TOKENS;

  const fetchMotivationalMessage = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const message = await getMotivationalMessage();
      setMessages(prev => [...prev, message]);
    } catch (err: any) {
      // FIX: Improved error handling for Gemini API calls.
      // This provides user-friendly feedback for rate limits and other errors,
      // while still giving positive reinforcement with a fallback message.
      const errorMessage = err?.message || err?.toString() || '';
      if (errorMessage.includes('429') || errorMessage.includes('RESOURCE_EXHAUSTED')) {
        setError("The magical message fairies are taking a short nap! Let's give them a moment.");
        setMessages(prev => [...prev, `You're doing wonderfully, ${STUDENT_NAME}! Keep going!`]);
      } else {
        setError('A little magical interference! Could not get a new message.');
        setMessages(prev => [...prev, `Amazing reading, ${STUDENT_NAME}! You've earned a butterfly!`]);
      }
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
  
  const handleFlyAnimationEnd = () => {
    setFlyingButterflyTarget(null);

    const newTokenCount = tokenCount + 1;
    setTokenCount(newTokenCount);

    if (newTokenCount === TOTAL_TOKENS) {
      // Start the butterfly swarm animation first for a fluid sequence.
      setShowCompletionAnimation(true);
    } else {
      fetchMotivationalMessage();
    }
  };

  const handleCompletionAnimationEnd = () => {
      // Once the swarm is done, hide it and show the final castle celebration.
      setShowCompletionAnimation(false);
      setShowCastleCelebration(true);
  };


  const handleButterflyCaught = () => {
    setScreen('quest');
    if (isCompleted || flyingButterflyTarget !== null) return;
    
    // Trigger the animation for the next token slot
    setFlyingButterflyTarget(tokenCount);
  };

  const handleReset = () => {
    setTokenCount(0);
    setMessages([]);
    setError(null);
    setIsLoading(false);
    setShowJournal(false);
    setShowChatBot(false);
    setFlyingButterflyTarget(null);
    setShowCompletionAnimation(false);
    setShowCastleCelebration(false);
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
                <h1 className="text-4xl md:text-6xl font-bold text-pink-700" style={{fontFamily: "'Dancing Script', cursive"}}>
                  Celine's Royal Reading Quest
                </h1>
                <p className="text-md md:text-lg text-purple-700 mt-2 font-sans">
                  Earn butterflies and travel to the magical castle!
                </p>
              </header>

              <section className="my-8">
                <TokenBoard tokenCount={tokenCount} tokenRefs={tokenRefs} />
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
                  isLoading={isLoading || flyingButterflyTarget !== null}
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
      {showCompletionAnimation && <QuestCompletionAnimation onAnimationEnd={handleCompletionAnimationEnd} />}
      
      {showCastleCelebration && (
        <CastleCelebration
            startElement={tokenRefs.current[TOTAL_TOKENS - 1]}
            onAnimationEnd={() => setShowCastleCelebration(false)}
        />
      )}

      {flyingButterflyTarget !== null && (
        <FlyingButterflyAnimation
            targetTokenIndex={flyingButterflyTarget}
            tokenRefs={tokenRefs}
            onAnimationEnd={handleFlyAnimationEnd}
        />
      )}

      {screen === 'quest' && !showChatBot && (
          <button
              onClick={() => setShowChatBot(true)}
              className="fixed bottom-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform z-40"
              aria-label="Open magical helper"
          >
              <ChatIcon className="w-8 h-8" />
          </button>
      )}
      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
    </div>
  );
};

export default App;
