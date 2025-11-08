import React from 'react';

const PrincessIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg 
        viewBox="0 0 120 160" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="princess">
            {/* Hair Back */}
            <path d="M 25 55 C 10 90, 20 120, 40 110 L 80 110 C 100 120, 110 90, 95 55 L 80 40 L 40 40 Z" fill="#a16b4f" />
            
            {/* Dress Skirt */}
            <path d="M 20 100 C 10 160, 110 160, 100 100 L 70 100 L 50 100 Z" fill="#f8a4c3" />
            <path d="M 25 105 C 20 155, 100 155, 95 105 Z" fill="#fbcfe8" />
            <path d="M 30 155 C 40 145, 80 145, 90 155 L 60 160 Z" fill="#f8a4c3" />

            {/* Dress Bodice */}
            <path d="M 45 80 L 75 80 L 80 100 L 40 100 Z" fill="#f472b6" />
            <circle cx="60" cy="90" r="4" fill="#fbcfe8"/>
            
            {/* Head */}
            <circle cx="60" cy="55" r="30" fill="#fce4d4" />

             {/* Hair Front */}
            <path d="M 30 55 C 20 30, 60 25, 60 25 C 60 25, 100 30, 90 55 C 100 65, 75 70, 60 70 C 45 70, 20 65, 30 55 Z" fill="#a16b4f" />
            <path d="M 35 32 C 45 22, 55 22, 60 28 L 60 20 Z" fill="#bf8c6f" />

            {/* Crown */}
            <path d="M 45 28 L 60 15 L 75 28 L 70 35 L 50 35 Z" fill="#fccb59" stroke="#f59e0b" strokeWidth="2" />
            
            {/* Eyes */}
            <circle cx="48" cy="58" r="6" fill="#4a2c2a" />
            <circle cx="72" cy="58" r="6" fill="#4a2c2a" />
            <circle cx="50" cy="56" r="2" fill="white" />
            <circle cx="74" cy="56" r="2" fill="white" />
            
            {/* Smile */}
            <path d="M 55 70 Q 60 75, 65 70" stroke="#c4505a" strokeWidth="2" fill="none" strokeLinecap="round" />

             {/* Blush */}
            <circle cx="42" cy="65" r="5" fill="#f8a4c3" opacity="0.7"/>
            <circle cx="78" cy="65" r="5" fill="#f8a4c3" opacity="0.7"/>
        </g>
    </svg>
);

export default PrincessIcon;
