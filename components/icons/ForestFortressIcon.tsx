
import React from 'react';

const ForestFortressIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
        <linearGradient id="ff-stone-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A8A29E" />
            <stop offset="100%" stopColor="#78716C" />
        </linearGradient>
        <linearGradient id="ff-wood-grad" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#A16207" />
            <stop offset="100%" stopColor="#854D0E" />
        </linearGradient>
        <linearGradient id="ff-leaf-grad" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#4D7C0F" />
            <stop offset="100%" stopColor="#365314" />
        </linearGradient>
    </defs>
    
    <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
        {/* Main Wall */}
        <path d="M30 180 V 120 H 170 V 180 Z" fill="url(#ff-stone-grad)"/>
        {/* Crenellations */}
        <path d="M30 120 h15 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h15 Z" fill="#78716C" />

        {/* Central Tower (Wood) */}
        <path d="M80 140 V 60 H 120 V 140 Z" fill="url(#ff-wood-grad)" />
        <path d="M70 60 H 130 L 120 40 L 80 40 Z" fill="#854D0E" />

        {/* Left Tower */}
        <path d="M40 150 V 90 H 70 V 150 Z" fill="url(#ff-stone-grad)" />
        <path d="M40 90 L 55 70 L 70 90 Z" fill="#4D7C0F" />
        
        {/* Right Tower (overgrown) */}
        <path d="M130 150 V 90 H 160 V 150 Z" fill="url(#ff-stone-grad)" />
        <path d="M130 90 L 145 70 L 160 90 Z" fill="#4D7C0F" />
        
        {/* Door */}
        <path d="M90 180 v -25 h 20 v 25" fill="#57534E"/>

        {/* Vines */}
        <g stroke="url(#ff-leaf-grad)" strokeWidth="4" fill="none" strokeLinecap="round">
            <path d="M160 140 C 170 120, 150 100, 160 80" />
            <path d="M65 150 C 55 130, 75 110, 65 90" />
            <path d="M110 60 C 100 30, 120 20, 130 10" />
        </g>
    </g>
  </svg>
);

export default ForestFortressIcon;
