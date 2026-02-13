import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { chatWithGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm Joyonto's AI Assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await chatWithGemini(userMsg);

    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-neon-blue/10 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] ${isOpen ? 'hidden' : 'block'}`}
      >
        <Bot size={24} />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] md:w-[400px] h-[500px] glass-panel rounded-2xl flex flex-col z-50 overflow-hidden border border-neon-blue/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-black/40 flex justify-between items-center">
              <div className="flex items-center gap-2 text-neon-blue">
                <Bot size={20} />
                <span className="font-display font-bold">Joyonto AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-neon-blue/20 text-white rounded-br-none border border-neon-blue/20' : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-white/10 p-3 rounded-lg rounded-bl-none flex items-center gap-2">
                        <Loader size={16} className="animate-spin text-neon-blue" />
                        <span className="text-xs text-gray-400">Processing...</span>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-black/40 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about Joyonto..."
                  className="flex-1 bg-black/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-blue"
                  disabled={isLoading}
                />
                <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="p-2 bg-neon-blue/10 text-neon-blue rounded-lg hover:bg-neon-blue hover:text-black transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-[10px] text-gray-600 mt-2 text-center">
                Powered by Gemini 2.5 Flash
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;