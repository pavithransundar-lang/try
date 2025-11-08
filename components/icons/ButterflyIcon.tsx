
import React from 'react';

interface ButterflyIconProps {
  className?: string;
  isFilled: boolean;
}

const ButterflyIcon: React.FC<ButterflyIconProps> = ({ className = '', isFilled }) => {
  if (isFilled) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={className}
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <linearGradient id="wing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#ddd6fe" />
          </linearGradient>
        </defs>
        <path d="M48 20 C20 20, 20 60, 48 60 L52 60 C80 60, 80 20, 52 20 Z" fill="url(#wing-gradient)" stroke="#a78bfa" strokeWidth="2"/>
        <path d="M48 80 C20 80, 20 40, 48 40 L52 40 C80 40, 80 80, 52 80 Z" fill="url(#wing-gradient)" stroke="#a78bfa" strokeWidth="2"/>
        <path d="M50 35 L50 65" stroke="#4c1d95" strokeWidth="4" strokeLinecap="round" />
        <path d="M50 35 Q40 25, 45 20" stroke="#4c1d95" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M50 35 Q60 25, 55 20" stroke="#4c1d95" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <div className={`${className} bg-white/30 rounded-full border-2 border-dashed border-purple-300 backdrop-blur-sm`}>
    </div>
  );
};

export default ButterflyIcon;
