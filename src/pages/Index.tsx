import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ServiceTypeGrid } from "@/components/ServiceTypeGrid";
import { TrendingSection } from "@/components/TrendingSection";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Loader2, Sparkles } from "lucide-react";
import type { Restaurant } from "@/types/restaurant";
import { MOCK_RESTAURANTS } from "@/data/mockData";
import { calculatePriceForTwo } from "@/lib/priceUtils";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  /* 
   * Removed auto-redirect to login. 
   * Home page should be accessible to all users.
   */
  useEffect(() => {
    // Optional: Check session state if needed for other logic, 
    // but do not redirect.
  }, []);

  const { data: restaurants, isLoading } = useQuery<Restaurant[]>({
    queryKey: ["restaurants"],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return MOCK_RESTAURANTS;
    },
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilters(prev => {
      // Handle mutual exclusivity for Veg/Non-Veg
      if (filterId === 'pure-veg' && !prev.includes('pure-veg')) {
        return [...prev.filter(f => f !== 'non-veg'), 'pure-veg'];
      }
      if (filterId === 'non-veg' && !prev.includes('non-veg')) {
        return [...prev.filter(f => f !== 'pure-veg'), 'non-veg'];
      }

      return prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId];
    });
  };

  const handleClearFilters = () => {
    setActiveFilters([]);
  };

  const filteredRestaurants = useMemo(() => {
    if (!restaurants) return [];

    // First apply search query if exists
    let result = restaurants;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.name?.toLowerCase().includes(query) ||
          r.cuisine_primary?.toLowerCase().includes(query) ||
          r.type?.toLowerCase().includes(query)
      );
    }

    // Then apply category filter if selected
    if (selectedCategory) {
      const category = selectedCategory.toLowerCase().replace(/-/g, " ");
      result = result.filter(
        (r) =>
          r.cuisine_primary?.toLowerCase().includes(category) ||
          r.type?.toLowerCase().includes(category)
      );
    } else if (!searchQuery.trim()) {
      // Default view: Show only core "Restaurants" if no search or filter is active
      // This hides Cloud Kitchens, Caterings, etc. from the main list initially
      result = result.filter(r => r.type === "Restaurant");
    }

    // Then apply active filters from FilterBar
    if (activeFilters.length > 0) {
      if (activeFilters.includes('pure-veg')) {
        result = result.filter(r => r.is_veg === true);
      }
      if (activeFilters.includes('non-veg')) {
        result = result.filter(r => r.is_veg === false);
      }
      if (activeFilters.includes('rating-3')) {
        result = result.filter(r => (r.rating || 0) >= 3);
      }
      if (activeFilters.includes('rating-4')) {
        result = result.filter(r => (r.rating || 0) >= 4);
      }
    }

    return result;
  }, [restaurants, searchQuery, selectedCategory, activeFilters]);

  // Derived state for trending restaurants
  const trendingRestaurants = useMemo(() => {
    if (!restaurants) return [];
    return restaurants.filter(r => r.is_trending);
  }, [restaurants]);


  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      setTimeout(() => {
        document.getElementById('restaurant-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    navigate(`/restaurant/${restaurant.slug || restaurant.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Enhanced Hero Section with Food Background */}
      <section className="hero-food-bg flex items-center justify-center py-24 relative overflow-hidden">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Title */}
          <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl">
              Find Your Next Meal
            </h1>
            <p className="text-xl text-white/90 font-medium drop-shadow-lg">
              Compare prices, discover deals, save money
            </p>
          </div>

          {/* Search Bar */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-150 relative z-50">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              suggestions={filteredRestaurants}
              onResultSelect={handleRestaurantSelect}
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {/* Service Type Grid */}
      <ServiceTypeGrid onSelect={handleCategorySelect} />

      {/* Trending Restaurants */}
      {trendingRestaurants.length > 0 && (
        <TrendingSection restaurants={trendingRestaurants} />
      )}

      {/* Category Filter */}
      <CategoryFilter
        activeCategory={selectedCategory}
        onCategoryChange={handleCategorySelect}
      />

      {/* Restaurants Grid */}
      <section id="restaurant-grid" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">
                {searchQuery || selectedCategory || activeFilters.length > 0
                  ? `${filteredRestaurants.length} ${filteredRestaurants.length === 1 ? 'Restaurant' : 'Restaurants'} Found`
                  : 'All Restaurants'}
              </h2>
            </div>
            {(searchQuery || selectedCategory || activeFilters.length > 0) && filteredRestaurants.length > 0 && (
              <span className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
                Showing filtered results
              </span>
            )}
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <Loader2 className="w-14 h-14 animate-spin text-yellow-500 mb-4" />
              <p className="text-gray-500 font-medium">Loading delicious options...</p>
            </div>
          ) : filteredRestaurants.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-800 text-3xl font-bold mb-2">No Restaurants Found</p>
              <p className="text-gray-500 text-lg mb-8">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                  setActiveFilters([]);
                }}
                className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/30"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in duration-500">
              {filteredRestaurants.map((restaurant, index) => (
                <div
                  key={restaurant.id}
                  className="animate-in fade-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <RestaurantCard
                    id={restaurant.id}
                    name={restaurant.name}
                    slug={restaurant.slug}
                    type={restaurant.type}
                    cuisinePrimary={restaurant.cuisine_primary}
                    priceRange={restaurant.price_range}
                    coverImage={restaurant.cover_image}
                    logo={restaurant.logo}
                    address={restaurant.address}
                    isVerified={restaurant.is_verified}
                    externalUrl={restaurant.external_url}
                    description={restaurant.description}
                    rating={restaurant.rating}
                    isVeg={restaurant.is_veg}
                    priceForTwo={calculatePriceForTwo(restaurant.menu || [])}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 text-center border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 font-medium text-lg mb-2">
            © {new Date().getFullYear()} MenuPrice
          </p>
          <p className="text-yellow-600 font-semibold">Honest pricing, always.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
