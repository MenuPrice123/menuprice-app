import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";
// Removed sonner import as it is not installed

// Declare Razorpay on window
declare global {
    interface Window {
        Razorpay: any;
    }
}

export const CartSheet = () => {
    const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    // PLACEHOLDER KEY - Replace with user's actual Test Key ID
    const RAZORPAY_KEY_ID = "rzp_test_placeholder";

    const handleCheckout = () => {
        if (items.length === 0) return;

        if (RAZORPAY_KEY_ID === "rzp_test_placeholder") {
            alert("Please REPLACE 'rzp_test_placeholder' in src/components/CartSheet.tsx with your actual Razorpay Test Key ID to proceed with payment.");
            return;
        }

        const options = {
            key: RAZORPAY_KEY_ID,
            amount: total * 100, // Amount in paise
            currency: "INR",
            name: "Menu Price App",
            description: "Food Order Payment",
            handler: function (response: any) {
                console.log("Payment Success:", response);
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                clearCart();
                setIsOpen(false);
            },
            prefill: {
                name: "Test User",
                email: "test@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#9333ea", // Purple-600
            },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response: any) {
            alert(`Payment Failed: ${response.error.description}`);
        });
        rzp1.open();
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {items.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {items.length}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <ShoppingCart className="h-12 w-12 mb-2 opacity-50" />
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-16 w-16 object-cover rounded-md"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                                        <p className="text-purple-600 font-bold text-sm">₹{item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() => updateQuantity(item.id, -1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="border-t pt-4 mt-auto">
                        <div className="flex justify-between items-center mb-4 text-lg font-bold">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={handleCheckout}>
                            Checkout (Razorpay)
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};
