import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';
import SparkleIcon from './icons/SparkleIcon';

interface ChatBotProps {
    onClose: () => void;
}

interface Message {
    role: 'user' | 'model';
    text: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'model',
            text: "Hello Princess Celine! I'm your magical helper. Ask me anything!"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = () => {
            if (!process.env.API_KEY) {
                setError("I'm sorry, my magic is sleeping right now. Please check the API Key.");
                return;
            }
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const chat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: "You are a friendly and magical chatbot for a young student named Celine. Keep your answers concise, positive, and easy for a child to understand. Use princess and magic themes when appropriate.",
                    }
                });
                chatRef.current = chat;
            } catch (e) {
                console.error("Failed to initialize chat:", e);
                setError("Something went wrong with my magic spells. Please try again later.");
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        const trimmedInput = inputValue.trim();
        if (!trimmedInput || isLoading || !chatRef.current) return;

        const newUserMessage: Message = { role: 'user', text: trimmedInput };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await chatRef.current.sendMessage({ message: trimmedInput });
            const modelResponse: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelResponse]);
        } catch (err) {
            console.error("Error sending message to Gemini:", err);
            setError("My crystal ball is a bit cloudy... Could you ask again?");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border-2 border-purple-200 transition-transform duration-300 transform-gpu animate-fade-in-up">
            {/* Header */}
            <header className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-t-xl text-white">
                <div className="flex items-center space-x-2">
                    <SparkleIcon className="w-6 h-6 text-yellow-300" />
                    <h2 className="font-bold text-lg">Magical Helper</h2>
                </div>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition" aria-label="Close chat">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-purple-50">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center text-lg flex-shrink-0">✨</div>}
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm md:text-base ${msg.role === 'user'
                                ? 'bg-pink-500 text-white rounded-br-none'
                                : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                            }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                        <div className="w-8 h-8 rounded-full bg-pink-300 flex items-center justify-center text-lg flex-shrink-0">✨</div>
                        <div className="max-w-[80%] p-3 rounded-2xl bg-white text-gray-800 rounded-bl-none shadow-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                )}
                 {error && <div className="text-center text-red-500 text-sm p-2">{error}</div>}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-purple-200 bg-white rounded-b-xl">
                <div className="relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask a question..."
                        className="w-full p-3 pr-12 rounded-full border-2 border-purple-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
                        disabled={isLoading || !!error}
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim() || isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        aria-label="Send message"
                    >
                        <SendIcon className="w-5 h-5" />
                    </button>
                </div>
            </form>
             <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ChatBot;
