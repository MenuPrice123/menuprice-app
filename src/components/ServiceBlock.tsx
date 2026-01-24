
import { Restaurant } from "@/types/restaurant";
import { RestaurantCard } from "./RestaurantCard";

interface ServiceBlockProps {
    title: string;
    description: string;
    items: Restaurant[];
}

export const ServiceBlock = ({ title, description, items }: ServiceBlockProps) => {
    if (!items || items.length === 0) return null;

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                    <p className="text-gray-600 text-lg max-w-2xl">{description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="h-full">
                            <RestaurantCard
                                id={item.id}
                                name={item.name}
                                slug={item.slug}
                                type={item.type}
                                cuisinePrimary={item.cuisine_primary}
                                priceRange={item.price_range}
                                coverImage={item.cover_image}
                                logo={item.logo}
                                address={item.address}
                                isVerified={item.is_verified}
                                externalUrl={item.external_url}
                                description={item.description}
                                rating={item.rating}
                                isVeg={item.is_veg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
