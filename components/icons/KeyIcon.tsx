import React from 'react';

const KeyIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <linearGradient id="key-icon-gold" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fde047" />
            </linearGradient>
            <filter id="key-icon-glow" x="-50%" y="-50%" width="200%" height="200%">
               <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
            </filter>
        </defs>
         <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }} transform="rotate(45 50 50)" filter="url(#key-icon-glow)">
            {/* Main Key Shape */}
            <path d="M50 10 C 25 10, 20 35, 35 45 L 65 15 C 80 35, 75 10, 50 10 Z" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>
            <rect x="47" y="40" width="6" height="45" rx="3" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>
            
            {/* Key Teeth */}
            <rect x="35" y="70" width="12" height="6" rx="2" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>
            <rect x="35" y="80" width="12" height="6" rx="2" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>

            {/* Gem */}
            <circle cx="50" cy="28" r="12" fill="#c084fc" stroke="#9333ea" strokeWidth="2.5"/>
            <circle cx="53" cy="25" r="3.5" fill="white" opacity="0.8"/>
        </g>
    </svg>
);

export default KeyIcon;