import { Search, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Restaurant } from "@/types/restaurant";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  suggestions?: Restaurant[];
  onResultSelect?: (restaurant: Restaurant) => void;
}

export const SearchBar = ({ value, onChange, suggestions = [], onResultSelect }: SearchBarProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasSuggestions = value.trim().length > 0 && suggestions.length > 0;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && hasSuggestions && onResultSelect) {
      onResultSelect(suggestions[0]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto relative" ref={wrapperRef}>
      <div className="search-bar relative z-20">
        <input
          type="text"
          placeholder="Search for restaurants, dishes, or cuisines..."
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          className="bg-transparent w-full"
        />
        <button className="p-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-colors">
          <Search className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      {/* Auto-complete Dropdown */}
      {showSuggestions && hasSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-[300px] overflow-y-auto">
            {suggestions.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => {
                  onResultSelect?.(restaurant);
                  setShowSuggestions(false);
                }}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100">
                  <img src={restaurant.logo || restaurant.cover_image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900 truncate">{restaurant.name}</h4>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{restaurant.rating} ★</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 gap-2 truncate">
                    <span>{restaurant.cuisine_primary}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin size={10} /> {restaurant.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};