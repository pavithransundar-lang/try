
import React from 'react';

const CrystalCastleIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="cr-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#D8B4FE" />
      </linearGradient>
      <linearGradient id="cr-grad-2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="cr-grad-3" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#E0E7FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
      </linearGradient>
      <filter id="cr-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
          </feMerge>
      </filter>
    </defs>
    
    <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }} filter={isFilled ? 'url(#cr-glow)' : 'none'}>
        {/* Base Platform */}
        <path d="M10 180 L 190 180 L 150 160 L 50 160 Z" fill="url(#cr-grad-2)" opacity="0.8" />

        {/* Main Structure */}
        <path d="M60 160 L 140 160 L 120 100 L 80 100 Z" fill="url(#cr-grad-1)" />
        
        {/* Left Spire */}
        <path d="M50 160 L 80 100 L 60 80 L 30 140 Z" fill="url(#cr-grad-2)" />
        <path d="M60 80 L 70 40 L 50 60 Z" fill="url(#cr-grad-3)" />

        {/* Right Spire */}
        <path d="M150 160 L 120 100 L 140 80 L 170 140 Z" fill="url(#cr-grad-2)" />
        <path d="M140 80 L 130 40 L 150 60 Z" fill="url(#cr-grad-3)" />
        
        {/* Central Spire */}
        <path d="M80 100 L 120 100 L 100 20 Z" fill="url(#cr-grad-3)" />
        
        {/* Facet Lines */}
        <g stroke="#E0E7FF" strokeWidth="2" strokeLinecap="round" opacity="0.7">
            <path d="M100 20 V 100" />
            <path d="M80 100 L 60 80" />
            <path d="M120 100 L 140 80" />
            <path d="M100 100 L 100 160" />
        </g>
    </g>
  </svg>
);

export default CrystalCastleIcon;
