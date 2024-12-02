import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 ${isUser ? 'ml-3' : 'mr-3'}`}>
          {isUser ? (
            <div className="bg-indigo-100 rounded-full p-2">
              <User className="h-6 w-6 text-indigo-600" />
            </div>
          ) : (
            <div className="bg-purple-100 rounded-full p-2">
              <Bot className="h-6 w-6 text-purple-600" />
            </div>
          )}
        </div>
        <div
          className={`rounded-lg px-4 py-2 ${
            isUser
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message}</p>
          <span className="text-xs opacity-75 block mt-1">{timestamp}</span>
        </div>
      </div>
    </div>
  );
}