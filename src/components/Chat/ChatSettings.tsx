import React from 'react';
import { TherapistProfile } from '../../types';
import { motion } from 'framer-motion';

interface ChatSettingsProps {
  profile: TherapistProfile;
  onProfileChange: (profile: TherapistProfile) => void;
}

const profileDescriptions: Record<TherapistProfile, string> = {
  professional: 'A more structured approach focusing on professional therapeutic guidance.',
  conversational: 'A more relaxed, friendly approach while maintaining therapeutic support and guidance.'
};

const ChatSettings: React.FC<ChatSettingsProps> = ({ profile, onProfileChange }) => {
  return (
    <div className="flex flex-col space-y-4 w-[300px]">
      <motion.div 
        className="bg-purple-600/30 backdrop-blur-md rounded-xl p-4"
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-white text-xl font-medium mb-4">Therapist Style</h2>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <button
                className={`flex-1 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  profile === 'professional'
                    ? 'bg-white border-white text-purple-600 font-medium'
                    : 'border-white/50 text-white hover:border-white'
                }`}
                onClick={() => onProfileChange('professional')}
              >
                Professional
              </button>
              <button
                className={`flex-1 px-4 py-2 rounded-lg border transition-all duration-200 ${
                  profile === 'conversational'
                    ? 'bg-white border-white text-purple-600 font-medium'
                    : 'border-white/50 text-white hover:border-white'
                }`}
                onClick={() => onProfileChange('conversational')}
              >
                Conversational
              </button>
            </div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-sm px-2"
            >
              {profileDescriptions[profile]}
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-purple-600/30 backdrop-blur-md rounded-xl p-4"
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-white text-xl font-medium mb-4">API Usage</h2>
        <div className="rounded-xl overflow-hidden">
          <div className="bg-white/90 p-4">
            <div className="flex items-center space-x-2 text-purple-600">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9h6v6H9V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">API Usage</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-gray-700">Tokens: {0}</div>
              <div className="text-gray-700">Cost: ${(0).toFixed(4)}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatSettings;
