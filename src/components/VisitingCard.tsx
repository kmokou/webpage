import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import FallingPetals from './FallingPetals';
import PixelBackground from './PixelBackground';
import SocialLinks from './SocialLinks';

const VisitingCard = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <PixelBackground />
      
      {/* Falling petals animation */}
      <FallingPetals />

      {/* Theme toggle */}
      <ThemeToggle />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Hero section */}
        <header className="text-center mb-12">
          <div className="pixel-panel mb-8 max-w-md mx-auto">
            <h1 className={`font-pixel text-2xl sm:text-4xl mb-4 text-foreground`}>
              &nbsp;kmoku<span className="blinking-cursor">_</span>
            </h1>
            <p className="font-pixel text-xs sm:text-sm text-muted-foreground">
              Designer | Developer
            </p>
          </div>
        </header>

        {/* Social links */}
        <section className="mb-12" aria-label="Social media links">
          <SocialLinks />
        </section>

        {/* Decorative elements */}
        <div className="hidden sm:block absolute top-1/4 left-4 w-4 h-4 bg-pixel-sakura rounded-none opacity-60 animate-pulse" />
        <div className="hidden sm:block absolute top-1/3 right-8 w-3 h-3 bg-pixel-grass rounded-none opacity-40 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="hidden sm:block absolute bottom-1/4 left-8 w-2 h-2 bg-accent rounded-none opacity-50 animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary rounded-none opacity-30 animate-bounce" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-none opacity-30 animate-bounce" style={{animationDelay: '1.5s'}} />
      </div>

    </div>
  );
};

export default VisitingCard;