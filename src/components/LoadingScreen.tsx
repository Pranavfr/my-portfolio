import React from 'react';
import { ShieldCheck } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 perspective-1000">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-rotate-3d"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <div className="mb-8 relative">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse-3d"></div>
            <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
              <ShieldCheck className="text-cyan-400 animate-float" size={32} />
            </div>
          </div>
          
          {/* Rotating rings */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24">
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-2 border-blue-500/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-pulse-3d">
          Pranav Rathore
        </h2>
        <p className="text-gray-400 mb-8 animate-fade-in-up">
          Initializing secure environment...
        </p>

        {/* Loading bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;