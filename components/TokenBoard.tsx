
import React from 'react';
import { QUEST_STEPS } from '../constants';
import ButterflyIcon from './icons/ButterflyIcon';
import CastleIcon from './icons/CastleIcon';
import TreeIcon from './icons/TreeIcon';
import DiamondIcon from './icons/DiamondIcon';
import KeyIcon from './icons/KeyIcon';

interface TokenBoardProps {
  tokenCount: number;
  tokenRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const ICONS = [
    (props: any) => <ButterflyIcon {...props} isFilled={true} />,
    (props: any) => <TreeIcon {...props} />,
    (props: any) => <DiamondIcon {...props} />,
    (props: any) => <KeyIcon {...props} />,
    (props: any) => <CastleIcon {...props} />,
];

const stepEmojis = ['🦋', '🌳', '💎', '🔑', '🏰'];

const TokenBoard: React.FC<TokenBoardProps> = ({ tokenCount, tokenRefs }) => {
  return (
    <>
      <div className="w-full mx-auto p-4">
        <div className="flex items-start justify-between">
          {QUEST_STEPS.map((step, index) => {
            const isCompleted = index < tokenCount;
            const isCurrent = index === tokenCount;
            const isNewlyCompleted = index === tokenCount - 1;
            const IconComponent = ICONS[index];

            return (
              <React.Fragment key={step.name}>
                <div 
                  ref={el => { if (tokenRefs.current) tokenRefs.current[index] = el; }}
                  className="flex flex-col items-center text-center w-20"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out
                    ${isCompleted ? 'bg-pink-300 shadow-lg scale-110' : 'bg-purple-200/50'}
                    ${isCurrent ? 'animate-pulse border-2 border-pink-400' : ''}
                    ${isNewlyCompleted ? 'animate-sparkle-pop' : ''}`}>
                      <div className="w-8 h-8 md:w-10 md:h-10 text-white">
                          <IconComponent isFilled={isCompleted} className={isCompleted ? 'text-white' : 'text-purple-400'}/>
                      </div>
                  </div>
                  <p className={`mt-2 text-xs md:text-sm font-semibold transition-colors duration-500 ${isCompleted || isCurrent ? 'text-purple-700' : 'text-gray-500'}`}>
                      {stepEmojis[index]} {step.name}
                  </p>
                </div>
                {index < QUEST_STEPS.length - 1 && (
                   <div className="flex-1 h-1 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mt-8 relative">
                     <div 
                       className="absolute top-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                       style={{ width: index < tokenCount ? '100%' : '0%' }}
                     />
                   </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes sparkle-pop {
          0% { transform: scale(0.5); opacity: 0; filter: brightness(2); }
          50% { transform: scale(1.2); opacity: 1; filter: brightness(1.2); }
          100% { transform: scale(1.1); opacity: 1; filter: brightness(1); }
        }
        .animate-sparkle-pop {
          animation: sparkle-pop 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default TokenBoard;
