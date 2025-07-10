import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggle from '../components/ThemeToggle';
import FallingPetals from '../components/FallingPetals';
import PixelBackground from '../components/PixelBackground';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <PixelBackground />
      {/* Falling petals animation */}
      <FallingPetals />
      {/* Theme toggle */}
      <ThemeToggle />
    <div className="relative z-20 min-h-screen flex items-center justify-center">
    <div className="pixel-panel mb-8 max-w-md mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700">
          Return to Home
        </a>
      </div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;
