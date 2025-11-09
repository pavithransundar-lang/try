import React from 'react';

const TreeIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
        style={{ overflow: 'visible' }}
    >
        <defs>
            <linearGradient id="tree-trunk-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8C5A4A" />
                <stop offset="50%" stopColor="#6B4226" />
                <stop offset="100%" stopColor="#8C5A4A" />
            </linearGradient>
            <radialGradient id="tree-foliage-grad-light" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#65A30D" />
                <stop offset="100%" stopColor="#4D7C0F" />
            </radialGradient>
            <radialGradient id="tree-foliage-grad-dark" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" stopColor="#4D7C0F" />
                <stop offset="100%" stopColor="#365314" />
            </radialGradient>
            <filter id="tree-icon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            </filter>
        </defs>
        <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
            {/* Ground */}
            <path d="M 5 85 C 20 80, 80 80, 95 85 Q 90 95, 10 95 Z" fill="#4D7C0F" />
            <path d="M 5 88 C 20 83, 80 83, 95 88 Q 90 98, 10 98 Z" fill="#365314" opacity="0.5"/>

            {/* Trunk and Roots */}
            <path d="M 50 90 C 40 60, 45 50, 48 40 L 52 40 C 55 50, 60 60, 50 90 Z" fill="url(#tree-trunk-grad)" />
            <path d="M 50 90 C 30 90, 35 75, 25 80 C 15 85, 20 95, 30 92" fill="url(#tree-trunk-grad)" />
            <path d="M 50 90 C 70 90, 65 75, 75 80 C 85 85, 80 95, 70 92" fill="url(#tree-trunk-grad)" />

            {/* Foliage */}
            <g>
                <circle cx="50" cy="40" r="35" fill="url(#tree-foliage-grad-dark)"/>
                <circle cx="25" cy="45" r="25" fill="url(#tree-foliage-grad-light)"/>
                <circle cx="75" cy="45" r="25" fill="url(#tree-foliage-grad-light)"/>
                <circle cx="50" cy="30" r="28" fill="url(#tree-foliage-grad-light)"/>
            </g>

            {/* Glowing Sprites */}
            {isFilled && (
                <g>
                    <circle cx="20" cy="70" r="3" fill="#FDE047" filter="url(#tree-icon-glow)" className="animate-pulse" style={{ animationDelay: '0s' }}/>
                    <circle cx="80" cy="65" r="2.5" fill="#FBBF24" filter="url(#tree-icon-glow)" className="animate-pulse" style={{ animationDelay: '0.3s' }}/>
                    <circle cx="50" cy="20" r="2" fill="#FEF3C7" filter="url(#tree-icon-glow)" className="animate-pulse" style={{ animationDelay: '0.6s' }}/>
                </g>
            )}
        </g>
    </svg>
);

export default TreeIcon;