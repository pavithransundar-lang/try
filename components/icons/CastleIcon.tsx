
import React from 'react';

const CastleIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={className}
    style={{ filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.2))' }}
  >
    <defs>
      <linearGradient id="castle-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#f0abfc" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id="roof-gradient" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <path fill="url(#castle-gradient)" d="M12 26h8v28h-8z M44 26h8v28h-8z M8 54h48v4H8z" />
    <path fill="url(#castle-gradient)" d="M20 18h24v36H20z" />
    <path fill="#e9d5ff" d="M26 38h12v10H26z" />
    <path fill="#c4b5fd" d="M28 40h8v6H28z" />
    <path fill="url(#roof-gradient)" d="M8 26l8-10 8 10z M40 26l8-10 8 10z" />
    <path fill="url(#roof-gradient)" d="M16 18l16-12 16 12z" />
    <path fill="#facc15" d="M31 2h2v6h-2z" />
  </svg>
);

export default CastleIcon;
