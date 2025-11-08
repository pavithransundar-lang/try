import React from 'react';

interface ButterflyIconProps {
  className?: string;
  isFilled?: boolean;
}

const ButterflyIcon: React.FC<ButterflyIconProps> = ({ className = '', isFilled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id="bf-wing-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="bf-wing-grad-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
        {/* Wings */}
        <path d="M50 50 C 10 0, 20 20, 20 50 C 20 80, 10 100, 50 50 Z" fill="url(#bf-wing-grad-1)"/>
        <path d="M50 50 C 90 0, 80 20, 80 50 C 80 80, 90 100, 50 50 Z" fill="url(#bf-wing-grad-1)"/>
        <path d="M50 50 C 25 30, 30 40, 30 50 C 30 60, 25 70, 50 50 Z" fill="url(#bf-wing-grad-2)"/>
        <path d="M50 50 C 75 30, 70 40, 70 50 C 70 60, 75 70, 50 50 Z" fill="url(#bf-wing-grad-2)"/>

        {/* Body */}
        <path d="M48 30 C 48 20, 52 20, 52 30 V 70 C 52 80, 48 80, 48 70 Z" fill="#8b5cf6" />
        
        {/* Sparkles */}
        <circle cx="30" cy="35" r="3" fill="white" opacity="0.9"/>
        <circle cx="70" cy="35" r="3" fill="white" opacity="0.9"/>
      </g>
    </svg>
  );
};

export default ButterflyIcon;