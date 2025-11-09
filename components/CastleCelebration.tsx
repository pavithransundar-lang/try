
import React, { useState, useEffect, useMemo } from 'react';
import AnimatedButterfly from './AnimatedButterfly';
import { BUTTERFLY_TYPES, CastleType } from '../constants';
import CastleIcon from './icons/CastleIcon';
import FairytaleCastleIcon from './icons/FairytaleCastleIcon';
import CrystalCastleIcon from './icons/CrystalCastleIcon';
import ForestFortressIcon from './icons/ForestFortressIcon';


interface CastleCelebrationProps {
  startElement: HTMLDivElement | null;
  onResetQuest: () => void;
  selectedCastle: CastleType;
}

const castleComponents: Record<CastleType, React.FC<any>> = {
    classic: CastleIcon,
    fairytale: FairytaleCastleIcon,
    crystal: CrystalCastleIcon,
    forest: ForestFortressIcon,
};

const CastleCelebration: React.FC<CastleCelebrationProps> = ({ startElement, onResetQuest, selectedCastle }) => {
  const [startPos, setStartPos] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [animationStep, setAnimationStep] = useState(0);

  const CastleComponent = castleComponents[selectedCastle] || castleComponents.classic;

  useEffect(() => {
    if (startElement) {
      const rect = startElement.getBoundingClientRect();
      setStartPos(rect);
    }

    const step1Timer = setTimeout(() => setAnimationStep(1), 100); 
    const step2Timer = setTimeout(() => setAnimationStep(2), 1300); 
    const step3Timer = setTimeout(() => setAnimationStep(3), 2800); // Button appears

    return () => {
      clearTimeout(step1Timer);
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
    };
  }, [startElement]);

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${startPos.top}px`,
    left: `${startPos.left}px`,
    width: `${startPos.width}px`,
    height: `${startPos.height}px`,
    transition: 'all 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    zIndex: 60,
    ...(animationStep >= 1 && {
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(2.2)',
    }),
  };

  const fireworks = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 80 + 10}%`, 
      delay: `${Math.random() * 1.5 + 0.5}s`, 
      duration: `${Math.random() * 1 + 1}s`,
      color: ['#fde047', '#f472b6', '#a78bfa', '#6ee7b7'][i % 4],
  })), []);
  
  const butterflies = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      type: BUTTERFLY_TYPES[i % BUTTERFLY_TYPES.length],
      size: Math.random() * 20 + 60,
      duration: `${Math.random() * 5 + 8}s`,
      delay: `${Math.random() * 2}s`,
      radius: `${Math.random() * 120 + 220}px`,
  })), []);


  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${animationStep >= 1 ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'radial-gradient(circle at 50% 50%, #4a044e, #1e1b4b)' }}
      />
      
      <div style={iconStyle} className="pointer-events-none">
        <CastleComponent isFilled={true} />
      </div>

      {animationStep >= 2 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl text-center pointer-events-none">
            <h1 
                className="text-white text-5xl md:text-7xl font-title animate-text-fade-in"
                style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}
            >
                You've reached the castle, Princess Celine!
            </h1>
            
            {animationStep >= 3 && (
                <button
                    onClick={onResetQuest}
                    className="mt-10 px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 ease-in-out text-lg pointer-events-auto animate-button-fade-in"
                >
                    Start a New Quest! 🎉
                </button>
            )}

        </div>
      )}

      {/* Background animations container */}
      {animationStep >= 2 && (
        <div className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none">
          {fireworks.map(fw => (
            <div key={fw.id} className="firework" style={{ left: fw.left, animationDelay: fw.delay }}>
              {Array.from({ length: 15 }).map((_, i) => (
                  <div 
                      key={i} 
                      className="spark"
                      style={{
                          '--angle': `${i * 24}deg`,
                          '--duration': fw.duration,
                          background: fw.color,
                      } as React.CSSProperties}
                  />
              ))}
            </div>
          ))}

          {butterflies.map(b => (
            <div key={b.id} className="orbit-container" style={{ animationDuration: b.duration, animationDelay: b.delay }}>
                 <div className="orbit-path" style={{'--radius': b.radius} as React.CSSProperties}>
                    <AnimatedButterfly size={b.size} type={b.type} />
                 </div>
            </div>
          ))}
        </div>
      )}
      <style>{`
        .animate-text-fade-in {
            animation: text-fade-in 1.5s 0.2s ease-out forwards;
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }
        .animate-button-fade-in {
            animation: text-fade-in 1s ease-out forwards;
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }
        @keyframes text-fade-in {
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
      
        .firework {
            position: absolute;
            top: 50%;
            opacity: 0;
            animation: firework-fade-in 0.1s forwards;
        }
        @keyframes firework-fade-in { to { opacity: 1; } }

        .spark {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            opacity: 0;
            animation: firework-explode var(--duration) ease-out forwards;
        }
        @keyframes firework-explode {
            0% {
                transform: rotate(var(--angle)) translateX(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: rotate(var(--angle)) translateX(150px) scale(0);
                opacity: 0;
            }
        }

        .orbit-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            opacity: 0;
            animation: rotate-orbit linear infinite, fade-in-orbit 2s forwards;
        }
        .orbit-path {
            animation: translate-orbit 5s ease-in-out infinite alternate;
            transform-origin: center center;
        }
        @keyframes rotate-orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes translate-orbit {
            from { transform: translateX(var(--radius)) translateY(0) rotate(0deg); }
            to { transform: translateX(calc(var(--radius) * 0.8)) translateY(20px) rotate(-10deg); }
        }
        @keyframes fade-in-orbit {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CastleCelebration;
