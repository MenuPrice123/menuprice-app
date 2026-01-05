import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants, dishes, or cuisines..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent"
        />
        <button className="p-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg transition-colors">
          <Search className="w-5 h-5 text-gray-900" />
        </button>
      </div>
    </div>
  );
};