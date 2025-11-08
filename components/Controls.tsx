
import React from 'react';
import JournalIcon from './icons/JournalIcon';

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
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold rounded-full shadow-lg hover:from-pink-600 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 ease-in-out disabled:from-pink-300 disabled:to-yellow-200 disabled:scale-100 disabled:cursor-not-allowed flex items-center space-x-2 text-lg"
          >
            <span>Catch a Butterfly</span>
            <span className="text-2xl">🦋</span>
          </button>
          <button
            onClick={onShowJournal}
            className="px-6 py-3 bg-violet-400 text-white font-bold rounded-full shadow-lg hover:bg-violet-500 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg flex items-center space-x-2"
            aria-label="Open Royal Journal"
          >
            <span>Royal Journal</span>
            <JournalIcon className="w-5 h-5" />
          </button>
          <button
              onClick={onReset}
              className="px-4 py-2 bg-gray-100 text-gray-600 font-bold rounded-full shadow-md hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out"
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
