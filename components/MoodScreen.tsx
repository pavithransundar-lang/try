import React, { useState } from 'react';

interface MoodScreenProps {
  onStart: () => void;
}

const moods = [
  { emoji: '😄', label: 'Happy & Ready!' },
  { emoji: '🙂', label: 'Feeling Okay' },
  { emoji: '😥', label: 'A Bit Tired' },
];

const MoodScreen: React.FC<MoodScreenProps> = ({ onStart }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setTimeout(onStart, 500); // Wait for animation before proceeding
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/60 text-center animate-fade-in-up">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        How are you feeling today, Princess Celine?
      </h2>
      <div className="flex justify-around items-center">
        {moods.map((mood, index) => (
          <div
            key={mood.label}
            className={`flex flex-col items-center cursor-pointer p-4 rounded-2xl transition-all duration-300 ${
              selected === index ? 'transform scale-110 bg-pink-200/50' : 'hover:bg-purple-100/50'
            }`}
            onClick={() => handleSelect(index)}
            role="button"
            aria-pressed={selected === index}
            tabIndex={0}
          >
            <span className="text-6xl mb-2 transition-transform duration-300 transform hover:scale-110">{mood.emoji}</span>
            <p className="font-semibold text-purple-600">{mood.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodScreen;