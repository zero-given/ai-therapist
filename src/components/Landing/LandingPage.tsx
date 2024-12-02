import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Shield, MessageSquare, Sparkles } from 'lucide-react';
import { SessionButtons } from './SessionButtons';
import BenefitsSection from '../Features/BenefitsSection';
import { Footer } from '../Layout/Footer';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <main>
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex justify-center items-center mb-8"
            >
              <div className="relative">
                <Brain className="h-24 w-24" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -right-4 -top-4"
                >
                  <Heart className="h-8 w-8 text-pink-300" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-6xl font-bold">THERE.</h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-2xl text-indigo-100 mb-12 mt-6"
            >
              Online Therapy, Whenever You Need It
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStart}
                className="bg-white text-indigo-600 px-12 py-4 rounded-lg text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Start Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <BenefitsSection />

        {/* Session Types Section */}
        <div className="bg-white py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Session Type</h2>
              <p className="text-xl text-gray-600 mb-16">Select the therapy session that best fits your needs</p>
              <SessionButtons onStart={onStart} />
            </motion.div>

            <div className="h-32 border-b border-gray-200"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-16 mb-24"
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose THERE.</h2>
              <p className="text-xl text-indigo-100 mb-16">Experience therapy on your terms, with the support you deserve</p>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    icon: <MessageSquare className="h-8 w-8 text-white" />,
                    title: "24/7 Support",
                    description: "Access therapeutic support anytime, anywhere. We're always here to listen."
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-white" />,
                    title: "Complete Privacy",
                    description: "Your conversations are encrypted and completely confidential."
                  },
                  {
                    icon: <Sparkles className="h-8 w-8 text-white" />,
                    title: "AI-Powered Insights",
                    description: "Advanced AI technology provides personalized therapeutic guidance."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm p-10 rounded-xl shadow-lg hover:bg-white/20 transition-all"
                  >
                    <div className="flex justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-indigo-100">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}