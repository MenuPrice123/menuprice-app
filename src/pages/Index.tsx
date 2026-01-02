import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { RestaurantCard } from "@/components/RestaurantCard";
import { TrendingUp, Loader2 } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: restaurants, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("restaurants")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const filteredRestaurants = useMemo(() => {
    if (!restaurants) return [];
    if (!searchQuery.trim()) return restaurants;
    
    const query = searchQuery.toLowerCase();
    return restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(query) ||
        r.cuisine_primary.toLowerCase().includes(query) ||
        r.type.toLowerCase().includes(query)
    );
  }, [restaurants, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/50 to-transparent" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Discover Menu Prices
              <span className="block mt-2 gradient-text">
                Before You Dine
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
              Browse menus from your favorite restaurants and cloud kitchens. Know what to expect before you order.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>
      </section>
      
      {/* Trending Restaurants */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8 animate-fade-in-up">
            <TrendingUp className="w-6 h-6 text-purple-600 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-900">
              {searchQuery ? "Search Results" : "Trending Restaurants"}
            </h2>
            {filteredRestaurants.length > 0 && (
              <span className="text-sm text-gray-500 ml-2 px-3 py-1 bg-purple-100 rounded-full">
                {filteredRestaurants.length}
              </span>
            )}
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="relative">
                <Loader2 className="w-12 h-12 animate-spin text-purple-600" />
                <div className="absolute inset-0 blur-lg bg-purple-600/30 animate-pulse" />
              </div>
            </div>
          ) : filteredRestaurants.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-purple-600" />
              </div>
              <p className="text-lg text-gray-600">
                {searchQuery
                  ? "No restaurants found matching your search."
                  : "No restaurants available yet. Add some from the Admin page!"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant, index) => (
                <div
                  key={restaurant.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-purple-100 glass mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} MenuPrice. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;