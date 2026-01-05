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
}

export const RestaurantCard = ({
  id,
  name,
  cuisinePrimary,
  coverImage,
  externalUrl,
  description,
}: RestaurantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const rating = (4.0 + Math.random() * 1).toFixed(1);

  const CardContent = () => (
    <div
      className="restaurant-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={name}
          className="restaurant-card-image"
        />

        {/* Hover Overlay with View Menu Button */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="view-menu-btn">
            {externalUrl ? "Visit Website" : "View Menu"}
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mb-3">
          Cuisine: {cuisinePrimary}
        </p>

        {/* Description - Swiggy/Zomato style */}
        {description && (
          <p className="text-xs text-gray-500 mb-3 line-clamp-3 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${parseFloat(rating) >= star
                  ? 'star fill-current'
                  : 'text-gray-300'
                }`}
            />
          ))}
        </div>

        <div className="price-badge">
          ₹ Price for two
        </div>
      </div>
    </div>
  );

  // If external URL exists, use anchor tag, otherwise use Link
  if (externalUrl) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    );
  }

  return (
    <Link to={`/restaurant/${id}`}>
      <CardContent />
    </Link>
  );
};