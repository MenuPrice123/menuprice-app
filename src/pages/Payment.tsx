import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Payment = () => {
    const { total, clearCart } = useCart();
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/login?redirect=/payment');
            }
        };
        checkAuth();
    }, [navigate]);

    const handlePayment = () => {
        setProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setProcessing(false);
            setCompleted(true);
            clearCart();
        }, 2000);
    };

    if (completed) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
                    <p className="text-gray-600 mb-8">Thank you for your order. Your food will be on its way shortly.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-yellow-500 hover:bg-yellow-600"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment</h2>
                    <div className="mb-8 text-center">
                        <p className="text-gray-600 mb-2">Total Amount to Pay</p>
                        <p className="text-4xl font-bold text-gray-900">₹{total.toFixed(2)}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="p-4 border rounded-xl flex items-center gap-4 cursor-pointer hover:border-yellow-500 transition-colors">
                            <div className="w-12 h-8 bg-blue-600 rounded"></div>
                            <span className="font-medium">Credit / Debit Card</span>
                        </div>
                        <div className="p-4 border rounded-xl flex items-center gap-4 cursor-pointer hover:border-yellow-500 transition-colors">
                            <div className="w-12 h-8 bg-blue-400 rounded"></div>
                            <span className="font-medium">UPI</span>
                        </div>
                        <div className="p-4 border rounded-xl flex items-center gap-4 cursor-pointer hover:border-yellow-500 transition-colors">
                            <div className="w-12 h-8 bg-green-500 rounded"></div>
                            <span className="font-medium">Cash on Delivery</span>
                        </div>
                    </div>

                    <button
                        onClick={handlePayment}
                        disabled={processing}
                        className="w-full bg-yellow-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {processing ? 'Processing...' : 'Pay Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
