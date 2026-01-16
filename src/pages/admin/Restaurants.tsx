
import { MOCK_RESTAURANTS } from "@/data/mockData";
import { Plus, Search, Edit2, Trash2, MapPin, Star } from "lucide-react";
import { useState } from "react";

export const RestaurantList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredRestaurants = MOCK_RESTAURANTS.filter((r) =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.cuisine_primary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Restaurants</h1>
                <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Restaurant
                </button>
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

            {/* Restaurants Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-600">Name</th>
                                <th className="px-6 py-4 font-semibold text-gray-600">Location</th>
                                <th className="px-6 py-4 font-semibold text-gray-600">Cuisine</th>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-center">Rating</th>
                                <th className="px-6 py-4 font-semibold text-gray-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredRestaurants.map((restaurant) => (
                                <tr key={restaurant.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <img
                                                src={restaurant.logo || restaurant.cover_image}
                                                alt={restaurant.name}
                                                className="w-8 h-8 rounded-full object-cover mr-3 bg-gray-200"
                                            />
                                            <span className="font-medium text-gray-900">{restaurant.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        <div className="flex items-center text-sm">
                                            <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                                            {restaurant.address}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                            {restaurant.cuisine_primary}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-bold">
                                            <Star className="w-3 h-3 mr-1 fill-current" />
                                            {restaurant.rating}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors">
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
                {filteredRestaurants.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No restaurants found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};
