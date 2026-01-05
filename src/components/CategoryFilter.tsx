import { Pizza, Beef, Fish, Coffee, Salad, IceCream, Soup, Cookie } from "lucide-react";
import { useState } from "react";

export const CategoryFilter = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = [
        { id: "burger", icon: Beef, label: "Burger" },
        { id: "pizza", icon: Pizza, label: "Pizza" },
        { id: "biryani", icon: Soup, label: "Biryani" },
        { id: "chinese", icon: Fish, label: "Chinese" },
        { id: "south-indian", icon: Coffee, label: "South Indian" },
        { id: "north-indian", icon: Salad, label: "North Indian" },
        { id: "desserts", icon: IceCream, label: "Desserts" },
        { id: "rolls", icon: Cookie, label: "Rolls" },
    ];

    return (
        <div className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-2">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === category.id;

                        return (
                            <div
                                key={category.id}
                                className="flex flex-col items-center gap-3 min-w-[80px] cursor-pointer group"
                                onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
                            >
                                <div className={`category-icon ${isActive ? 'active' : ''}`}>
                                    <Icon className={`w-8 h-8 transition-colors ${isActive ? 'text-yellow-500' : 'text-gray-700'}`} />
                                </div>
                                <span className={`text-sm font-medium transition-colors ${isActive ? 'text-yellow-600' : 'text-gray-700'}`}>
                                    {category.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
