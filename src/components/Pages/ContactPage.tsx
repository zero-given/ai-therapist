import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-indigo-600"
        >
          Contact Us
        </motion.h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-8">
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="flex items-center space-x-4"
            >
              <Mail className="h-6 w-6 text-indigo-600" />
              <div>
                <h2 className="text-xl font-semibold">Email Us</h2>
                <a href="mailto:support@there.ai" className="text-indigo-600 hover:text-indigo-700">
                  support@there.ai
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="flex items-center space-x-4"
            >
              <Phone className="h-6 w-6 text-indigo-600" />
              <div>
                <h2 className="text-xl font-semibold">Call Us</h2>
                <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-700">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="flex items-center space-x-4"
            >
              <MessageCircle className="h-6 w-6 text-indigo-600" />
              <div>
                <h2 className="text-xl font-semibold">Live Chat</h2>
                <p className="text-gray-600">Available 24/7 through our chat interface</p>
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="mt-8 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}