import { useState } from "react";
import { MapPin, ChefHat, Star, Sparkles } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  slug: string;
  type: string;
  cuisinePrimary: string;
  priceRange: string;
  coverImage: string;
  logo: string;
  address: string;
  isVerified: boolean;
}

export const RestaurantCard = ({
  name,
  type,
  cuisinePrimary,
  priceRange,
  coverImage,
  logo,
  address,
  isVerified,
}: RestaurantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-2 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={coverImage} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white transition-transform duration-300 group-hover:scale-110">
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-4 right-4 animate-fade-in">
          <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">{type}</span>
        </div>
      </div>

      <div className="p-5 pt-8">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{name}</h3>
          {isVerified && <Star className="w-5 h-5 text-purple-600 fill-purple-600 animate-pulse" />}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <ChefHat className="w-4 h-4 text-purple-500" />
          <span>{cuisinePrimary}</span>
          <span className="text-purple-600 font-semibold">{priceRange}</span>
        </div>
        <div className="flex items-start gap-2 text-xs text-gray-500 mb-4">
          <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
          <span className="line-clamp-1">{address}</span>
        </div>
        <button className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl hover:shadow-purple-500/50">
          View Menu
        </button>
      </div>

      {isHovered && (
        <>
          <div className="absolute top-4 left-4 animate-ping">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <div className="absolute bottom-4 right-4 animate-ping" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="w-4 h-4 text-purple-300" />
          </div>
        </>
      )}
    </div>
  );
};