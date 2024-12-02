import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { formatTokens, calculateCost, formatCurrency } from '../../lib/utils';
import { useStore } from '../../store/useStore';

export function ApiUsageWidget() {
  const tokens = useStore((state) => state.tokens);
  const cost = calculateCost(tokens);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-indigo-100"
    >
      <div className="flex items-center gap-2 mb-2">
        <Cpu className="h-5 w-5 text-indigo-600" />
        <span className="font-medium text-indigo-900">API Usage</span>
      </div>
      <div className="space-y-1">
        <div className="text-sm text-indigo-800">
          Tokens: <span className="font-semibold">{formatTokens(tokens)}</span>
        </div>
        <div className="text-sm text-indigo-800">
          Cost: <span className="font-semibold">{formatCurrency(cost)}</span>
        </div>
      </div>
      <div className="mt-2 h-1 bg-indigo-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-600"
          initial={{ width: 0 }}
          animate={{
            width: `${Math.min((tokens / 10000) * 100, 100)}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}