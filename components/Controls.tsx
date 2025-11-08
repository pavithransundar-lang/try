import React from 'react';

interface ControlsProps {
  onEarnToken: () => void;
  onReset: () => void;
  isCompleted: boolean;
  isLoading: boolean;
  onShowJournal: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onEarnToken, onReset, isCompleted, isLoading, onShowJournal }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {!isCompleted ? (
         <>
          <button
            onClick={onEarnToken}
            disabled={isLoading}
            className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 ease-in-out disabled:bg-pink-300 disabled:scale-100 disabled:cursor-not-allowed flex items-center space-x-2 text-lg"
          >
            <span>Catch a Butterfly</span>
            <span className="text-2xl">🦋</span>
          </button>
          <button
            onClick={onShowJournal}
            className="px-6 py-3 bg-purple-400 text-white font-bold rounded-full shadow-lg hover:bg-purple-500 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
            aria-label="Open Royal Journal"
          >
            Royal Journal 📖
          </button>
          <button
              onClick={onReset}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded-full shadow-md hover:bg-gray-400 transform hover:scale-105 transition-all duration-300 ease-in-out"
              aria-label="Reset"
          >
              Reset
          </button>
         </>
      ) : (
        <button
          onClick={onReset}
          className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
        >
          Start a New Quest! 🎉
        </button>
      )}
    </div>
  );
};

export default Controls;