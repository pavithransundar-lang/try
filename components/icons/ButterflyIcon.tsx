import React from 'react';

interface ButterflyIconProps {
  className?: string;
  isFilled?: boolean;
}

const ButterflyIcon: React.FC<ButterflyIconProps> = ({ className = '', isFilled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="bf-wing-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bf-wing-grad-purple" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="bf-wing-grad-gold" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <filter id="bf-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>
      
      <g opacity={isFilled ? 1 : 0.4} style={{ transition: 'opacity 0.5s ease' }}>
        {/* Glow effect */}
        {isFilled && (
          <g filter="url(#bf-glow-filter)" opacity="0.6">
              <circle cx="60" cy="45" r="30" fill="url(#bf-wing-glow)" />
          </g>
        )}
        
        {/* Particles */}
        <circle cx="85" cy="20" r="3" fill="#FDE047" opacity={isFilled ? 0.9 : 0} className="animate-pulse" style={{animationDelay: '0s'}}/>
        <circle cx="95" cy="50" r="4" fill="#FBBF24" opacity={isFilled ? 0.7 : 0} className="animate-pulse" style={{animationDelay: '0.2s'}} />
        <circle cx="20" cy="80" r="2.5" fill="#FDE047" opacity={isFilled ? 0.8 : 0} className="animate-pulse" style={{animationDelay: '0.4s'}}/>
        
        {/* Main wing shape */}
        <path 
          d="M 50 50 C 10 0, 20 20, 25 50 C 20 80, 10 100, 50 50 Z" 
          fill="url(#bf-wing-grad-gold)"
        />
        <path 
          d="M 40 50 C 20 15, 25 30, 30 50 C 25 70, 20 85, 40 50 Z" 
          fill="url(#bf-wing-grad-purple)" 
        />
        
        {/* Wing decorations */}
        <circle cx="35" cy="35" r="6" fill="#60A5FA" opacity="0.8" />
        <circle cx="33" cy="65" r="4" fill="#34D399" opacity="0.8" />
        <path d="M30 50 l-3 -3 l5 -1 l-1 5z" fill="#F472B6" opacity="0.9" transform="rotate(15 30 50)" />
      </g>
    </svg>
  );
};
export default ButterflyIcon;