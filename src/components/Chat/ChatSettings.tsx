import React from 'react';
import { TherapistProfile } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ChatSettingsProps {
  profile: TherapistProfile;
  onProfileChange: (profile: TherapistProfile) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const profileDescriptions: Record<TherapistProfile, string> = {
  professional: 'A more structured approach focusing on professional therapeutic guidance.',
  conversational: 'A more relaxed, friendly approach while maintaining therapeutic support and guidance.'
};

const ChatSettings: React.FC<ChatSettingsProps> = ({ 
  profile, 
  onProfileChange,
  isOpen,
  onClose 
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col space-y-6">
      <div className="space-y-4">
        <h2 className="text-white text-xl font-medium">Therapist Style</h2>
        <div className="flex flex-col space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => onProfileChange('professional')}
              className={`flex-1 px-3 py-2 rounded-lg border transition-all duration-200 ${
                profile === 'professional'
                  ? 'bg-white text-purple-600 border-transparent'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => onProfileChange('conversational')}
              className={`flex-1 px-3 py-2 rounded-lg border transition-all duration-200 ${
                profile === 'conversational'
                  ? 'bg-white text-purple-600 border-transparent'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              Conversational
            </button>
          </div>
          <p className="text-sm text-white/70">
            {profileDescriptions[profile]}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-white text-xl font-medium">API Usage</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-2">
          <div className="flex items-center space-x-2 text-white">
            <div className="w-5 h-5">📊</div>
            <span>API Usage</span>
          </div>
          <div className="text-white/70">
            <div>Tokens: 0</div>
            <div>Cost: $0.0000</div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-purple-600/95 backdrop-blur-lg rounded-t-xl p-4 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {ChatSettings}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className="w-[300px] max-w-[90vw]">
      {ChatSettings}
    </div>
  );
};

export default ChatSettings;
