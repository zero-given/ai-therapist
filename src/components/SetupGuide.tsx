import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export const SetupGuide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-warm-100 rounded-full">
          <AlertCircle className="h-6 w-6 text-warm-600" />
        </div>
        <h2 className="text-2xl font-semibold text-warm-800">Connection Error</h2>
      </div>
      
      <div className="space-y-4 text-warm-700">
        <p>Unable to connect to the AI Therapist backend service. This could be due to:</p>
        
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>The backend service is still starting up (can take a few minutes)</li>
          <li>The API URL environment variable is not properly configured</li>
          <li>The backend service is experiencing issues</li>
        </ul>

        <div className="mt-6 p-4 bg-warm-50 rounded-lg border border-warm-200">
          <h3 className="font-semibold text-warm-800 mb-2">Troubleshooting Steps:</h3>
          <ul className="list-disc list-inside space-y-1 text-warm-600">
            <li>Wait a few minutes and refresh the page</li>
            <li>Check if the backend service is running</li>
            <li>Contact support if the issue persists</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};