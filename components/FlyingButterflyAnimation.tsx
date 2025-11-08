
import React, { useState, useEffect } from 'react';
import AnimatedButterfly from './AnimatedButterfly';
import { BUTTERFLY_TYPES } from '../constants';

interface FlyingButterflyAnimationProps {
  targetTokenIndex: number;
  tokenRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  onAnimationEnd: () => void;
}

const FlyingButterflyAnimation: React.FC<FlyingButterflyAnimationProps> = ({
  targetTokenIndex,
  tokenRefs,
  onAnimationEnd,
}) => {
  const [style, setStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [keyframes, setKeyframes] = useState('');
  const [butterflyProps] = useState(() => {
    const typeIndex = Math.floor(Math.random() * BUTTERFLY_TYPES.length);
    return {
      type: BUTTERFLY_TYPES[typeIndex],
      size: 80,
    };
  });

  useEffect(() => {
    const targetEl = tokenRefs.current[targetTokenIndex];
    if (targetEl) {
      const targetRect = targetEl.getBoundingClientRect();
      // Center of the target token
      const endX = targetRect.left + targetRect.width / 2;
      const endY = targetRect.top + targetRect.height / 2;
      
      // Start near where the 'Catch a Butterfly' button is
      const startX = window.innerWidth * 0.4;
      const startY = window.innerHeight * 0.85;

      const animationName = `fly-to-target-${targetTokenIndex}`;
      
      setKeyframes(`
        @keyframes ${animationName} {
          0% {
            transform: translate(${startX}px, ${startY}px) scale(1.2) rotate(15deg);
            opacity: 1;
          }
          30% {
            transform: translate(${startX + (endX - startX) * 0.3}px, ${startY - 150}px) scale(1) rotate(-15deg);
          }
          100% {
            transform: translate(${endX}px, ${endY}px) scale(0);
            opacity: 0.5;
          }
        }
      `);

      setStyle({
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 50,
        pointerEvents: 'none',
        animation: `${animationName} 1.2s ease-in-out forwards`,
      });
    }
  }, [targetTokenIndex, tokenRefs]);

  if (!keyframes) return null;

  return (
    <>
      <style>{keyframes}</style>
      <div style={style} onAnimationEnd={onAnimationEnd}>
        <AnimatedButterfly {...butterflyProps} />
      </div>
    </>
  );
};

export default FlyingButterflyAnimation;