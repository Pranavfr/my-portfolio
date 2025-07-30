import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-800 border-t border-gray-700 perspective-1000">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 btn-3d animate-bounce-3d animate-glow magnetic"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center animate-fade-in-up">
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Pranav Rathore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;