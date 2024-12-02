import React from 'react';
import { motion } from 'framer-motion';

interface TherapistToggleProps {
  profile: 'professional' | 'conversational';
  onProfileChange: (profile: 'professional' | 'conversational') => void;
}

export function TherapistToggle({ profile, onProfileChange }: TherapistToggleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-indigo-100 flex flex-col space-y-2"
    >
      <div className="text-sm font-medium text-gray-600 mb-2">Therapist Style</div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onProfileChange('professional')}
        className={`px-4 py-2 rounded-lg transition-colors text-sm ${
          profile === 'professional'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Professional
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onProfileChange('conversational')}
        className={`px-4 py-2 rounded-lg transition-colors text-sm ${
          profile === 'conversational'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Conversational
      </motion.button>
    </motion.div>
  );
}
