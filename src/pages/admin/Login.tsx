
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

/**
 * Admin Login Page
 * simplified login flow specifically for the admin area.
 */
const AdminLogin = () => {
    console.log("AdminLogin mounted");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            alert(error.message);
        } else {
            navigate("/admin/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm border border-gray-100 relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="p-4 bg-yellow-50 rounded-2xl mb-4 border border-yellow-100 ring-4 ring-yellow-50/50">
                        <ShieldCheck className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Admin Portal</h2>
                    <p className="text-sm text-gray-500 text-center mt-2 px-4">
                        Secure access for restaurant management
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all font-medium text-gray-900 placeholder:text-gray-400"
                            placeholder="admin@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all pr-12 font-medium text-gray-900 placeholder:text-gray-400"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-[34px] text-gray-400 hover:text-gray-600 transition-colors"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-900/10 hover:bg-gray-800 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                        {loading ? "Verifying..." : "Access Dashboard"}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400 font-medium">
                        Restricted Access. Authorized personnel only.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
