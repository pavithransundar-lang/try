import React from 'react';

const CastleIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="castle-icon-pink-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="castle-icon-purple-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
       <linearGradient id="castle-icon-gold-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="castle-icon-blue-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
    
    <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
      {/* Main Structure */}
      <path d="M40 180 V 100 H 160 V 180 Z" fill="url(#castle-icon-pink-grad)" stroke="#be185d" strokeWidth="2.5"/>
      <path d="M50 100 H 150 V 85 H 50 Z" fill="url(#castle-icon-pink-grad)" stroke="#be185d" strokeWidth="2.5"/>

      {/* Towers */}
      <path d="M40 130 V 60 H 70 V 130" fill="url(#castle-icon-pink-grad)" stroke="#be185d" strokeWidth="2.5" />
      <path d="M130 130 V 60 H 160 V 130" fill="url(#castle-icon-pink-grad)" stroke="#be185d" strokeWidth="2.5" />
      <path d="M80 85 V 30 H 120 V 85" fill="url(#castle-icon-purple-grad)" stroke="#9333ea" strokeWidth="2.5" />

      {/* Roofs */}
      <path d="M40 60 L 55 40 L 70 60 Z" fill="url(#castle-icon-blue-grad)" stroke="#0284c7" strokeWidth="2.5"/>
      <path d="M130 60 L 145 40 L 160 60 Z" fill="url(#castle-icon-blue-grad)" stroke="#0284c7" strokeWidth="2.5"/>
      <path d="M80 30 L 100 10 L 120 30 Z" fill="url(#castle-icon-blue-grad)" stroke="#0284c7" strokeWidth="2.5"/>

      {/* Door */}
      <path d="M90 180 v -35 a 10 10 0 0 1 20 0 v 35" fill="#d8b4fe" stroke="#9333ea" strokeWidth="2.5"/>
      
      {/* Windows */}
      <circle cx="100" cy="115" r="10" fill="url(#castle-icon-gold-grad)" stroke="#ca8a04" strokeWidth="2"/>
      <rect x="50" y="75" width="16" height="24" rx="8" fill="url(#castle-icon-gold-grad)" stroke="#ca8a04" strokeWidth="2"/>
      <rect x="134" y="75" width="16" height="24" rx="8" fill="url(#castle-icon-gold-grad)" stroke="#ca8a04" strokeWidth="2"/>
      <rect x="92" y="45" width="16" height="24" rx="8" fill="url(#castle-icon-gold-grad)" stroke="#ca8a04" strokeWidth="2"/>
       {/* Window Shine */}
      <path d="M95 110 C 98 110, 98 115, 95 115" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Flags */}
      <path d="M55 40 V 25 L 65 30 L 55 35 Z" fill="url(#castle-icon-gold-grad)" stroke="#ca8a04" strokeWidth="1.5"/>
      <path d="M145 40 V 25 L 155 30 L 145 35 Z" fill="url(#castle-icon-gold-grad)" stroke="#ca8a04" strokeWidth="1.5"/>
      <path d="M100 10 V -5 L 110 0 L 100 5 Z" fill="url(#castle-icon-gold-grad)" stroke="#ca8a04" strokeWidth="1.5"/>

    </g>
  </svg>
);

export default CastleIcon;