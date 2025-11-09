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

// Re-calibrated SVG path segments for better visual balance and spacing.
const PATH_SEGMENTS = [
  "M 60 80 C 150 40, 260 40, 350 80", // Stage 1 to 2
  "M 350 80 C 440 120, 550 120, 640 80", // Stage 2 to 3
  "M 640 80 C 730 40, 840 40, 930 80", // Stage 3 to 4
  "M 930 80 C 1020 120, 1130 120, 1220 80", // Stage 4 to 5
];


const TokenBoard: React.FC<TokenBoardProps> = ({ tokenCount, tokenRefs }) => {
  return (
    <>
      <div className="w-full mx-auto p-4 relative min-h-[220px]">
        {/* SVG Forest Trail Path */}
        <svg className="absolute top-0 left-0 w-full h-full -z-10" viewBox="0 0 1280 160" preserveAspectRatio="none">
            <defs>
                <linearGradient id="path-progress-gradient-pastel" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fde047" />
                    <stop offset="100%" stopColor="#d8b4fe" />
                </linearGradient>
                <filter id="path-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            {/* Base trail */}
            {PATH_SEGMENTS.map((path, index) => (
                <path
                    key={`trail-${index}`}
                    d={path}
                    stroke="#a16207" 
                    strokeOpacity="0.5"
                    strokeWidth="14"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="2 18" 
                />
            ))}
            {/* Progress trail */}
            {PATH_SEGMENTS.map((path, index) => {
                // Show a path segment if the token it starts from is completed.
                if (index < tokenCount) { 
                    return (
                        <path
                            key={`progress-${index}`}
                            d={path}
                            stroke="url(#path-progress-gradient-pastel)"
                            strokeWidth="18"
                            strokeLinecap="round"
                            fill="none"
                            className="path-progress"
                            style={{ filter: 'url(#path-glow)' }}
                        />
                    );
                }
                return null;
            })}
        </svg>

        <div className="flex items-start justify-between">
          {QUEST_STEPS.map((step, index) => {
            const isCompleted = index < tokenCount;
            const isCurrent = index === tokenCount;
            const isNewlyCompleted = index === tokenCount - 1;
            const IconComponent = ICONS[index];

            return (
                <div 
                  key={step.name}
                  ref={el => { if (tokenRefs.current) tokenRefs.current[index] = el; }}
                  className="flex flex-col items-center text-center w-32 relative floating-icon"
                  style={{ animationDelay: `${index * 0.4}s`}}
                >
                  <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out relative
                    ${isCompleted ? 'bg-white shadow-lg scale-110' : 'bg-purple-200/50'}
                    ${isCurrent ? 'current-stage-glow' : ''}
                    ${isNewlyCompleted ? 'animate-sparkle-pop' : ''}`}>
                      {isCompleted && <div className="absolute inset-0 rounded-full bg-violet-200/50 animate-ping-slow" />}
                      <div className="w-20 h-20 md:w-24 md:h-24">
                          <IconComponent isFilled={isCompleted} />
                      </div>
                  </div>
                  <p className={`mt-4 text-sm md:text-base font-semibold transition-colors duration-500 ${isCompleted || isCurrent ? 'text-purple-700' : 'text-gray-500'}`}>
                      {step.name}
                  </p>
                </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes sparkle-pop {
          0% { transform: scale(0.5); opacity: 0; filter: brightness(1.5); }
          50% { transform: scale(1.2); opacity: 1; filter: brightness(1.2); }
          100% { transform: scale(1.1); opacity: 1; filter: brightness(1); }
        }
        .animate-sparkle-pop {
          animation: sparkle-pop 0.6s ease-out forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-0.5deg);
          }
          50% {
            transform: translateY(-15px) rotate(0.5deg);
          }
        }
        .floating-icon {
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
            0%, 100% {
                box-shadow: 0 0 15px 5px rgba(253, 224, 71, 0.2), 0 0 15px 5px rgba(216, 180, 254, 0.3);
            }
            50% {
                box-shadow: 0 0 25px 10px rgba(253, 224, 71, 0.4), 0 0 25px 10px rgba(216, 180, 254, 0.5);
            }
        }
        .current-stage-glow {
            animation: pulse-glow 2.5s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .path-progress {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw-path 1.5s ease-out forwards;
        }
        @keyframes draw-path {
            to {
                stroke-dashoffset: 0;
            }
        }
      `}</style>
    </>
  );
};

export default TokenBoard;