import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface SessionButtonsProps {
  onStart: () => void;
}

export function SessionButtons({ onStart }: SessionButtonsProps) {
  const [activeTooltip, setActiveTooltip] = useState<'temporary' | 'persistent' | null>(null);

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          onMouseEnter={() => setActiveTooltip('temporary')}
          onMouseLeave={() => setActiveTooltip(null)}
          className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
        >
          <span>Temporary Session</span>
          <Info className="h-5 w-5" />
        </motion.button>
        <AnimatePresence>
          {activeTooltip === 'temporary' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-10 w-64 p-4 mt-2 bg-white rounded-lg shadow-xl text-gray-700 text-sm"
            >
              A one-time session that starts immediately. Your conversation history will not be saved after you close the chat.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setActiveTooltip('persistent')}
          onMouseLeave={() => setActiveTooltip(null)}
          disabled
          className="w-full sm:w-auto bg-gray-200 text-gray-500 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <span>Persistent Session</span>
          <Info className="h-5 w-5" />
          <span className="text-sm">(Coming Soon)</span>
        </motion.button>
        <AnimatePresence>
          {activeTooltip === 'persistent' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-10 w-64 p-4 mt-2 bg-white rounded-lg shadow-xl text-gray-700 text-sm"
            >
              Create an account to save your chat history and continue your therapeutic journey across multiple sessions. (Feature coming soon)
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}