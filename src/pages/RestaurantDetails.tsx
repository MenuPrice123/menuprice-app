import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Plus, Minus } from "lucide-react";
import { MOCK_RESTAURANTS } from "@/data/mockData";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { FloatingCartBar } from "@/components/FloatingCartBar";
import { useCart } from "@/context/CartContext";

// ... previous imports

const MenuWithCategories = ({
    menu,
    getItemQuantity,
    handleIncrement,
    handleDecrement
}: {
    menu: any[];
    getItemQuantity: (id: string) => number;
    handleIncrement: (item: any) => void;
    handleDecrement: (id: string) => void;
}) => {
    // Extract unique categories, ensuring "All" is first
    const categories = ["All", ...Array.from(new Set(menu.map(item => item.category || "Others")))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? menu
        : menu.filter(item => (item.category || "Others") === activeCategory);

    return (
        <div>
            {/* Horizontal Categories Scroll */}
            <div className="sticky top-[72px] z-10 bg-gray-50/95 backdrop-blur-sm -mx-4 px-4 py-2 border-b border-gray-200 mb-6 overflow-x-auto no-scrollbar">
                <div className="flex gap-2 min-w-max">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? "bg-gray-900 text-white shadow-md transform scale-105"
                                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
                {filteredItems.map((item) => {
                    const quantity = getItemQuantity(item.id);
                    return (
                        <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col sm:flex-row h-full">
                            <div className="sm:w-32 sm:h-auto h-48 relative shrink-0">
                                <img
                                    src={item.photo}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80';
                                    }}
                                />
                                {item.price && (
                                    <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-sm font-bold backdrop-blur-sm sm:hidden">
                                        ₹{item.price}
                                    </div>
                                )}
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">{item.name}</h3>
                                    {item.description && (
                                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                                    )}
                                    <div className="flex gap-2">
                                        <span className="inline-block px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded border border-gray-200">
                                            {item.category || "General"}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-dashed flex flex-col gap-2">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            {item.swiggy_price && (
                                                <div className="text-xs text-gray-500 line-through mb-1">
                                                    ₹{item.swiggy_price}
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-gray-900 text-lg">₹{item.price}</span>
                                                {item.swiggy_price && item.price < item.swiggy_price && (
                                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                                        Save ₹{item.swiggy_price - item.price}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Quantity Controls */}
                                        {quantity > 0 ? (
                                            <div className="flex items-center gap-3 bg-white border border-green-600 rounded-md px-2 py-1">
                                                <button
                                                    onClick={() => handleDecrement(item.id)}
                                                    className="text-green-700 hover:text-green-800 transition-colors p-1"
                                                >
                                                    <Minus size={16} strokeWidth={3} />
                                                </button>
                                                <span className="font-bold text-green-700 w-4 text-center">{quantity}</span>
                                                <button
                                                    onClick={() => handleIncrement(item)}
                                                    className="text-green-700 hover:text-green-800 transition-colors p-1"
                                                >
                                                    <Plus size={16} strokeWidth={3} />
                                                </button>
                                            </div>
                                        ) : (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-green-600 text-green-600 hover:bg-green-50"
                                                onClick={() => handleIncrement(item)}
                                            >
                                                Add +
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {filteredItems.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No items found in this category.</p>
                </div>
            )}
        </div>
    );
};



const RestaurantDetails = () => {
    const { slug } = useParams();
    const { addToCart, items: cartItems, updateQuantity, removeFromCart } = useCart();
    const restaurant = MOCK_RESTAURANTS.find((r) => r.slug === slug || r.id === slug);

    if (!restaurant) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Restaurant Not Found</h1>
                <Link to="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        );
    }

    const getItemQuantity = (itemId: string) => {
        const item = cartItems.find(i => i.id === itemId);
        return item ? item.quantity : 0;
    };

    const handleIncrement = (item: any) => {
        const quantity = getItemQuantity(item.id);
        if (quantity === 0) {
            addToCart(item);
        } else {
            updateQuantity(item.id, 1);
        }
    };

    const handleDecrement = (itemId: string) => {
        const quantity = getItemQuantity(itemId);
        if (quantity === 1) {
            removeFromCart(itemId);
        } else if (quantity > 1) {
            updateQuantity(itemId, -1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Header />

            {/* Hero Section */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-8">
                    <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Restaurants
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-md">
                            <img
                                src={restaurant.cover_image}
                                alt={restaurant.name}
                                className="w-full h-64 object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    {restaurant.name}
                                </h1>
                                <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                                    <Star className="w-5 h-5 text-green-600 fill-current" />
                                    <span className="font-bold text-green-700">{restaurant.rating}</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-gray-600 mb-6">
                                <p className="flex items-center gap-2">
                                    <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-medium uppercase tracking-wide text-gray-600">
                                        {restaurant.cuisine_primary}
                                    </span>
                                    <span className="text-gray-400">•</span>
                                    <span>{restaurant.price_range}</span>
                                    <span className="text-gray-400">•</span>
                                    <span className={restaurant.is_veg ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                                        {restaurant.is_veg ? "Pure Veg" : "Non-Veg"}
                                    </span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {restaurant.address}
                                </p>
                                {restaurant.description && (
                                    <p className="text-sm text-gray-500 max-w-2xl mt-4">
                                        {restaurant.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>

                {!restaurant.menu || restaurant.menu.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                        <p className="text-gray-500 text-lg">Menu not listed yet.</p>
                    </div>
                ) : (
                    <MenuWithCategories
                        menu={restaurant.menu}
                        getItemQuantity={getItemQuantity}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                    />
                )}
            </div>

            <FloatingCartBar />
        </div>
    );
};

export default RestaurantDetails;
