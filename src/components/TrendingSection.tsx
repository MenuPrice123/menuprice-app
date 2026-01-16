
import { Restaurant } from "@/types/restaurant";
import { RestaurantCard } from "./RestaurantCard";

interface TrendingSectionProps {
    restaurants: Restaurant[];
}

export const TrendingSection = ({ restaurants }: TrendingSectionProps) => {
    if (restaurants.length === 0) return null;

    return (
        <section id="trending-restaurants" className="py-8 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Trending Restaurants</h2>
                    <span className="text-sm font-medium text-yellow-600 cursor-pointer hover:underline">See All</span>
                </div>

                <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant.id} className="min-w-[280px] sm:min-w-[320px]">
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
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
