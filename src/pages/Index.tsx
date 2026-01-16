import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ServiceTypeGrid } from "@/components/ServiceTypeGrid";
import { TrendingSection } from "@/components/TrendingSection";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Loader2 } from "lucide-react";
import type { Restaurant } from "@/types/restaurant";
import { MOCK_RESTAURANTS } from "@/data/mockData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/login");
      }
    });
  }, [navigate]);

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
        // Note: In a real app we would check menu tags too, assuming they are indexed on the restaurant
        // or we would join with menu items. For now we use the top level tags.
      );
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Food Background */}
      <section className="hero-food-bg flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {/* Service Type Grid */}
      <ServiceTypeGrid />

      {/* Trending Restaurants */}
      {trendingRestaurants.length > 0 && (
        <TrendingSection restaurants={trendingRestaurants} />
      )}

      {/* Category Filter */}
      <CategoryFilter
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Restaurants Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-yellow-500" />
            </div>
          ) : filteredRestaurants.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-800 text-2xl font-bold">NOT FOUND</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
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
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t bg-white">
        <p className="text-gray-600">
          © {new Date().getFullYear()} MenuPrice — Honest pricing, always
        </p>
      </footer>
    </div>
  );
};

export default Index;
