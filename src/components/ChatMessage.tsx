import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  role: 'user' | 'assistant';
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ content, role }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${
        role === 'user' ? 'flex-row-reverse' : 'flex-row'
      } mb-4`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-md ${
          role === 'assistant' ? 'bg-warm-100' : 'bg-warm-500'
        }`}
      >
        {role === 'assistant' ? (
          <Bot className="h-5 w-5 text-warm-600" />
        ) : (
          <User className="h-5 w-5 text-white" />
        )}
      </div>
      <div
        className={`rounded-2xl px-4 py-2 max-w-[80%] shadow-md ${
          role === 'assistant'
            ? 'bg-white/80 backdrop-blur-sm text-warm-900'
            : 'bg-warm-500 text-white'
        }`}
      >
        {content}
      </div>
    </motion.div>
  );
};