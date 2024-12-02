import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Shield, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-indigo-600"
        >
          About THERE.
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              We believe everyone deserves access to quality mental health support.
              Our AI-powered platform makes therapy accessible 24/7, wherever you are.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-pink-500 mr-3" />
              <h2 className="text-xl font-semibold">How We Help</h2>
            </div>
            <p className="text-gray-600">
              Through advanced AI technology and evidence-based therapeutic approaches,
              we provide a safe space for you to explore your thoughts and feelings.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-xl font-semibold">Privacy First</h2>
            </div>
            <p className="text-gray-600">
              Your privacy and security are our top priorities. All conversations
              are encrypted and handled with the utmost confidentiality.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-purple-500 mr-3" />
              <h2 className="text-xl font-semibold">Our Community</h2>
            </div>
            <p className="text-gray-600">
              Join thousands of users who have found support and guidance through
              our platform. You're never alone on your journey to better mental health.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}