import React from 'react';

const KeyIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <linearGradient id="key-icon-silver" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
        </defs>
         <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }} transform="rotate(45 50 50)">
            {/* Main Key Shape */}
            <path d="M50 10 C 25 10, 20 35, 35 45 L 65 15 C 80 35, 75 10, 50 10 Z" fill="url(#key-icon-silver)" stroke="#6b7280" strokeWidth="3"/>
            <rect x="47" y="40" width="6" height="45" rx="3" fill="url(#key-icon-silver)" stroke="#6b7280" strokeWidth="3"/>
            
            {/* Key Teeth */}
            <rect x="35" y="70" width="12" height="6" rx="2" fill="url(#key-icon-silver)" stroke="#6b7280" strokeWidth="3"/>
            <rect x="35" y="80" width="12" height="6" rx="2" fill="url(#key-icon-silver)" stroke="#6b7280" strokeWidth="3"/>

            {/* Gem */}
            <circle cx="50" cy="28" r="12" fill="#f472b6" stroke="#db2777" strokeWidth="2.5"/>
            <circle cx="53" cy="25" r="3.5" fill="white" opacity="0.8"/>
        </g>
    </svg>
);

export default KeyIcon;