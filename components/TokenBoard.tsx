
import React from 'react';
import { TOTAL_TOKENS } from '../constants';
import ButterflyIcon from './icons/ButterflyIcon';
import CastleIcon from './icons/CastleIcon';

interface TokenBoardProps {
  tokenCount: number;
}

const TokenBoard: React.FC<TokenBoardProps> = ({ tokenCount }) => {
  const isComplete = tokenCount >= TOTAL_TOKENS;

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6">
      <div className="flex items-center justify-between space-x-2">
        {Array.from({ length: TOTAL_TOKENS }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 hover:scale-110">
              <ButterflyIcon isFilled={index < tokenCount} className="w-full h-full" />
            </div>
            {index < TOTAL_TOKENS - 1 && (
              <div className="flex-1 h-1 bg-white/50 rounded-full" />
            )}
          </React.Fragment>
        ))}
        <div 
          className={`w-20 h-20 md:w-24 md:h-24 ml-2 transition-all duration-700 ease-in-out ${isComplete ? 'scale-125' : 'scale-100'}`}
        >
          <CastleIcon className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default TokenBoard;
