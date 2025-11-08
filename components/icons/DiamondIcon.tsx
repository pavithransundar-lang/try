import React from 'react';

const DiamondIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <linearGradient id="diamond-icon-main" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="diamond-icon-facet" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
            <filter id="diamond-icon-glow" x="-50%" y="-50%" width="200%" height="200%">
               <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
            </filter>
        </defs>
        <g opacity={isFilled ? 1 : 0.4} filter="url(#diamond-icon-glow)" style={{ transition: 'opacity 0.5s ease' }}>
            {/* Main Body */}
            <path d="M10 40 L50 95 L90 40 L50 5 Z" fill="url(#diamond-icon-main)" />
            
            {/* Facets */}
            <path d="M50 5 L 10 40 L 50 40 Z" fill="url(#diamond-icon-facet)" />
            <path d="M50 5 L 90 40 L 50 40 Z" fill="white" opacity="0.6"/>
            <path d="M10 40 L 50 95 L 50 40 Z" fill="#7dd3fc" opacity="0.8"/>

            {/* Sparkles */}
            <path d="M20,25 L 25,30 L 30,25 L 25,20 Z" fill="white"/>
            <path d="M75 35 l 5 0 l 0 5 l -5 0 z" fill="white" transform="rotate(45 77.5 37.5)"/>
            <circle cx="50" cy="20" r="3" fill="white" opacity="0.9" />
        </g>
    </svg>
);

export default DiamondIcon;