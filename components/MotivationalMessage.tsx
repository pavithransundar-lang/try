

import React, { useEffect, useRef } from 'react';
import SparkleIcon from './icons/SparkleIcon';
import { playSound, sounds } from '../services/audioService';

interface MotivationalMessageProps {
  message: string;
  isLoading: boolean;
  isComplete: boolean;
  hasStarted: boolean;
}

const MotivationalMessage: React.FC<MotivationalMessageProps> = ({ message, isLoading, isComplete, hasStarted }) => {
  // FIX: The useRef hook was incorrectly typed. When no initial value is provided,
  // `useRef`'s `current` property is `undefined`. The type must be `string | undefined`
  // to reflect this, which resolves the TypeScript error.
  // FIX: The useRef hook requires an initial value. Providing `undefined` explicitly
  // satisfies this requirement for older TypeScript/React type definitions.
  const prevMessageRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    // Play sound only when a new message arrives, not on the initial render or completion.
    if (message && message !== prevMessageRef.current && !isComplete && !isLoading) {
      playSound(sounds.newMessage);
    }
    // Update the ref to the current message for the next render.
    prevMessageRef.current = message;
  }, [message, isComplete, isLoading]);

  let content;
  
  const containerClasses = "min-h-[70px] w-full max-w-2xl mx-auto flex items-center justify-center text-center p-4 rounded-full shadow-inner border border-white/30 text-purple-800";

  if (isLoading) {
    content = (
        <div className={`${containerClasses} bg-purple-100/50`}>
            <div className="flex items-center justify-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                <span className="italic text-purple-700">Thinking of a magical message...</span>
            </div>
        </div>
    );
  } else if (isComplete) {
    content = (
        <div className={`${containerClasses} bg-yellow-100/80`}>
            <p className="text-lg font-semibold text-amber-800">🎉 Hooray! You've completed the quest and reached the Princess Castle! 🎉</p>
        </div>
    );
  } else if (message) {
    content = (
      <div className={`${containerClasses} bg-white/50 relative`}>
        <SparkleIcon className="absolute top-1 left-5 w-6 h-6 animate-pulse" />
        <p className="text-md italic px-12">"{message}"</p>
        <SparkleIcon className="absolute bottom-1 right-5 w-6 h-6 animate-pulse [animation-delay:-0.5s]" />
      </div>
    );
  } else {
    content = (
      <div className={`${containerClasses} bg-white/50`}>
         <p className="text-md italic text-purple-600">"Let's start our reading quest, Princess Celine!"</p>
      </div>
    );
  }

  return <div className="h-[80px] flex items-center justify-center">{content}</div>;
};

export default MotivationalMessage;