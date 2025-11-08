import React from 'react';

interface ButterflyIconProps {
  className?: string;
  isFilled?: boolean; // Kept for prop compatibility
}

const ButterflyIcon: React.FC<ButterflyIconProps> = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <defs>
        <linearGradient id="butterflyWingLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <linearGradient id="butterflyWingRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d8b4fe" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path fill="url(#butterflyWingLeft)" d="M15,16 C12,14 12,10 15,8 C18,6 22,7 22,12 C22,17 18,18 15,16 Z" />
      <path fill="url(#butterflyWingRight)" d="M9,16 C12,14 12,10 9,8 C6,6 2,7 2,12 C2,17 6,18 9,16 Z" />
      <path fill="#4c1d95" d="M11,6 L13,6 L13,18 L11,18 Z" />
    </svg>
  );
};

export default ButterflyIcon;