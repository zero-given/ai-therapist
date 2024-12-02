import React from 'react';

export function CrisisBanner() {
  return (
    <div className="bg-indigo-900 text-white py-4 px-4 text-center">
      <p className="max-w-4xl mx-auto">
        If you are in crisis or experiencing suicidal or homicidal thoughts, please contact 000 or access{' '}
        <a 
          href="/resources" 
          className="underline hover:text-indigo-200 transition-colors"
        >
          these resources
        </a>
        {' '}for emergency assistance.
      </p>
    </div>
  );
}
