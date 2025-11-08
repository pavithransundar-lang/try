import React from 'react';

const SparkleIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        aria-hidden="true"
    >
        <defs>
            <linearGradient id="sparkle-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
        </defs>
        <path fill="url(#sparkle-gradient)" clipRule="evenodd" fillRule="evenodd" d="M10 2.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 2.5zM10 13.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75zM3.25 10a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM12.5 10a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM5.394 5.394a.75.75 0 011.06 0l2.475 2.475a.75.75 0 01-1.06 1.06L5.394 6.455a.75.75 0 010-1.06zM12.025 12.025a.75.75 0 011.06 0l2.475 2.475a.75.75 0 01-1.06 1.06l-2.475-2.475a.75.75 0 010-1.06zM5.394 14.606a.75.75 0 010-1.06l2.475-2.475a.75.75 0 011.06 1.06L6.455 14.606a.75.75 0 01-1.06 0zM12.025 7.975a.75.75 0 010-1.06l2.475-2.475a.75.75 0 011.06 1.06L13.085 7.975a.75.75 0 01-1.06 0z"></path>
    </svg>
);

export default SparkleIcon;