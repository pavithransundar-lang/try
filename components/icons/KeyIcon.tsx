import React from 'react';

const KeyIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <linearGradient id="key-icon-gold" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
        </defs>
         <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }} transform="rotate(45 50 50)">
            {/* Key Head (Heart Shape) */}
            <path d="M50 35 C 30 10, 20 25, 35 40 L 50 55 L 65 40 C 80 25, 70 10, 50 35 Z" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>
            
            {/* Shaft */}
            <rect x="47" y="48" width="6" height="40" rx="3" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>
            
            {/* Key Teeth */}
            <rect x="35" y="75" width="12" height="6" rx="2" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>
            <rect x="35" y="85" width="12" height="6" rx="2" fill="url(#key-icon-gold)" stroke="#ca8a04" strokeWidth="3"/>

            {/* Gem */}
            <circle cx="50" cy="40" r="8" fill="#c084fc" stroke="#a855f7" strokeWidth="2.5"/>
            <circle cx="52" cy="38" r="2.5" fill="white" opacity="0.8"/>
        </g>
    </svg>
);

export default KeyIcon;
