import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { MOCK_RESTAURANTS, MOCK_MENU_ITEMS } from "@/data/mockData";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Loader2, Plus, Star, MapPin, Clock } from "lucide-react";
import { Restaurant } from "@/types/restaurant";

const RestaurantDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const { data: restaurant, isLoading } = useQuery<Restaurant>({
        queryKey: ["restaurant", id],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            const found = MOCK_RESTAURANTS.find(r => r.id === id);
            if (!found) throw new Error("Restaurant not found");
            return found;
        },
        enabled: !!id,
    });

    const menuItems = MOCK_MENU_ITEMS;
    const rating = restaurant ? (4.0 + Math.random() * 1).toFixed(1) : "4.5";
    const deliveryTime = Math.floor(25 + Math.random() * 15);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="w-12 h-12 animate-spin text-yellow-500" />
            </div>
        );
    }

    if (!restaurant) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-600">Restaurant not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Restaurant Header */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex items-start gap-6">
                        <img
                            src={restaurant.cover_image}
                            alt={restaurant.name}
                            className="w-32 h-32 rounded-lg object-cover shadow-lg"
                        />
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
                            <p className="text-lg text-gray-600 mb-4">{restaurant.cuisine_primary} • {restaurant.type}</p>

                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${parseFloat(rating) >= star
                                                        ? 'star fill-current'
                                                        : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="font-semibold text-gray-900">{rating}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-5 h-5" />
                                    <span>{deliveryTime} mins</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-5 h-5" />
                                    <span>{restaurant.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Menu</h2>
                    <span className="text-gray-600">{menuItems.length} items</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-item-card">
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="menu-item-image"
                                />
                                {item.is_veg ? (
                                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-green-500 text-white text-xs font-bold">
                                        VEG
                                    </div>
                                ) : (
                                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold">
                                        NON-VEG
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-lg text-gray-900 flex-1">
                                        {item.name}
                                    </h3>
                                    <span className="price-badge ml-4">₹{item.price}</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>

                                <Button
                                    variant="outline"
                                    onClick={() => addToCart(item)}
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 border-yellow-400 text-gray-900 font-semibold py-6"
                                >
                                    <Plus className="w-4 h-4 mr-2" /> Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
