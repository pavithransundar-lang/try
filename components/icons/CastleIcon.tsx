import React from 'react';

const CastleIcon: React.FC<{ className?: string; isFilled?: boolean; }> = ({ className = '', isFilled }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      {/* Texture for a subtle, storybook feel */}
      <filter id="castle-texture" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="1" result="texture"/>
        <feDiffuseLighting in="texture" lightingColor="#fff" surfaceScale="1">
          <feDistantLight azimuth="45" elevation="60"/>
        </feDiffuseLighting>
        <feComposite in="SourceGraphic" in2="specularLighting" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="lit"/>
        <feBlend in="lit" in2="SourceGraphic" mode="multiply" />
      </filter>
      <pattern id="texture-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
        <image href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E" x="0" y="0" width="100" height="100"/>
      </pattern>
    </defs>
    
    <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
        <g style={{ filter: 'url(#castle-texture)' }}>
            {/* Main Wall */}
            <path d="M40 180 V 100 H 160 V 180 Z" fill="#FBCFE8"/>
            {/* Crenellations */}
            <path d="M40 100 h10 v-10 h15 v10 h15 v-10 h15 v10 h15 v-10 h15 v10 h15 v-10 h10 v10 Z" fill="#F472B6" />

            {/* Left Tower */}
            <path d="M30 140 V 60 H 70 V 140 Z" fill="#FEF3C7" />
            <path d="M30 100 h10 v-10 h15 v10 h10 v-40 h-35 Z" fill="#FEF3C7" />

            {/* Right Tower */}
            <path d="M130 140 V 60 H 170 V 140 Z" fill="#FEF3C7" />
            <path d="M130 100 h10 v-10 h15 v10 h10 v-40 h-35 Z" fill="#FEF3C7" />

            {/* Central Tower */}
            <path d="M80 100 V 40 H 120 V 100 Z" fill="#FBCFE8" />

            {/* Roofs */}
            <path d="M30 60 L 50 25 L 70 60 Z" fill="#5B21B6"/>
            <path d="M130 60 L 150 25 L 170 60 Z" fill="#5B21B6"/>
            <path d="M80 40 L 100 5 L 120 40 Z" fill="#5B21B6"/>
            
            {/* Door */}
            <path d="M90 180 v -35 a 10 10 0 0 1 20 0 v 35" fill="#4C1D95"/>

            {/* Windows */}
            <path d="M45 70 a 5 5 0 0 1 10 0 v15 a 5 5 0 0 1 -10 0 Z" fill="#5B21B6" />
            <path d="M145 70 a 5 5 0 0 1 10 0 v15 a 5 5 0 0 1 -10 0 Z" fill="#5B21B6" />

            {/* Flags */}
            <path d="M50 25 V 10 L 60 15 Z" fill="#F472B6"/>
            <path d="M150 25 V 10 L 160 15 Z" fill="#F472B6"/>
        </g>
        {/* Apply texture overlay */}
        <rect x="0" y="0" width="200" height="200" fill="url(#texture-pattern)" opacity="0.05" />
    </g>
  </svg>
);

export default CastleIcon;