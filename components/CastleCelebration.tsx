import React, { useState, useEffect } from 'react';
import CastleIcon from './icons/CastleIcon';
import AnimatedButterfly from './AnimatedButterfly';
import { BUTTERFLY_TYPES } from '../constants';

interface CastleCelebrationProps {
  startElement: HTMLDivElement | null;
  onAnimationEnd: () => void;
}

const CastleCelebration: React.FC<CastleCelebrationProps> = ({ startElement, onAnimationEnd }) => {
  const [startPos, setStartPos] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (startElement) {
      const rect = startElement.getBoundingClientRect();
      setStartPos(rect);
    }

    const step1Timer = setTimeout(() => setAnimationStep(1), 100);
    const endTimer = setTimeout(onAnimationEnd, 5000); 

    return () => {
      clearTimeout(step1Timer);
      clearTimeout(endTimer);
    };
  }, [startElement, onAnimationEnd]);

  const castleStyle: React.CSSProperties = {
    position: 'absolute',
    top: `${startPos.top}px`,
    left: `${startPos.left}px`,
    width: `${startPos.width}px`,
    height: `${startPos.height}px`,
    transition: 'all 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    zIndex: 60,
    ...(animationStep >= 1 && {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(2.5)',
    }),
  };

  const sparkles = Array.from({ length: 40 });
  const lightBeams = Array.from({ length: 10 });
  const butterflies = React.useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      type: BUTTERFLY_TYPES[i % BUTTERFLY_TYPES.length],
      size: Math.random() * 20 + 60,
      duration: `${Math.random() * 5 + 8}s`, // 8-13s for a slow orbit
      delay: `${Math.random() * 1}s`,
      radius: `${Math.random() * 100 + 180}px`, // orbit radius
  })), []);


  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
      
      <div style={castleStyle}>
        <CastleIcon isFilled={true} />
      </div>

      {animationStep >= 1 && (
        <div className="absolute top-1/2 left-1/2 w-full h-full">
          {/* Background Glow */}
          <div className="glow-effect" />

          {/* Light Beams */}
          <div className="beams-container">
            {lightBeams.map((_, i) => (
              <div key={i} className="light-beam" style={{ '--i': i } as React.CSSProperties}/>
            ))}
          </div>

          {/* Sparkle Particles */}
          {sparkles.map((_, i) => (
            <div 
              key={i}
              className="sparkle"
              style={{
                '--d': `${Math.random() * 1.5 + 0.5}s`,
                '--a': `${Math.random() * 360}deg`,
                '--dist': `${Math.random() * 250 + 80}px`,
              } as React.CSSProperties}
            />
          ))}

          {/* Fluttering Butterflies */}
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .glow-effect {
          position: absolute;
          width: 500px;
          height: 500px;
          top: -250px;
          left: -250px;
          background: radial-gradient(circle, rgba(249, 168, 212, 0.3) 0%, rgba(253, 224, 71, 0.3) 50%, transparent 70%);
          animation: glow-pulse 3s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }

        .beams-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            transform: rotate(-20deg);
            animation: rotate-beams 30s linear infinite;
        }
        .light-beam {
          position: absolute;
          width: 3px;
          height: 600px;
          background: linear-gradient(to top, transparent, rgba(254, 249, 195, 0.5), transparent);
          transform-origin: center -50px;
          transform: rotate(calc(var(--i) * 36deg));
          opacity: 0;
          animation: shimmer-beam 4s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.2s + 0.8s);
        }
        @keyframes rotate-beams {
          from { transform: rotate(-20deg); }
          to { transform: rotate(340deg); }
        }
        @keyframes shimmer-beam {
          0%, 100% { opacity: 0; transform: rotate(calc(var(--i) * 36deg)) scaleY(0.8); }
          50% { opacity: 0.7; transform: rotate(calc(var(--i) * 36deg)) scaleY(1); }
        }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #fde047;
          border-radius: 50%;
          animation: sparkle-fly var(--d) 0.8s ease-out forwards;
        }
        @keyframes sparkle-fly {
          0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
          100% { transform: rotate(var(--a)) translateX(var(--dist)) scale(0); opacity: 0; }
        }

        .orbit-container {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            animation: rotate-orbit linear infinite, fade-in 1.5s 1s forwards;
        }
        .orbit-path {
            animation: translate-orbit 5s ease-in-out infinite alternate;
        }
        @keyframes rotate-orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes translate-orbit {
            from { transform: translateX(var(--radius)) translateY(0) rotate(0deg); }
            to { transform: translateX(calc(var(--radius) * 0.8)) translateY(20px) rotate(-10deg); }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CastleCelebration;