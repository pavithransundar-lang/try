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
    const endTimer = setTimeout(onAnimationEnd, 4000); 

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
    zIndex: 10,
    ...(animationStep >= 1 && {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(2.5)',
    }),
  };

  const sparkles = Array.from({ length: 40 });
  const lightBeams = Array.from({ length: 8 });
  const butterflies = React.useMemo(() => Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      type: BUTTERFLY_TYPES[i % BUTTERFLY_TYPES.length],
      size: Math.random() * 20 + 50,
      duration: `${Math.random() * 2 + 3}s`, // 3-5s
      delay: `${Math.random() * 0.5}s`,
  })), []);


  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
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
              <div key={i} className="light-beam" style={{ '--r': `${i * 45}deg` } as React.CSSProperties}/>
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
                '--dist': `${Math.random() * 250 + 50}px`,
              } as React.CSSProperties}
            />
          ))}

          {/* Fluttering Butterflies */}
          {butterflies.map(b => (
            <div key={b.id} className="flutter-container" style={{ animationDuration: b.duration, animationDelay: b.delay }}>
                 <AnimatedButterfly size={b.size} type={b.type} />
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
          animation: fade-in 0.5s ease-out forwards;
        }

        .glow-effect {
          position: absolute;
          width: 400px;
          height: 400px;
          top: -200px;
          left: -200px;
          background: radial-gradient(circle, rgba(252, 211, 77, 0.4) 0%, rgba(252, 211, 77, 0) 70%);
          animation: glow-pulse 2s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }

        .beams-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 1px;
            animation: rotate-beams 20s linear infinite;
        }
        .light-beam {
          position: absolute;
          width: 4px;
          height: 500px;
          background: linear-gradient(to top, transparent, #fef9c3, transparent);
          transform-origin: top;
          transform: rotate(var(--r)) translateY(-250px) scaleY(0);
          opacity: 0;
          animation: shoot-beam 1.5s 0.5s ease-out forwards;
        }
        @keyframes rotate-beams {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shoot-beam {
          0% { opacity: 0; transform: rotate(var(--r)) translateY(-250px) scaleY(0); }
          50% { opacity: 0.7; transform: rotate(var(--r)) translateY(-250px) scaleY(1); }
          100% { opacity: 0; transform: rotate(var(--r)) translateY(-250px) scaleY(1); }
        }

        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #fde047;
          border-radius: 50%;
          animation: sparkle-fly var(--d) 0.5s ease-out forwards;
        }
        @keyframes sparkle-fly {
          0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
          100% { transform: rotate(var(--a)) translateX(var(--dist)) scale(0); opacity: 0; }
        }

        .flutter-container {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            animation: flutter-path ease-in-out infinite alternate, fade-in 1s 0.8s forwards;
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
        .flutter-container:nth-child(1) { --path-x: 120px; --path-y: -150px; }
        .flutter-container:nth-child(2) { --path-x: -150px; --path-y: 100px; }
        .flutter-container:nth-child(3) { --path-x: 180px; --path-y: 50px; }
        .flutter-container:nth-child(4) { --path-x: -100px; --path-y: -160px; }
        .flutter-container:nth-child(5) { --path-x: 80px; --path-y: 140px; }
        @keyframes flutter-path {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(calc(var(--path-x) * 0.5), calc(var(--path-y) * 0.2)) rotate(10deg); }
          75% { transform: translate(calc(var(--path-x) * 0.8), calc(var(--path-y) * 0.9)) rotate(-10deg); }
          100% { transform: translate(var(--path-x), var(--path-y)) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default CastleCelebration;