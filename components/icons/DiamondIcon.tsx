import React from 'react';

const DiamondIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
        style={{ overflow: 'visible' }}
    >
        <defs>
            <linearGradient id="diamond-facet-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D8B4FE" />
                <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="diamond-facet-2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="diamond-facet-3" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#E9D5FF" />
                <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="diamond-facet-4" x1="0.5" y1="1" x2="0.5" y2="0">
                <stop offset="0%" stopColor="#5B21B6" />
                <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
            <filter id="diamond-icon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            </filter>
        </defs>
        <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
            {/* Glow */}
            {isFilled && (
                <path d="M50 5 L95 45 L50 95 L5 45 Z" fill="#A855F7" filter="url(#diamond-icon-glow)" opacity="0.7" />
            )}

            {/* Main Body with stroke */}
            <g stroke="#4C1D95" strokeWidth="2.5" strokeLinejoin="round">
                {/* Top Facets */}
                <path d="M50 5 L 95 45 L 75 45 Z" fill="url(#diamond-facet-2)" />
                <path d="M50 5 L 5 45 L 25 45 Z" fill="url(#diamond-facet-1)" />
                <path d="M25 45 L 75 45 L 50 5 Z" fill="url(#diamond-facet-3)" />

                {/* Bottom Facets */}
                <path d="M5 45 L 50 95 L 25 45 Z" fill="url(#diamond-facet-2)" />
                <path d="M95 45 L 50 95 L 75 45 Z" fill="url(#diamond-facet-1)" />
                <path d="M25 45 L 50 95 L 75 45 Z" fill="url(#diamond-facet-4)" />
            </g>

            {/* Shine effect */}
            <path d="M 28 40 L 50 15 L 55 25 L 35 40 Z" fill="white" opacity="0.6" />

        </g>
    </svg>
);

export default DiamondIcon;