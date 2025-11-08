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
    (props: any) => <ButterflyIcon {...props} />,
    (props: any) => <TreeIcon {...props} />,
    (props: any) => <DiamondIcon {...props} />,
    (props: any) => <KeyIcon {...props} />,
    (props: any) => <CastleIcon {...props} />,
];

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
                  className="flex flex-col items-center text-center w-20 relative"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out relative
                    ${isCompleted ? 'bg-white shadow-lg scale-110' : 'bg-purple-200/50'}
                    ${isCurrent ? 'animate-glow-ring' : ''}
                    ${isNewlyCompleted ? 'animate-sparkle-pop' : ''}`}>
                      {isCompleted && <div className="absolute inset-0 rounded-full bg-violet-200/50 animate-ping-slow" />}
                      <div className="w-12 h-12 md:w-16 md:h-16">
                          <IconComponent isFilled={isCompleted} />
                      </div>
                  </div>
                  <p className={`mt-2 text-xs md:text-sm font-semibold transition-colors duration-500 ${isCompleted || isCurrent ? 'text-purple-700' : 'text-gray-500'}`}>
                      {step.name}
                  </p>
                </div>
                {index < QUEST_STEPS.length - 1 && (
                   <div className="flex-1 h-2 bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-full mt-10 relative overflow-hidden">
                     <div 
                       className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-400 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                       style={{ width: index < tokenCount ? '100%' : '0%' }}
                     />
                     {index < tokenCount && <div className="sparkle-trail" />}
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
          50% { transform: scale(1.2); opacity: 1; filter: brightness(1.5); }
          100% { transform: scale(1.1); opacity: 1; filter: brightness(1); }
        }
        .animate-sparkle-pop {
          animation: sparkle-pop 0.6s ease-out forwards;
        }
        @keyframes glow-ring {
          0%, 100% { box-shadow: 0 0 12px 3px rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 0 20px 8px rgba(139, 92, 246, 0.7); }
        }
        .animate-glow-ring {
          animation: glow-ring 2.5s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .sparkle-trail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .sparkle-trail::after, .sparkle-trail::before {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          opacity: 0.7;
          animation: sparkle-move 2s linear infinite;
        }
        .sparkle-trail::before {
          animation-delay: -1s;
        }
        @keyframes sparkle-move {
          0% { transform: translateX(-10px) scale(0.5); }
          100% { transform: translateX(calc(100% + 10px)) scale(1); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default TokenBoard;