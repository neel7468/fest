import React from 'react';
import logoImg from '../assets/alogo.png';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative flex flex-col items-center">
        {/* Logo animation container */}
        <div className="relative w-48 h-48 animate-pulse">
          <img 
            src={logoImg} 
            alt="Anandadhara Logo" 
            className="w-full h-full object-contain"
          />
          
          {/* Spinning rings around the logo */}
          <div className="absolute inset-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-full h-full border-4 border-secondary border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        
        <div className="mt-8 text-center text-white font-semibold">
          <span className="inline-block animate-pulse">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;