import React from 'react';

const KeyIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={className}
    >
        <defs>
            <linearGradient id="key-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
        </defs>
        <path fill="url(#key-gradient)" fillRule="evenodd" d="M15.75 1.5a3.75 3.75 0 00-3.75 3.75v4.5a3.75 3.75 0 003.75 3.75h3a3.75 3.75 0 003.75-3.75V5.25a3.75 3.75 0 00-3.75-3.75h-3zm-3.75 4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V6z" clipRule="evenodd" />
        <path fill="url(#key-gradient)" d="M10.5 12a1.5 1.5 0 01-1.5 1.5H3.75v2.25a1.5 1.5 0 001.5 1.5h1.5v2.25a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5V13.5a1.5 1.5 0 00-1.5-1.5h-1.5z" />
    </svg>
);

export default KeyIcon;