import React from 'react';

const TreeIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={className}
    >
        <defs>
            <linearGradient id="foliage-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
        </defs>
        <path fill="#854d0e" d="M13,22 L13,15 L11,15 L11,22 L8,22 L8,14 C8,13.447 8.447,13 9,13 L15,13 C15.553,13 16,13.447 16,14 L16,22 L13,22 Z" />
        <path fill="url(#foliage-gradient)" d="M12,2 C17,2 21,6 21,11 C21,16 12,20 12,20 C12,20 3,16 3,11 C3,6 7,2 12,2 Z" />
    </svg>
);

export default TreeIcon;