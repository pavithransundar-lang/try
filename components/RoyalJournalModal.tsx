import React from 'react';
import CloseIcon from './icons/CloseIcon';

interface RoyalJournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: string[];
}

const RoyalJournalModal: React.FC<RoyalJournalModalProps> = ({ isOpen, onClose, messages }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="journal-title"
    >
      <div 
        className="bg-gradient-to-br from-white to-purple-50 w-full max-w-lg rounded-2xl shadow-2xl p-6 relative border border-purple-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-purple-500 hover:text-purple-700 transition"
          aria-label="Close journal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <h2 id="journal-title" className="text-3xl font-bold text-center text-purple-700 mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Celine's Royal Journal 📖
        </h2>
        <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-2">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="bg-purple-100/50 p-3 rounded-lg border border-purple-200">
                <p className="italic text-purple-800">"{msg}"</p>
              </div>
            )).reverse() // Show newest first
          ) : (
            <p className="text-center text-purple-600 p-4">
              Catch butterflies to collect magical messages here!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoyalJournalModal;