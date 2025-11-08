
import React, { useState, useCallback } from 'react';
import { STUDENT_NAME, TOTAL_TOKENS } from './constants';
import { getMotivationalMessage } from './services/geminiService';
import TokenBoard from './components/TokenBoard';
import MotivationalMessage from './components/MotivationalMessage';
import Controls from './components/Controls';

const App: React.FC = () => {
  const [tokenCount, setTokenCount] = useState(0);
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isCompleted = tokenCount >= TOTAL_TOKENS;

  const fetchMotivationalMessage = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const message = await getMotivationalMessage();
      setMotivationalMessage(message);
    } catch (err) {
      setError('Failed to get a magical message. Please try again!');
      setMotivationalMessage(''); // Clear previous message on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleEarnToken = () => {
    if (isCompleted) return;

    const newTokenCount = tokenCount + 1;
    setTokenCount(newTokenCount);

    if (newTokenCount < TOTAL_TOKENS) {
      fetchMotivationalMessage();
    } else {
        // Handle completion state
        setMotivationalMessage(''); // Clear last message for completion message
    }
  };

  const handleReset = () => {
    setTokenCount(0);
    setMotivationalMessage('');
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 text-gray-800 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-4xl mx-auto bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
        <header className="text-center mb-6">
          <h1 className="font-title text-4xl md:text-6xl text-purple-700">
            Princess {STUDENT_NAME}'s Reading Adventure
          </h1>
          <p className="text-lg md:text-xl text-pink-600 mt-2">
            Earn butterfly tokens to reach the royal castle!
          </p>
        </header>

        <section className="my-8">
          <TokenBoard tokenCount={tokenCount} />
        </section>

        <section className="my-8">
          <MotivationalMessage 
            message={motivationalMessage} 
            isLoading={isLoading} 
            isComplete={isCompleted}
          />
           {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        </section>

        <section>
          <Controls
            onEarnToken={handleEarnToken}
            onReset={handleReset}
            isCompleted={isCompleted}
            isLoading={isLoading}
          />
        </section>
      </main>
      <footer className="text-center mt-6 text-purple-600/70">
        <p>Built with magic and code for the wonderful Princess {STUDENT_NAME}.</p>
      </footer>
    </div>
  );
};

export default App;
