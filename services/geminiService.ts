import { GoogleGenAI } from "@google/genai";
import { STUDENT_NAME } from '../constants';

export const getMotivationalMessage = async (): Promise<string> => {
    if (!process.env.API_KEY) {
        console.warn("API_KEY environment variable not set. Using fallback message.");
        return `Wonderful reading, Princess ${STUDENT_NAME}! You're one step closer on your quest!`;
    }
    
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `You are a magical fairy godmother. Generate a very short (under 15 words), positive, and encouraging princess-themed message for a wonderful student named ${STUDENT_NAME}. She just completed a reading task and earned a magical butterfly on her quest to the castle.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        // FIX: Per Gemini API guidelines, access the 'text' property directly.
        return response.text;
    } catch (error) {
        console.error("Error fetching motivational message from Gemini:", error);
        return `Amazing job, ${STUDENT_NAME}! Keep shining bright on your reading adventure!`;
    }
};
