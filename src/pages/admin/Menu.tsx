
import { MOCK_RESTAURANTS } from "@/data/mockData";
import { Search, Edit2, Trash2, ArrowLeft, UtensilsCrossed, MapPin, Star } from "lucide-react";
import { useState } from "react";

export const MenuManagement = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    // --- VIEW: RESTAURANT SELECTION ---
    if (!selectedRestaurantId) {
        const filteredRestaurants = MOCK_RESTAURANTS.filter((r) =>
            r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.cuisine_primary.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
                        <p className="text-gray-500 mt-1">Select a restaurant to manage its menu</p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search restaurants..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Restaurant Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRestaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            onClick={() => {
                                setSelectedRestaurantId(restaurant.id);
                                setSearchTerm(""); // Clear search when entering menu view
                            }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-300 transition-all cursor-pointer group"
                        >
                            <div className="h-40 overflow-hidden relative">
                                <img
                                    src={restaurant.cover_image}
                                    alt={restaurant.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center shadow-sm">
                                    <Star className="w-3 h-3 text-green-600 fill-current mr-1" />
                                    {restaurant.rating}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <img
                                        src={restaurant.logo || restaurant.cover_image}
                                        alt={restaurant.name}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm -mt-10"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">{restaurant.name}</h3>
                                        <p className="text-xs text-gray-500 flex items-center">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {restaurant.address}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 text-xs font-medium">
                                        {restaurant.cuisine_primary}
                                    </span>
                                    <span className="text-gray-400 text-xs flex items-center">
                                        <UtensilsCrossed className="w-3 h-3 mr-1" />
                                        {(restaurant.menu || []).length} items
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // --- VIEW: MENU ITEMS FOR SELECTED RESTAURANT ---
    const selectedRestaurant = MOCK_RESTAURANTS.find(r => r.id === selectedRestaurantId);

    // Safety check
    if (!selectedRestaurant) return <div>Restaurant not found</div>;

    const filteredItems = (selectedRestaurant.menu || []).filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Header / Navigation */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => {
                        setSelectedRestaurantId(null);
                        setSearchTerm("");
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{selectedRestaurant.name}</h1>
                    <p className="text-gray-500 text-sm">Managing Menu Items</p>
                </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder={`Search ${selectedRestaurant.name}'s menu...`}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-medium shadow-sm transition-colors flex items-center justify-center">
                    <UtensilsCrossed className="w-4 h-4 mr-2" />
                    Add New Item
                </button>
            </div>

            {/* Menu Items Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-600">Item Details</th>
                                <th className="px-6 py-4 font-semibold text-gray-600">Price</th>
                                <th className="px-6 py-4 font-semibold text-gray-600">Comparison</th>
                                <th className="px-6 py-4 font-semibold text-gray-600">Category</th>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredItems.map((item, idx) => (
                                <tr key={`${item.id}-${idx}`} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            {item.photo && (
                                                <img
                                                    src={item.photo}
                                                    alt={item.name}
                                                    className="w-12 h-12 rounded-lg object-cover mr-4 bg-gray-200 shadow-sm"
                                                />
                                            )}
                                            <div>
                                                <div className="font-bold text-gray-900">{item.name}</div>
                                                <div className="text-xs text-gray-500 truncate max-w-[200px] mt-0.5">{item.description || "No description"}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-gray-900">₹{item.price}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        {item.swiggy_price ? (
                                            <div className="flex flex-col">
                                                <span className="line-through text-red-400 text-xs">₹{item.swiggy_price}</span>
                                                <span className="text-green-600 text-xs font-bold">
                                                    Save {Math.round(((item.swiggy_price - item.price) / item.swiggy_price) * 100)}%
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-xs text-gray-400">No data</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 font-medium">
                                            {(item as any).category || "General"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredItems.length === 0 && (
                    <div className="p-12 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                            <UtensilsCrossed className="w-6 h-6 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No items found</h3>
                        <p className="text-gray-500 mt-1">Try adjusting your search or add a new item.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
