import React from 'react';
import { BUTTERFLY_TYPES } from '../constants';

type ButterflyType = typeof BUTTERFLY_TYPES[number];

interface AnimatedButterflyProps {
  size: number;
  type: ButterflyType;
}

const butterflyPaths = {
    blue: {
        rightWing: "M50 50 C 90 10, 100 20, 100 50 C 100 80, 80 90, 50 50 Z",
        leftWing: "M50 50 C 10 10, 0 20, 0 50 C 0 80, 20 90, 50 50 Z",
        wingFill: "url(#blue-grad)",
        bodyFill: "#3b82f6",
        defs: (
            <radialGradient id="blue-grad">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
            </radialGradient>
        )
    },
    pink: {
        rightWing: "M50 50 C 85 20, 95 30, 95 50 C 95 70, 85 80, 50 50 Z",
        leftWing: "M50 50 C 15 20, 5 30, 5 50 C 5 70, 15 80, 50 50 Z",
        wingFill: "url(#pink-grad)",
        bodyFill: "#ec4899",
        defs: (
            <radialGradient id="pink-grad">
                <stop offset="0%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#f472b6" />
            </radialGradient>
        )
    },
    monarch: {
        rightWing: "M50 50 C 90 20, 100 30, 100 50 C 100 70, 85 80, 50 50 Z",
        leftWing: "M50 50 C 10 20, 0 30, 0 50 C 0 70, 15 80, 50 50 Z",
        wingFill: "url(#monarch-grad)",
        bodyFill: "#1e293b",
        defs: (
            <radialGradient id="monarch-grad">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" />
            </radialGradient>
        )
    },
    green: {
        rightWing: "M50 50 C 80 20, 90 30, 95 50 C 90 70, 80 80, 50 50 Z",
        leftWing: "M50 50 C 20 20, 10 30, 5 50 C 10 70, 20 80, 50 50 Z",
        wingFill: "url(#green-grad)",
        bodyFill: "#10b981",
        defs: (
            <radialGradient id="green-grad">
                <stop offset="0%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#34d399" />
            </radialGradient>
        )
    },
}

const AnimatedButterfly: React.FC<AnimatedButterflyProps> = ({ size, type }) => {
  const butterfly = butterflyPaths[type];

  return (
    <>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }}
      >
        <defs>
          {butterfly.defs}
        </defs>

        {/* Right Wing */}
        <g className="wing right-wing">
          <path d={butterfly.rightWing} fill={butterfly.wingFill} />
        </g>

        {/* Left Wing */}
        <g className="wing left-wing">
          <path d={butterfly.leftWing} fill={butterfly.wingFill} />
        </g>
        
        {/* Body */}
        <path d="M48 30 C 48 20, 52 20, 52 30 V 70 C 52 80, 48 80, 48 70 Z" fill={butterfly.bodyFill} />
        
        {/* Antennae */}
        <path d="M50 30 Q 40 20, 35 15" stroke={butterfly.bodyFill} strokeWidth="2" fill="none" />
        <path d="M50 30 Q 60 20, 65 15" stroke={butterfly.bodyFill} strokeWidth="2" fill="none" />
      </svg>
      <style>{`
        .wing {
          transform-origin: 50px 50px;
        }
        .left-wing {
          animation: flutter-left 0.4s ease-in-out infinite alternate;
        }
        .right-wing {
          animation: flutter-right 0.4s ease-in-out infinite alternate;
        }
        @keyframes flutter-left {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(55deg); }
        }
        @keyframes flutter-right {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(-55deg); }
        }
      `}</style>
    </>
  );
};

export default AnimatedButterfly;
