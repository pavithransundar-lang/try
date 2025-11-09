import React, { useState, useEffect } from 'react';
import AnimatedButterfly from './AnimatedButterfly';
import { BUTTERFLY_TYPES } from '../constants';

type ButterflyType = typeof BUTTERFLY_TYPES[number];

interface FlyingButterfly {
  id: number;
  animationDelay: string;
  animationDuration: string;
  type: ButterflyType;
  size: number;
  xDrift: number;
  rotation: number;
}

const QuestCompletionAnimation: React.FC<{ onAnimationEnd: () => void }> = ({ onAnimationEnd }) => {
  const [butterflies, setButterflies] = useState<FlyingButterfly[]>([]);

  useEffect(() => {
    // End the animation after 4 seconds to transition to the next scene.
    const timer = setTimeout(onAnimationEnd, 4000);

    const newButterflies: FlyingButterfly[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      animationDelay: `${Math.random() * 1.5}s`,
      animationDuration: `${Math.random() * 2 + 2.5}s`, // 2.5 to 4.5 seconds
      type: BUTTERFLY_TYPES[i % BUTTERFLY_TYPES.length],
      size: Math.random() * 40 + 50,
      xDrift: (Math.random() - 0.5) * 40, // vw drift
      rotation: (Math.random() - 0.5) * 60, // final rotation
    }));
    setButterflies(newButterflies);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {butterflies.map(b => (
          <div
            key={b.id}
            className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 animate-fly-up-swirl"
            style={{
              animationDelay: b.animationDelay,
              animationDuration: b.animationDuration,
              '--x-drift': `${b.xDrift}vw`,
              '--r-end': `${b.rotation}deg`,
            } as React.CSSProperties}
          >
            <AnimatedButterfly size={b.size} type={b.type} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fly-up-swirl {
          0% {
            transform: translateY(0) scale(0.6) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateY(-25vh) scale(1) rotate(-15deg);
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--x-drift)) scale(1.2) rotate(var(--r-end));
            opacity: 0;
          }
        }
        .animate-fly-up-swirl {
          animation-name: fly-up-swirl;
          animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  );
};

export default QuestCompletionAnimation;