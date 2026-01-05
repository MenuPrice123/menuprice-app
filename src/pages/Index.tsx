import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { CategoryFilter } from "@/components/CategoryFilter";
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

  const filteredRestaurants = useMemo(() => {
    if (!restaurants) return [];
    if (!searchQuery.trim()) return restaurants;

    const query = searchQuery.toLowerCase();
    return restaurants.filter(
      (r) =>
        r.name?.toLowerCase().includes(query) ||
        r.cuisine_primary?.toLowerCase().includes(query) ||
        r.type?.toLowerCase().includes(query)
    );
  }, [restaurants, searchQuery]);

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
      <FilterBar />

      {/* Category Filter */}
      <CategoryFilter />

      {/* Restaurants Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-yellow-500" />
            </div>
          ) : filteredRestaurants.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No restaurants found.</p>
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
