
import React, { useState } from 'react';
import { CastleType, CASTLE_DESIGNS } from '../constants';
import CastleIcon from './icons/CastleIcon';
import FairytaleCastleIcon from './icons/FairytaleCastleIcon';
import CrystalCastleIcon from './icons/CrystalCastleIcon';
import ForestFortressIcon from './icons/ForestFortressIcon';

interface MoodScreenProps {
  onStart: (selectedCastle: CastleType) => void;
}

const moods = [
  { emoji: '😄', label: 'Happy & Ready!' },
  { emoji: '🙂', label: 'Feeling Okay' },
  { emoji: '😥', label: 'A Bit Tired' },
];

const castleComponents: Record<CastleType, {component: React.FC<any>, name: string}> = {
    classic: { component: CastleIcon, name: 'Classic' },
    fairytale: { component: FairytaleCastleIcon, name: 'Fairytale' },
    crystal: { component: CrystalCastleIcon, name: 'Crystal' },
    forest: { component: ForestFortressIcon, name: 'Forest' },
};

const MoodScreen: React.FC<MoodScreenProps> = ({ onStart }) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedCastle, setSelectedCastle] = useState<CastleType>(CASTLE_DESIGNS[0]);

  const handleSelectMood = (index: number) => {
    setSelectedMood(index);
    setTimeout(() => onStart(selectedCastle), 500); // Wait for animation before proceeding
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/60 text-center animate-fade-in-up">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6">
        How are you feeling today, Princess Celine?
      </h2>
      <div className="flex justify-around items-center">
        {moods.map((mood, index) => (
          <div
            key={mood.label}
            className={`flex flex-col items-center cursor-pointer p-4 rounded-2xl transition-all duration-300 ${
              selectedMood === index ? 'transform scale-110 bg-pink-200/50' : 'hover:bg-purple-100/50'
            }`}
            onClick={() => handleSelectMood(index)}
            role="button"
            aria-pressed={selectedMood === index}
            tabIndex={0}
          >
            <span className="text-6xl mb-2 transition-transform duration-300 transform hover:scale-110">{mood.emoji}</span>
            <p className="font-semibold text-purple-600">{mood.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-purple-200/50">
         <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">
            Choose a Castle for Your Quest
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CASTLE_DESIGNS.map((castleType) => {
                const CastleComponent = castleComponents[castleType].component;
                const isSelected = selectedCastle === castleType;
                return (
                    <div
                        key={castleType}
                        onClick={() => setSelectedCastle(castleType)}
                        className={`flex flex-col items-center p-3 rounded-2xl cursor-pointer border-4 transition-all duration-300 ${
                            isSelected ? 'border-pink-400 bg-pink-100/50 shadow-lg' : 'border-transparent hover:bg-purple-100/50'
                        }`}
                        role="button"
                        aria-pressed={isSelected}
                        tabIndex={0}
                    >
                        <div className="w-24 h-24 bg-white/50 rounded-full p-2">
                             <CastleComponent isFilled={true} />
                        </div>
                        <p className={`mt-2 font-semibold ${isSelected ? 'text-pink-600' : 'text-purple-600'}`}>
                            {castleComponents[castleType].name}
                        </p>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default MoodScreen;
