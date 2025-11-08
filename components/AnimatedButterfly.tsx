import React from 'react';

interface AnimatedButterflyProps {
  size: number;
  color1: string;
  color2: string;
}

const AnimatedButterfly: React.FC<AnimatedButterflyProps> = ({ size, color1, color2 }) => {
  const uniqueId = React.useId();
  return (
    <>
      <svg
        viewBox="0 0 100 80"
        width={size}
        height={size * 0.8}
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}
      >
        <defs>
          <radialGradient id={`grad1-${uniqueId}`}>
            <stop offset="0%" stopColor={color1} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color2} stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id={`grad2-${uniqueId}`}>
            <stop offset="0%" stopColor={color2} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color1} stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Right Wing */}
        <g className="wing right-wing">
          <path
            d="M50 40 C 80 10, 100 20, 100 40 C 100 60, 80 70, 50 40 Z"
            fill={`url(#grad1-${uniqueId})`}
          />
        </g>

        {/* Left Wing */}
        <g className="wing left-wing">
          <path
            d="M50 40 C 20 10, 0 20, 0 40 C 0 60, 20 70, 50 40 Z"
            fill={`url(#grad2-${uniqueId})`}
          />
        </g>
        
        {/* Body */}
        <path d="M48 20 C 48 10, 52 10, 52 20 L 52 60 C 52 70, 48 70, 48 60 Z" fill="#4a044e" />
        
        {/* Antennae */}
        <path d="M50 20 Q 40 10, 35 5" stroke="#4a044e" strokeWidth="2" fill="none" />
        <path d="M50 20 Q 60 10, 65 5" stroke="#4a044e" strokeWidth="2" fill="none" />
      </svg>
      <style>{`
        .wing {
          transform-origin: 50px 40px; /* center of body */
        }
        .left-wing {
          animation: flutter-left 0.4s ease-in-out infinite alternate;
        }
        .right-wing {
          animation: flutter-right 0.4s ease-in-out infinite alternate;
        }
        @keyframes flutter-left {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(60deg); }
        }
        @keyframes flutter-right {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(-60deg); }
        }
      `}</style>
    </>
  );
};

export default AnimatedButterfly;
