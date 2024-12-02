import React from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { SessionMeter } from './components/SessionMeter';
import { SetupGuide } from './components/SetupGuide';
import { useStore } from './store/useStore';
import { motion } from 'framer-motion';
import { sendMessage } from './lib/claude';
import { isConfigured } from './config/env';

function App() {
  const { messages, addMessage, updateSessionTokens, isTyping, setIsTyping } = useStore();

  const handleSendMessage = async (content: string) => {
    const userMessage = {
      id: Date.now().toString(),
      content,
      role: 'user' as const,
      timestamp: new Date(),
    };
    addMessage(userMessage);

    setIsTyping(true);
    try {
      const response = await sendMessage(content);
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        role: 'assistant' as const,
        timestamp: new Date(),
      };
      addMessage(assistantMessage);
      updateSessionTokens(response.tokens.input + response.tokens.output);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I encountered an error. Please try again.',
        role: 'assistant' as const,
        timestamp: new Date(),
      };
      addMessage(errorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-warm-50 via-warm-100 to-warm-200">
      <header className="bg-white/70 backdrop-blur-sm border-b border-warm-200 px-6 py-4 relative z-10">
        <h1 className="text-2xl font-semibold text-warm-700 text-center">AI Therapist</h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6 relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm -z-10" />
        {!isConfigured ? (
          <SetupGuide />
        ) : (
          <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                content={message.content}
                role={message.role}
              />
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-warm-700 italic ml-12"
              >
                AI is typing...
              </motion.div>
            )}
          </div>
        )}
      </main>

      {isConfigured && (
        <>
          <div className="max-w-2xl mx-auto w-full px-4 mb-4">
            <ChatInput onSend={handleSendMessage} disabled={isTyping} />
          </div>
          <SessionMeter />
        </>
      )}
    </div>
  );
}

export default App;