import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        await onSend(message.trim());
        setMessage('');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-warm-200"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-warm-200 focus:outline-none focus:ring-2 focus:ring-warm-500 placeholder-warm-400"
        disabled={disabled || isSubmitting}
      />
      <Button 
        type="submit" 
        disabled={disabled || isSubmitting || !message.trim()}
        className="bg-warm-500 hover:bg-warm-600 focus:ring-warm-400"
      >
        <Send className="h-5 w-5" />
      </Button>
    </motion.form>
  );
};