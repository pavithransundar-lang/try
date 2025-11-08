import React from 'react';

const DiamondIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={className}
    >
        <defs>
            <linearGradient id="diamond-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
        </defs>
        <path fill="url(#diamond-gradient)" d="M12 2.25c.968 0 1.895.422 2.53 1.125l6.062 6.563c.531.573.743 1.352.578 2.099l-1.375 6.188a2.25 2.25 0 01-2.172 1.771H5.375a2.25 2.25 0 01-2.172-1.771L1.828 12.036a2.25 2.25 0 01.578-2.099l6.063-6.563A3.75 3.75 0 0112 2.25z" />
        <path fill="rgba(255,255,255,0.5)" d="M12 4.53l-5.45 5.9L12 11.5l5.45-1.07L12 4.53z" />
    </svg>
);

export default DiamondIcon;