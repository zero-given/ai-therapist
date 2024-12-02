import React from 'react';
import { Brain, Settings } from 'lucide-react';
import { Page } from '../../App';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  setIsSettingsOpen: (isOpen: boolean) => void;
}

export function Header({ onNavigate, currentPage, setIsSettingsOpen }: HeaderProps) {
  const getLinkClass = (page: Page) => {
    return `hover:text-indigo-200 transition ${
      currentPage === page ? 'text-indigo-200 font-semibold' : ''
    }`;
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('landing')}
          >
            <Brain className="h-8 w-8" />
            <h1 className="text-2xl font-bold">THERE.</h1>
          </div>
          <div className="flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6 items-center">
                <li>
                  <button
                    onClick={() => onNavigate('chat')}
                    className={getLinkClass('chat')}
                  >
                    Chat
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className={getLinkClass('about')}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className={getLinkClass('contact')}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}