import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound } from 'lucide-react';

export const SetupGuide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-warm-100 rounded-full">
          <KeyRound className="h-6 w-6 text-warm-600" />
        </div>
        <h2 className="text-2xl font-semibold text-warm-800">Setup Required</h2>
      </div>
      
      <div className="space-y-4 text-warm-700">
        <p>To start using the AI Therapist, you need to set up your Claude API key:</p>
        
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Go to <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" className="text-warm-600 hover:text-warm-700 underline">Anthropic Console</a></li>
          <li>Create an account or sign in</li>
          <li>Navigate to API Keys and create a new key</li>
          <li>Create a <code className="px-2 py-1 bg-warm-50 rounded text-warm-800">.env</code> file in the project root</li>
          <li>Add your Claude API key:</li>
          <pre className="bg-warm-50 p-4 rounded-lg text-warm-800 mt-2">
            VITE_CLAUDE_API_KEY=your_claude_api_key_here
          </pre>
          <li>Restart the development server</li>
        </ol>

        <div className="mt-6 p-4 bg-warm-50 rounded-lg border border-warm-200">
          <h3 className="font-semibold text-warm-800 mb-2">Important Notes:</h3>
          <ul className="list-disc list-inside space-y-1 text-warm-600">
            <li>Keep your API key secure and never share it</li>
            <li>Don't commit the .env file to version control</li>
            <li>The app uses Claude 3.5 Sonnet New model for optimal performance and cost-effectiveness</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};