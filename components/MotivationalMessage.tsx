
import React from 'react';
import SparkleIcon from './icons/SparkleIcon';

interface MotivationalMessageProps {
  message: string;
  isLoading: boolean;
  isComplete: boolean;
}

const MotivationalMessage: React.FC<MotivationalMessageProps> = ({ message, isLoading, isComplete }) => {
  let content;
  if (isLoading) {
    content = (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-5 h-5 border-2 border-pink-300 border-t-transparent rounded-full animate-spin"></div>
        <span className="italic">Generating a magical message...</span>
      </div>
    );
  } else if (isComplete) {
    content = (
        <div className="flex items-center space-x-3">
            <SparkleIcon className="w-8 h-8 text-yellow-300" />
            <p className="text-xl font-semibold">You did it! You reached the princess castle! Hooray!</p>
            <SparkleIcon className="w-8 h-8 text-yellow-300" />
        </div>
    );
  } else if (message) {
    content = (
      <div className="flex items-center space-x-3">
        <SparkleIcon className="w-6 h-6 text-yellow-300 flex-shrink-0" />
        <p className="text-lg italic">"{message}"</p>
      </div>
    );
  } else {
    content = (
      <p className="text-lg text-purple-200">Complete a reading task to earn your first butterfly!</p>
    );
  }

  return (
    <div className="min-h-[60px] w-full max-w-xl mx-auto flex items-center justify-center text-center p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 text-purple-900">
      {content}
    </div>
  );
};

export default MotivationalMessage;
