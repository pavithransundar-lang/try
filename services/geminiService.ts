
import { GoogleGenAI } from "@google/genai";
import { STUDENT_NAME } from '../constants';

const getMotivationalMessage = async (): Promise<string> => {
    if (!process.env.API_KEY) {
        console.warn("API_KEY environment variable not set. Using fallback message.");
        return `Wonderful reading, Princess ${STUDENT_NAME}! You're one step closer to the castle!`;
    }
    
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = `You are a magical fairy godmother. Generate a very short (1-2 sentences), positive, and encouraging princess-themed message for a wonderful student named ${STUDENT_NAME}. She just earned a butterfly token for her reading. Congratulate her and motivate her to continue on her journey to the princess castle.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error fetching motivational message from Gemini:", error);
        return `Amazing job, ${STUDENT_NAME}! Keep shining bright on your reading adventure!`;
    }
};

export { getMotivationalMessage };
