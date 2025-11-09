import React from 'react';

const CastleIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="castle-icon-pink-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#fce7f3" />
        <stop offset="100%" stopColor="#f9a8d4" />
      </linearGradient>
      <linearGradient id="castle-icon-purple-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#e9d5ff" />
        <stop offset="100%" stopColor="#d8b4fe" />
      </linearGradient>
       <linearGradient id="castle-icon-gold-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#fef9c3" />
        <stop offset="100%" stopColor="#fde047" />
      </linearGradient>
      <linearGradient id="castle-icon-blue-grad" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#bae6fd" />
        <stop offset="100%" stopColor="#7dd3fc" />
      </linearGradient>
    </defs>
    
    <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
      {/* Main Structure */}
      <path d="M40 180 V 100 H 160 V 180 Z" fill="url(#castle-icon-pink-grad)" stroke="#db2777" strokeWidth="3"/>
      <path d="M50 100 H 150 V 85 H 50 Z" fill="url(#castle-icon-pink-grad)" stroke="#db2777" strokeWidth="3"/>

      {/* Towers */}
      <path d="M40 130 V 60 H 70 V 130" fill="url(#castle-icon-pink-grad)" stroke="#db2777" strokeWidth="3" />
      <path d="M130 130 V 60 H 160 V 130" fill="url(#castle-icon-pink-grad)" stroke="#db2777" strokeWidth="3" />
      <path d="M80 85 V 30 H 120 V 85" fill="url(#castle-icon-purple-grad)" stroke="#9333ea" strokeWidth="3" />

      {/* Roofs */}
      <path d="M40 60 L 55 35 L 70 60 Z" fill="url(#castle-icon-blue-grad)" stroke="#0284c7" strokeWidth="3"/>
      <path d="M130 60 L 145 35 L 160 60 Z" fill="url(#castle-icon-blue-grad)" stroke="#0284c7" strokeWidth="3"/>
      <path d="M80 30 L 100 5 L 120 30 Z" fill="url(#castle-icon-blue-grad)" stroke="#0284c7" strokeWidth="3"/>

      {/* Door */}
      <path d="M90 180 v -35 a 10 10 0 0 1 20 0 v 35" fill="#e9d5ff" stroke="#9333ea" strokeWidth="3"/>
      
      {/* Windows */}
      <circle cx="100" cy="115" r="10" fill="url(#castle-icon-gold-grad)" stroke="#f59e0b" strokeWidth="2.5"/>
      <rect x="50" y="75" width="16" height="24" rx="8" fill="url(#castle-icon-gold-grad)" stroke="#f59e0b" strokeWidth="2.5"/>
      <rect x="134" y="75" width="16" height="24" rx="8" fill="url(#castle-icon-gold-grad)" stroke="#f59e0b" strokeWidth="2.5"/>
      <rect x="92" y="45" width="16" height="24" rx="8" fill="url(#castle-icon-gold-grad)" stroke="#f59e0b" strokeWidth="2.5"/>
       {/* Window Shine */}
      <path d="M95 110 C 98 110, 98 115, 95 115" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M97 48 C 100 48, 100 53, 97 53" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>


      {/* Flags */}
      <path d="M55 35 V 20 L 65 25 L 55 30 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2"/>
      <path d="M145 35 V 20 L 155 25 L 145 30 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2"/>
      <path d="M100 5 V -10 L 110 -5 L 100 0 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2"/>

      {isFilled && <>
        <path d="M25,20 L 30,25 L 35,20 L 30,15 Z" fill="white"/>
        <path d="M170 35 l 5 0 l 0 5 l -5 0 z" fill="#fef08a" transform="rotate(45 172.5 37.5)"/>
        <circle cx="100" cy="140" r="3" fill="white" opacity="0.9" />
        <circle cx="20" cy="80" r="4" fill="#fef08a" opacity="0.9" />
      </>}

    </g>
  </svg>
);

export default CastleIcon;
