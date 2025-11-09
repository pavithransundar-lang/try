import React from 'react';

const KeyIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
        style={{ overflow: 'visible' }}
    >
        <defs>
            <linearGradient id="key-gold-grad" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
            <radialGradient id="key-ribbon-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F9A8D4" />
                <stop offset="60%" stopColor="#A5B4FC" />
                <stop offset="100%" stopColor="#60A5FA" />
            </radialGradient>
            <filter id="key-drip-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.2"/>
            </filter>
        </defs>
         <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
            {/* Key */}
            <g transform="translate(0, 15)">
                {/* Key Shaft */}
                <rect x="47" y="30" width="6" height="55" rx="3" fill="url(#key-gold-grad)" stroke="#CA8A04" strokeWidth="2"/>
                
                {/* Key Teeth */}
                <rect x="35" y="70" width="12" height="6" rx="2" fill="url(#key-gold-grad)" stroke="#CA8A04" strokeWidth="2"/>
                <rect x="35" y="80" width="18" height="6" rx="2" fill="url(#key-gold-grad)" stroke="#CA8A04" strokeWidth="2"/>
                
                {/* Key Head - Ornate */}
                <path d="M 50 32 C 35 32, 30 15, 50 15 C 70 15, 65 32, 50 32 Z" fill="url(#key-gold-grad)" stroke="#CA8A04" strokeWidth="2"/>
                <circle cx="50" cy="25" r="15" fill="none" stroke="#CA8A04" strokeWidth="2"/>
            </g>

            {/* Ribbon */}
            <g style={{ filter: 'url(#key-drip-shadow)' }}>
                {/* Bow */}
                <path d="M 50 25 C 10 0, 20 40, 45 30 C 40 45, 50 40, 50 40" fill="url(#key-ribbon-grad)"/>
                <path d="M 50 25 C 90 0, 80 40, 55 30 C 60 45, 50 40, 50 40" fill="url(#key-ribbon-grad)"/>
                
                {/* Dripping tails */}
                <path d="M45 30 C 30 50, 40 70, 35 80 Q 40 75, 48 60 C 50 50, 48 40, 45 30 Z" fill="url(#key-ribbon-grad)" />
                <path d="M55 30 C 70 50, 60 70, 65 80 Q 60 75, 52 60 C 50 50, 52 40, 55 30 Z" fill="url(#key-ribbon-grad)" />

                {/* Knot */}
                <circle cx="50" cy="32" r="8" fill="#A5B4FC" />
            </g>

            {/* Celestial Details */}
            <g fill="#FEF3C7" stroke="white" strokeWidth="0.5">
                {/* Moon */}
                <path d="M 50 28 A 6 6 0 1 1 50 27 Z" transform="rotate(-20 50 32)"/>
                {/* Stars */}
                <path d="M 25 20 l 2 2 l 3 -2 l -1 3 l 3 1 l -3 1 l 1 3 l -3 -2 l -2 2 l 1 -3 l -3 -1 l 3 -1 Z" />
                <path d="M 75 25 l 1.5 1.5 l 2 -1.5 l -1 2.5 l 2 1 l -2.5 1 l 1 2 l -2 -1.5 l -1.5 1.5 l 1 -2 l -2.5 -1 l 2.5 -1 Z" opacity="0.8"/>
            </g>
        </g>
    </svg>
);

export default KeyIcon;