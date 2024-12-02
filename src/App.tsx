import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Layout/Header';
import { ChatContainer } from './components/Chat/ChatContainer';
import { LandingPage } from './components/Landing/LandingPage';
import { AboutPage } from './components/Pages/AboutPage';
import { ContactPage } from './components/Pages/ContactPage';

export type Page = 'landing' | 'chat' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onStart={() => setCurrentPage('chat')} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'chat':
        return (
          <div className="h-screen flex flex-col">
            <Header onNavigate={setCurrentPage} currentPage={currentPage} />
            <motion.main
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 overflow-hidden"
            >
              <div className="h-full">
                <ChatContainer />
              </div>
            </motion.main>
          </div>
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {currentPage === 'landing' ? (
        renderPage()
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {renderPage()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;