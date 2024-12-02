import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Crisis Disclaimer */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Crisis Support</h3>
            <p className="text-gray-300">
              If you are in crisis or experiencing suicidal or homicidal thoughts, please contact 000 or access{' '}
              <a 
                href="/resources" 
                className="underline hover:text-indigo-300 transition-colors"
              >
                these resources
              </a>
              {' '}for emergency assistance.
            </p>
          </div>

          {/* Additional Footer Content */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">THERE.</h3>
            <p className="text-gray-300">
              Online therapy platform providing professional support when you need it most.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} THERE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
