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
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <linearGradient id="bf-wing-grad-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
        {/* Wings */}
        <path d="M45 50 C 5 -10, 20 20, 20 50 C 20 80, 5 110, 45 50 Z" fill="url(#bf-wing-grad-1)"/>
        <path d="M55 50 C 95 -10, 80 20, 80 50 C 80 80, 95 110, 55 50 Z" fill="url(#bf-wing-grad-1)"/>
        <path d="M45 50 C 25 30, 30 40, 30 50 C 30 60, 25 70, 45 50 Z" fill="url(#bf-wing-grad-2)"/>
        <path d="M55 50 C 75 30, 70 40, 70 50 C 70 60, 75 70, 55 50 Z" fill="url(#bf-wing-grad-2)"/>

        {/* Body */}
        <path d="M48 30 C 48 20, 52 20, 52 30 V 70 C 52 80, 48 80, 48 70 Z" fill="#e9d5ff" />
        
        {/* Sparkles */}
        <circle cx="30" cy="35" r="3" fill="white" opacity="0.9"/>
        <circle cx="70" cy="35" r="3" fill="white" opacity="0.9"/>
        <circle cx="20" cy="65" r="2.5" fill="#fef08a"/>
        <circle cx="80" cy="65" r="2.5" fill="#fef08a"/>
      </g>
    </svg>
  );
};
export default ButterflyIcon;
