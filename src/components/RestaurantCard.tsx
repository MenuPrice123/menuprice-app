import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

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
  externalUrl?: string;
  description?: string;
  rating?: number;
  isVeg?: boolean;
}

export const RestaurantCard = ({
  id,
  name,
  slug,
  cuisinePrimary,
  coverImage,
  externalUrl,
  description,
  rating,
  isVeg,
}: RestaurantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const displayRating = rating !== undefined ? rating.toFixed(1) : (4.0 + Math.random() * 1).toFixed(1);


  const CardContent = () => (
    <div
      className="restaurant-card h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section - Fixed Height */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Hover Overlay with View Menu Button */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-sm transform transition-transform duration-300 translate-y-2 hover:translate-y-0 shadow-lg">
            {externalUrl ? "Visit Website" : "View Menu"}
          </button>
        </div>
      </div>

      {/* Content Section - Grows to fill available space */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          Cuisine: {cuisinePrimary}
        </p>

        {/* Description - Swiggy/Zomato style */}
        <div className="flex-grow">
          {description && (
            <p className="text-xs text-gray-500 mb-4 line-clamp-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Footer Section - Pushed to bottom */}
        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${parseFloat(displayRating) >= star
                  ? 'text-yellow-400 fill-current' // Changed to yellow-400 to match design
                  : 'text-gray-300'
                  }`}
              />
            ))}
            <span className="text-sm font-semibold text-gray-700 ml-1">{displayRating}</span>
          </div>

          <div className="w-full py-2 bg-yellow-100 text-yellow-800 rounded-lg font-bold text-sm text-center">
            ₹ Price for two
          </div>
        </div>
      </div>
    </div>
  );

  // If external URL exists, use anchor tag, otherwise use Link
  if (externalUrl) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent />
      </a>
    );
  }

  return (
    <Link to={`/restaurant/${slug || id}`} className="block h-full">
      <CardContent />
    </Link>
  );
};