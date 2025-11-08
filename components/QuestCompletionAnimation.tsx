import React, { useState, useEffect } from 'react';
import AnimatedButterfly from './AnimatedButterfly';
import { BUTTERFLY_COLORS } from '../constants';

interface FlyingButterfly {
  id: number;
  startX: number;
  animationDelay: string;
  animationDuration: string;
  color1: string;
  color2: string;
  size: number;
}

const QuestCompletionAnimation: React.FC<{ onAnimationEnd: () => void }> = ({ onAnimationEnd }) => {
  const [butterflies, setButterflies] = useState<FlyingButterfly[]>([]);

  useEffect(() => {
    // End the animation after 6 seconds
    const timer = setTimeout(onAnimationEnd, 6000);

    const newButterflies: FlyingButterfly[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100, // as vw
      animationDelay: `${Math.random() * 1.5}s`,
      animationDuration: `${Math.random() * 2 + 3}s`, // 3 to 5 seconds duration
      color1: BUTTERFLY_COLORS[i % BUTTERFLY_COLORS.length][0],
      color2: BUTTERFLY_COLORS[i % BUTTERFLY_COLORS.length][1],
      size: Math.random() * 40 + 50,
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
            className="absolute bottom-[-100px] animate-fly-up"
            style={{
              left: `${b.startX}vw`,
              animationDelay: b.animationDelay,
              animationDuration: b.animationDuration,
            }}
          >
            <AnimatedButterfly size={b.size} color1={b.color1} color2={b.color2} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fly-up {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 1;
          }
          20% {
            transform: translateY(-25vh) scale(1.1) rotate(-10deg);
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(0.5) rotate(10deg);
            opacity: 0;
          }
        }
        .animate-fly-up {
          animation-name: fly-up;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  );
};

export default QuestCompletionAnimation;
