import { SlidersHorizontal } from "lucide-react";


interface FilterBarProps {
    activeFilters: string[];
    onFilterChange: (id: string) => void;
    onClearFilters: () => void;
}

export const FilterBar = ({ activeFilters, onFilterChange, onClearFilters }: FilterBarProps) => {

    const filters = [
        { id: "pure-veg", label: "Pure Veg" },
        { id: "non-veg", label: "Non Veg" },
        { id: "rating-3", label: "Ratings 3.0+" },
        { id: "rating-4", label: "Ratings 4.0+" },
    ];

    return (
        <div className="filter-bar sticky top-16 z-40">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-1">
                    {/* Filters Button */}
                    <button
                        className="filter-chip flex items-center gap-2 flex-shrink-0"
                        onClick={onClearFilters}
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>Filters</span>
                    </button>

                    {/* Filter Chips */}
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => onFilterChange(filter.id)}
                            className={`filter-chip flex-shrink-0 ${activeFilters.includes(filter.id) ? "active" : ""
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
