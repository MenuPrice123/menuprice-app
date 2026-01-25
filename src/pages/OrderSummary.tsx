import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Checkout = () => {
    const { items, total } = useCart();
    const navigate = useNavigate();

    const [serviceType, setServiceType] = useState<string>('takeaway');
    const [address, setAddress] = useState<string>('');

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/login?redirect=/order-summary');
            } else {
                // Restore state if available
                const savedState = localStorage.getItem('checkoutState');
                if (savedState) {
                    const parsed = JSON.parse(savedState);
                    setServiceType(parsed.serviceType || 'takeaway');
                    if (parsed.address) setAddress(parsed.address);
                    // Optional: clear it? localStorage.removeItem('checkoutState');
                }
            }
        };
        checkAuth();
    }, [navigate]);

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Link to="/" className="text-yellow-600 hover:underline">
                    Go back to menu
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <Link to="/cart" className="flex items-center text-gray-600 mb-8 hover:text-gray-900">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Cart
                </Link>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Order Summary</h2>

                        <div className="space-y-6 mb-8">
                            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center py-4 border-b">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-900">{item.name}</span>
                                        <span className="ml-4 text-gray-500">x{item.quantity}</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="flex justify-between items-center pt-4 text-xl font-bold">
                                <span>Total</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {serviceType === 'takeaway' && (
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-6">
                                    <h3 className="text-lg font-bold text-green-800 mb-2">Takeaway Order</h3>
                                    <p className="text-green-700">You will pick up your order at the restaurant counter.</p>
                                </div>
                            )}

                            {serviceType === 'ride' && (
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                                    <h3 className="text-lg font-bold text-blue-800 mb-2">Ride & Dine Request</h3>
                                    <p className="text-blue-700">A ride will be booked to take you to the restaurant.</p>
                                </div>
                            )}

                            {serviceType === 'delivery' && (
                                <>
                                    <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            defaultValue={address}
                                        />
                                        <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                                        <input type="text" placeholder="Postal Code" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                                    </div>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => navigate('/payment')}
                            className="mt-8 w-full bg-yellow-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <CreditCard className="w-5 h-5" />
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
