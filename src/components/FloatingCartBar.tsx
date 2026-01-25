
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const FloatingCartBar = () => {
    const { items, total, itemCount } = useCart();

    if (items.length === 0) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-5">
            <div className="bg-green-600 text-white p-4 rounded-xl shadow-lg shadow-green-900/20 flex items-center justify-between max-w-2xl mx-auto">
                <div className="flex flex-col">
                    <span className="font-bold text-sm uppercase tracking-wider opacity-90">
                        {itemCount} ITEM{itemCount !== 1 ? 'S' : ''}
                    </span>
                    <span className="font-bold text-lg">
                        ₹{total}
                    </span>
                </div>

                <Link to="/order-summary">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="font-bold text-green-700 bg-white hover:bg-gray-100"
                    >
                        View Cart <ShoppingBag className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};
