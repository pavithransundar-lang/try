import React from 'react';

interface ButterflyIconProps {
  className?: string;
  isFilled?: boolean;
}

const ButterflyIcon: React.FC<ButterflyIconProps> = ({ className = '', isFilled }) => {
  // The isFilled prop now controls whether the wings are solid or outlined.
  const fillStyle = isFilled ? 'currentColor' : 'none';
  const strokeStyle = 'currentColor';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fillStyle}
      stroke={strokeStyle}
      strokeWidth="1.5"
      className={className}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.5,15.1c-2.3-1.6-2.3-4.6,0-6.2c2.6-1.8,5.8-1,5.8,2.7C21.3,16.1,18.1,16.9,15.5,15.1z" 
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M8.5,15.1c2.3-1.6,2.3-4.6,0-6.2C5.9,7.1,2.8,7.9,2.8,11.6C2.8,16.1,5.9,16.9,8.5,15.1z" 
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12,5v14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10,5c-2.2,0-4-1.8-4-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14,5c2.2,0,4-1.8,4-4" />
    </svg>
  );
};

export default ButterflyIcon;