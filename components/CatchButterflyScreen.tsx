import React, { useState, useEffect, useRef } from 'react';
import CloseIcon from './icons/CloseIcon';

interface Butterfly {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color1: string;
  color2: string;
  size: number;
}

const createButterfly = (id: number, width: number, height: number): Butterfly => {
    const size = Math.random() * 30 + 40;
    return {
        id,
        x: Math.random() * (width - size),
        y: Math.random() * (height - size),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color1: `hsl(${Math.random() * 360}, 100%, 75%)`,
        color2: `hsl(${Math.random() * 360}, 100%, 75%)`,
        size,
    };
};

const CatchButterflyScreen: React.FC<{ onCatch: () => void }> = ({ onCatch }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);
  const [caught, setCaught] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch(err => {
          console.error("Error accessing camera: ", err);
          // Fallback or error message
        });
    }

    if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setButterflies(Array.from({ length: 8 }, (_, i) => createButterfly(i, width, height)));
    }
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [butterflies]);

  const animate = () => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    setButterflies(prev => prev.map(b => {
      let newX = b.x + b.vx;
      let newY = b.y + b.vy;
      let newVx = b.vx;
      let newVy = b.vy;

      if (newX <= 0 || newX >= width - b.size) newVx = -newVx;
      if (newY <= 0 || newY >= height - b.size) newVy = -newVy;

      // Add slight random movement
      newVx += (Math.random() - 0.5) * 0.2;
      newVy += (Math.random() - 0.5) * 0.2;

      // Clamp velocity
      newVx = Math.max(-2, Math.min(2, newVx));
      newVy = Math.max(-2, Math.min(2, newVy));

      return { ...b, x: newX, y: newY, vx: newVx, vy: newVy };
    }));
  };

  const handleCatch = (id: number) => {
    setCaught(id);
    setTimeout(() => {
        onCatch();
    }, 500); // wait for poof animation
  };

  return (
    <div ref={containerRef} className="fixed inset-0 bg-gray-900 w-full h-full">
      <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover transform -scale-x-100" />
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white text-center bg-black/30 p-3 rounded-xl">
        <p className="font-bold text-lg">Tap a butterfly to catch it!</p>
      </div>

      <button onClick={onCatch} className="absolute top-4 right-4 md:top-6 md:right-6 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600 transition shadow-lg">
        <CloseIcon className="w-6 h-6" />
      </button>

      {butterflies.map(b => (
        <div
          key={b.id}
          className={`absolute transition-all duration-500 ease-out ${caught === b.id ? 'transform scale-150 opacity-0' : ''}`}
          style={{ 
            left: b.x, 
            top: b.y,
            width: b.size,
            height: b.size,
          }}
          onClick={() => handleCatch(b.id)}
        >
            <div 
                className="absolute w-1/2 h-full rounded-full rounded-r-none origin-right animate-flutter-left"
                style={{ background: `radial-gradient(circle, ${b.color1}, ${b.color2})` }}
            ></div>
            <div 
                className="absolute right-0 w-1/2 h-full rounded-full rounded-l-none origin-left animate-flutter-right"
                style={{ background: `radial-gradient(circle, ${b.color1}, ${b.color2})` }}
            ></div>
        </div>
      ))}
       <style>{`
        @keyframes flutter-left {
            0%, 100% { transform: rotateY(0deg); }
            50% { transform: rotateY(45deg); }
        }
        @keyframes flutter-right {
            0%, 100% { transform: rotateY(0deg); }
            50% { transform: rotateY(-45deg); }
        }
        .animate-flutter-left { animation: flutter-left 0.5s infinite; }
        .animate-flutter-right { animation: flutter-right 0.5s infinite; }
      `}</style>
    </div>
  );
};

export default CatchButterflyScreen;