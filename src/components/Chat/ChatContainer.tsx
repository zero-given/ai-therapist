import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useStore } from '../../store/useStore';
import { sendMessage as sendFirmMessage } from '../../lib/claude';
import { sendMessage as sendConversationalMessage } from '../../lib/claude2';
import ChatSettings from './ChatSettings';

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

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const incrementTokens = useStore((state) => state.incrementTokens);
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [therapistProfile, setTherapistProfile] = useState<'professional' | 'conversational'>('professional');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      const response = await (therapistProfile === 'professional' 
        ? sendFirmMessage(text) 
        : sendConversationalMessage(text));
      
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
    <div className="h-full bg-gradient-to-br from-purple-600 to-pink-500 flex">
      <div className="absolute left-4 top-4">
        <ChatSettings 
          profile={therapistProfile} 
          onProfileChange={setTherapistProfile} 
        />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-1/2 h-full flex flex-col p-4">
          <div className="flex-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 h-full flex flex-col">
              <div className="flex-1 space-y-4">
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
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}