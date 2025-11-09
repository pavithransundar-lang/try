
import React from 'react';

const FairytaleCastleIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="ft-sky-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#A5B4FC" />
        <stop offset="100%" stopColor="#C7D2FE" />
      </linearGradient>
      <linearGradient id="ft-pink-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#FBCFE8" />
        <stop offset="100%" stopColor="#F9A8D4" />
      </linearGradient>
       <filter id="ft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      </filter>
    </defs>
    
    <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
        {isFilled && <circle cx="100" cy="100" r="100" fill="#f0f9ff" opacity="0.5" filter="url(#ft-glow)" />}

        {/* Main Wall */}
        <path d="M50 180 V 110 H 150 V 180 Z" fill="url(#ft-pink-grad)"/>
        {/* Gate */}
        <path d="M90 180 v -30 a 10 10 0 0 1 20 0 v 30" fill="#C4B5FD"/>
        
        {/* Left Tower */}
        <path d="M40 150 V 70 H 80 V 150 Z" fill="#FBCFE8" />
        <path d="M40 70 L 60 35 L 80 70 Z" fill="url(#ft-sky-grad)"/>

        {/* Right Tower */}
        <path d="M120 150 V 70 H 160 V 150 Z" fill="#FBCFE8" />
        <path d="M120 70 L 140 35 L 160 70 Z" fill="url(#ft-sky-grad)"/>

        {/* Central Tower */}
        <path d="M80 120 V 50 H 120 V 120 Z" fill="url(#ft-pink-grad)" />
        <path d="M80 50 L 100 10 L 120 50 Z" fill="#5B21B6"/>
        
        {/* Windows */}
        <circle cx="60" cy="90" r="5" fill="#C4B5FD" />
        <circle cx="140" cy="90" r="5" fill="#C4B5FD" />
        <rect x="95" y="70" width="10" height="15" rx="5" fill="#C4B5FD" />

        {/* Flags */}
        <path d="M60 35 V 20 L 70 25 Z" fill="#FDE047"/>
        <path d="M140 35 V 20 L 150 25 Z" fill="#FDE047"/>
        <path d="M100 10 V 0 L 115 5 Z" fill="#FDE047"/>
    </g>
  </svg>
);

export default FairytaleCastleIcon;
