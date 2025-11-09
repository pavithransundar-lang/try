import React from 'react';

const TreeIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <radialGradient id="tree-icon-foliage-gradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#a855f7" />
            </radialGradient>
        </defs>
        <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
            {/* Trunk */}
            <path d="M 45,95 C 42,70 58,70 55,95 Z" fill="#92400e" />
            
            {/* Foliage */}
            <circle cx="50" cy="45" r="40" fill="url(#tree-icon-foliage-gradient)"/>
            <circle cx="30" cy="55" r="25" fill="url(#tree-icon-foliage-gradient)"/>
            <circle cx="70" cy="55" r="25" fill="url(#tree-icon-foliage-gradient)"/>

             {/* Magical Orbs */}
            <circle cx="50" cy="35" r="6" fill="#f472b6" stroke="#db2777" strokeWidth="1.5"/>
            <circle cx="35" cy="65" r="5" fill="#fde047" stroke="#f59e0b" strokeWidth="1.5"/>
            <circle cx="68" cy="62" r="5" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1.5"/>
            <circle cx="52" cy="33" r="2" fill="white" opacity="0.8"/>
        </g>
    </svg>
);

export default TreeIcon;