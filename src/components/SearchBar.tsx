import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden hover-lift">
          <Search className="w-5 h-5 text-purple-600 ml-5 animate-pulse" />
          <input
            type="text"
            placeholder="Search restaurants, cuisines, or dishes..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-300"
          />
          <button className="px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};