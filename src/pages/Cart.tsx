
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, ShoppingBag, Car, Info } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

import { supabase } from "@/integrations/supabase/client";

const Cart = () => {
    const { items, total, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();
    const [address, setAddress] = useState("");

    const handleCheckout = async (serviceType: string) => {
        const { data: { session } } = await supabase.auth.getSession();
        const checkoutState = { serviceType, address: serviceType === 'location' ? address : undefined };

        // Save state to localStorage to persist across auth redirects
        localStorage.setItem('checkoutState', JSON.stringify(checkoutState));

        if (session) {
            navigate('/order-summary', { state: checkoutState });
        } else {
            navigate('/login?redirect=/order-summary');
        }
    };

    const itemTotal = total;
    const taxes = Math.round(total * 0.05);
    const platformFee = 10;
    const finalTotal = itemTotal + taxes + platformFee;

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-sm w-full">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Cart is empty</h2>
                    <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
                    <Button onClick={() => navigate("/")} className="w-full bg-green-600 hover:bg-green-700">
                        Browse Restaurants
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Menu
                </Link>

                <h1 className="text-2xl font-bold text-gray-900 mb-6">Cart & Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Items & Bill Details */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Cart Items */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="p-4 border-b bg-gray-50">
                                <h2 className="font-semibold text-gray-700">Order Summary</h2>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {items.map((item) => (
                                    <div key={item.id} className="p-4 flex gap-4">
                                        <img src={item.photo} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-gray-100" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                                <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
                                            </div>


                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-100 rounded text-gray-600">-</button>
                                                    <span className="w-4 text-center font-medium text-sm">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-100 rounded text-green-600">+</button>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bill Details */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="p-4 border-b bg-gray-50">
                                <h2 className="font-semibold text-gray-700">Bill Details</h2>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between text-gray-600">
                                    <span>Item Total</span>
                                    <span>₹{itemTotal}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span className="flex items-center gap-1">Taxes & Charges <Info className="w-3 h-3 text-gray-400" /></span>
                                    <span>₹{taxes}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Platform Fee</span>
                                    <span>₹{platformFee}</span>
                                </div>
                                <div className="border-t pt-3 mt-3 flex justify-between font-bold text-lg text-gray-900">
                                    <span>To Pay</span>
                                    <span>₹{finalTotal}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Checkout Tabs */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-24">
                            <h2 className="font-bold text-lg text-gray-900 mb-4">Choose Service</h2>

                            <Tabs defaultValue="takeaway" className="w-full">
                                <TabsList className="grid w-full grid-cols-3 mb-6">
                                    <TabsTrigger value="takeaway">Takeaway</TabsTrigger>
                                    <TabsTrigger value="location">Location</TabsTrigger>
                                    <TabsTrigger value="ride">Book Ride</TabsTrigger>
                                </TabsList>

                                <TabsContent value="takeaway" className="space-y-4">
                                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
                                        <ShoppingBag className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                        <p className="text-sm text-green-800 font-medium">Safe & Contactless Pickup</p>
                                        <p className="text-xs text-green-600">Pick up your order directly from the restaurant.</p>
                                    </div>
                                    <Button onClick={() => handleCheckout('takeaway')} className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
                                        Proceed to Checkout
                                    </Button>
                                </TabsContent>

                                <TabsContent value="location" className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-2">Delivery Address</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <textarea
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none min-h-[100px]"
                                                placeholder="Enter full address"
                                            />
                                        </div>
                                    </div>
                                    <Button onClick={() => handleCheckout('delivery')} className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
                                        Proceed to Checkout
                                    </Button>
                                </TabsContent>

                                <TabsContent value="ride" className="space-y-4">
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                                        <Car className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                                        <p className="text-sm text-blue-800 font-medium">Dine-in? Book a Ride</p>
                                        <p className="text-xs text-blue-600">Get a ride to the restaurant and your table will be ready.</p>
                                    </div>
                                    <Button onClick={() => handleCheckout('ride')} className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                                        Proceed to Checkout
                                    </Button>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
