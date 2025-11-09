import React from 'react';

const DiamondIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <linearGradient id="diamond-icon-main" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#a5f3fc" />
                <stop offset="100%" stopColor="#67e8f9" />
            </linearGradient>
            <linearGradient id="diamond-icon-facet-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#f0abfc" />
            </linearGradient>
            <linearGradient id="diamond-icon-facet-2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>
             <linearGradient id="diamond-icon-facet-3" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
            <filter id="diamond-glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
            {/* Main Body */}
            <path d="M10 40 L50 95 L90 40 L50 5 Z" fill="url(#diamond-icon-main)" stroke="#06b6d4" strokeWidth="1.5" />
            
            {/* Facets */}
            <path d="M50 5 L 10 40 L 30 40 Z" fill="url(#diamond-icon-facet-1)" />
            <path d="M50 5 L 90 40 L 70 40 Z" fill="url(#diamond-icon-facet-2)" />
            <path d="M30 40 L50 5 L 70 40 Z" fill="url(#diamond-icon-facet-3)" />

            <path d="M10 40 L 50 95 L 50 40 Z" fill="#c4b5fd" opacity="0.6"/>
            <path d="M90 40 L 50 95 L 50 40 Z" fill="#f9a8d4" opacity="0.6"/>
            <path d="M50 5 L 50 95" stroke="white" strokeWidth="1" opacity="0.5" />


            {/* Sparkles */}
            <g style={{ filter: isFilled ? 'url(#diamond-glow)' : 'none' }}>
                <path d="M18,23 L 23,28 L 28,23 L 23,18 Z" fill="white"/>
                <path d="M75 35 l 6 0 l 0 6 l -6 0 z" fill="#fef08a" transform="rotate(45 78 38)"/>
                <circle cx="50" cy="18" r="5" fill="white" opacity="0.9" />
            </g>
        </g>
    </svg>
);

export default DiamondIcon;
