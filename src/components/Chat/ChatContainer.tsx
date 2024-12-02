import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useStore } from '../../store/useStore';
import { sendMessage as sendFirmMessage } from '../../lib/claude';
import { sendMessage as sendConversationalMessage } from '../../lib/claude2';
import ChatSettings from './ChatSettings';
import { TherapistProfile } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Settings, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Message as ApiMessage } from '../../lib/claude';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const INITIAL_MESSAGE = {
  id: 1,
  text: "Welcome to THERE online therapy, what's on your mind today? I'm one of the professional therapists here at THERE. My role is to provide a supportive, non-judgmental space for you to explore any thoughts, feelings or challenges you may be facing. I have training in various therapeutic modalities, and my approach is to listen with empathy and help guide you towards greater self-awareness and personal growth. Please feel free to share openly - everything you say will be kept completely confidential. I'm here to support you.",
  isUser: false,
  timestamp: new Date().toLocaleTimeString(),
};

export function ChatContainer({ isSettingsOpen, setIsSettingsOpen }: { 
  isSettingsOpen: boolean; 
  setIsSettingsOpen: (isOpen: boolean) => void 
}) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [therapistProfile, setTherapistProfile] = useState<'professional' | 'conversational'>('professional');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const incrementTokens = useStore((state) => state.incrementTokens);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Convert UI messages to API message format
  const getMessageHistory = (): ApiMessage[] => {
    return messages
      .filter(msg => msg !== INITIAL_MESSAGE) // Exclude the welcome message
      .map(msg => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text
      }));
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const history = getMessageHistory();
      const response = await (therapistProfile === 'professional' 
        ? sendFirmMessage(text, history) 
        : sendConversationalMessage(text, history));
      
      const aiResponse: Message = {
        id: messages.length + 2,
        text: response.content,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };

      if (isFirstMessage) {
        setIsFirstMessage(false);
      }

      setMessages((prev) => [...prev, aiResponse]);
      incrementTokens(response.tokens.input + response.tokens.output);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I apologize, but I'm having trouble responding right now. Please try again later.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      {isSettingsOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsSettingsOpen(false)}
          />
          <div className="fixed top-16 right-4 w-[280px] bg-purple-600/30 backdrop-blur-md rounded-xl p-4 z-50 shadow-lg">
            <div className="flex justify-end -mt-2 -mr-2">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ChatSettings 
              profile={therapistProfile} 
              onProfileChange={setTherapistProfile}
              isOpen={isSettingsOpen}
              onClose={() => setIsSettingsOpen(false)}
            />
          </div>
        </>
      )}
      {/* Main container */}
      <div className="max-w-3xl mx-auto px-4">
        {/* Chat container */}
        <div className="flex flex-col h-[calc(100vh-4rem)] pt-10">
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto space-y-4 bg-white/30 backdrop-blur-sm rounded-lg p-4 mt-16 mb-20">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input container - fixed to bottom */}
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 pb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}