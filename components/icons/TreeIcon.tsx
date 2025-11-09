import React from 'react';

const TreeIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <radialGradient id="tree-icon-foliage-gradient-1" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#d9f99d" />
                <stop offset="100%" stopColor="#84cc16" />
            </radialGradient>
            <radialGradient id="tree-icon-foliage-gradient-2" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#f0abfc" />
                <stop offset="100%" stopColor="#d946ef" />
            </radialGradient>
            <filter id="tree-glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
            {/* Trunk */}
            <path d="M 45,95 C 40,70 60,70 55,95 L 52 95 Q 50 85 48 95 Z" fill="#a16207" />
            
            {/* Foliage - back layer */}
            <circle cx="50" cy="45" r="40" fill="url(#tree-icon-foliage-gradient-2)"/>

            {/* Foliage - front layer */}
            <circle cx="30" cy="55" r="25" fill="url(#tree-icon-foliage-gradient-1)"/>
            <circle cx="70" cy="55" r="25" fill="url(#tree-icon-foliage-gradient-1)"/>
            <circle cx="50" cy="40" r="28" fill="url(#tree-icon-foliage-gradient-1)"/>


             {/* Magical Orbs */}
            <g style={{ filter: isFilled ? 'url(#tree-glow)' : 'none' }}>
                <circle cx="50" cy="35" r="6" fill="#f472b6" stroke="white" strokeWidth="1"/>
                <circle cx="35" cy="65" r="5" fill="#fde047" stroke="white" strokeWidth="1"/>
                <circle cx="68" cy="62" r="5" fill="#60a5fa" stroke="white" strokeWidth="1"/>
                <circle cx="52" cy="58" r="4" fill="#a78bfa" stroke="white" strokeWidth="1"/>
            </g>
        </g>
    </svg>
);

export default TreeIcon;
