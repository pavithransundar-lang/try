import React from 'react';

const TreeIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
    >
        <defs>
            <radialGradient id="tree-icon-foliage-gradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#16a34a" />
            </radialGradient>
            <linearGradient id="tree-icon-trunk-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a3e635" />
                <stop offset="100%" stopColor="#4d7c0f" />
            </linearGradient>
             <filter id="tree-icon-glow" x="-50%" y="-50%" width="200%" height="200%">
               <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
            </filter>
        </defs>
        <g opacity={isFilled ? 1 : 0.4} filter="url(#tree-icon-glow)" style={{ transition: 'opacity 0.5s ease' }}>
            {/* Trunk */}
            <path d="M 45,95 C 42,70 58,70 55,95 Z" fill="#78350f" />
            
            {/* Foliage */}
            <circle cx="50" cy="45" r="40" fill="url(#tree-icon-foliage-gradient)"/>
            <circle cx="30" cy="55" r="25" fill="url(#tree-icon-foliage-gradient)"/>
            <circle cx="70" cy="55" r="25" fill="url(#tree-icon-foliage-gradient)"/>

             {/* Magical Orbs */}
            <circle cx="50" cy="35" r="6" fill="#fef08a" stroke="#facc15" strokeWidth="1.5"/>
            <circle cx="35" cy="65" r="5" fill="#f9a8d4" stroke="#f472b6" strokeWidth="1.5"/>
            <circle cx="68" cy="62" r="5" fill="#a78bfa" stroke="#8b5cf6" strokeWidth="1.5"/>
            <circle cx="52" cy="33" r="2" fill="white" opacity="0.8"/>
        </g>
    </svg>
);

export default TreeIcon;