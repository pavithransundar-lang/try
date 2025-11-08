
import React from 'react';

interface ControlsProps {
  onEarnToken: () => void;
  onReset: () => void;
  isCompleted: boolean;
  isLoading: boolean;
}

const Controls: React.FC<ControlsProps> = ({ onEarnToken, onReset, isCompleted, isLoading }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {!isCompleted ? (
        <button
          onClick={onEarnToken}
          disabled={isLoading}
          className="px-8 py-4 bg-pink-400 text-white font-bold rounded-full shadow-lg hover:bg-pink-500 transform hover:scale-105 transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:scale-100 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <span>Earn a Butterfly Token</span>
        </button>
      ) : (
        <button
          onClick={onReset}
          className="px-8 py-4 bg-green-400 text-white font-bold rounded-full shadow-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Start a New Adventure!
        </button>
      )}
    </div>
  );
};

export default Controls;
