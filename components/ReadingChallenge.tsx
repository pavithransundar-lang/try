import React from 'react';
import BookIcon from './icons/BookIcon';

interface ReadingChallengeProps {
  challenge: string | null;
  isLoading: boolean;
  error: string | null;
}

const ReadingChallenge: React.FC<ReadingChallengeProps> = ({ challenge, isLoading, error }) => {
    let content;
    const containerClasses = "min-h-[60px] w-full max-w-2xl mx-auto flex items-center justify-center text-center p-3 rounded-2xl shadow-md border border-white/30 text-purple-800";

    if (isLoading) {
        content = (
            <div className={`${containerClasses} bg-purple-100/50`}>
                <div className="flex items-center justify-center space-x-2">
                    <span className="italic text-purple-700">Conjuring a new challenge...</span>
                </div>
            </div>
        );
    } else if (error) {
        content = (
             <div className={`${containerClasses} bg-red-100/50`}>
                <p className="text-red-700">{error}</p>
            </div>
        );
    } else if (challenge) {
        content = (
            <div className={`${containerClasses} bg-sky-100/80`}>
                <BookIcon className="w-6 h-6 mr-3 text-sky-600 flex-shrink-0" />
                <h3 className="font-semibold italic text-sky-800">
                    "{challenge}"
                </h3>
            </div>
        );
    } else {
        return null;
    }

    return <div className="h-[70px] flex items-center justify-center">{content}</div>;
};

export default ReadingChallenge;
