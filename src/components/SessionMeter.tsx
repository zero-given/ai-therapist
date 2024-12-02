import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { calculateSessionCost, formatCurrency } from '../lib/utils';
import { useStore } from '../store/useStore';

export const SessionMeter: React.FC = () => {
  const { sessionTokens, user } = useStore();
  const cost = calculateSessionCost(sessionTokens);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-warm-200"
    >
      <div className="flex items-center gap-2 mb-2">
        <DollarSign className="h-5 w-5 text-warm-600" />
        <span className="font-medium text-warm-800">Session Cost</span>
      </div>
      <div className="text-2xl font-bold text-warm-700">{formatCurrency(cost)}</div>
      <div className="text-sm text-warm-600">
        Balance: {formatCurrency(user?.balance ?? 0)}
      </div>
      <div className="mt-2 h-1 bg-warm-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-warm-500"
          initial={{ width: 0 }}
          animate={{
            width: `${Math.min((cost / (user?.balance ?? 1)) * 100, 100)}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};