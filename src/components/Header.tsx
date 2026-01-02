import { useState } from "react";
import { ChefHat, Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-purple-100 shadow-sm animate-slide-down">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 animate-float">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              MenuPrice
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium relative group">
              Restaurants
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Sign In
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 hover:text-purple-600 transition-colors duration-300">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-3 animate-slide-down">
            <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium py-2">Home</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium py-2">Restaurants</a>
            <a href="#" className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium py-2">About</a>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">Sign In</button>
          </div>
        )}
      </nav>
    </header>
  );
};