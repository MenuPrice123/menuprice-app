import { MapPin, Search } from "lucide-react";

interface EnhancedSearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const EnhancedSearchBar = ({ value, onChange }: EnhancedSearchBarProps) => {
    return (
        <div className="max-w-4xl mx-auto mb-16">
            <div className="luxury-search flex flex-col md:flex-row gap-3 p-1">
                {/* Location Input */}
                <div className="flex items-center gap-3 px-6 py-4 border-r border-champagne-gold/10 flex-1">
                    <MapPin className="w-5 h-5 text-royal-gold flex-shrink-0" />
                    <input
                        type="text"
                        placeholder="Enter your location"
                        className="flex-1 bg-transparent outline-none text-soft-white placeholder:text-warm-cream/40"
                        defaultValue="Bangalore"
                    />
                </div>

                {/* Search Input */}
                <div className="flex items-center gap-3 px-6 py-4 flex-[2]">
                    <Search className="w-5 h-5 text-champagne-gold/60 flex-shrink-0" />
                    <input
                        type="text"
                        placeholder="Search restaurants, cuisines, or dishes"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-soft-white placeholder:text-warm-cream/40"
                    />
                </div>

                {/* Search Button */}
                <button className="btn-primary whitespace-nowrap m-1">
                    Search
                </button>
            </div>
        </div>
    );
};
