import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, UtensilsCrossed, ArrowRight } from "lucide-react";

const ALLOWED_EMAIL = "chintalamaheshbabu1005@gmail.com";
const ALLOWED_PASSWORD = "Mahesh@12";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Credential check
    if (email !== ALLOWED_EMAIL || password !== ALLOWED_PASSWORD) {
      alert("Invalid signup credentials");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Please login.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Left Side - Enhanced Brand Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-500 items-center justify-center relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[128px] translate-x-1/2 translate-y-1/2 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>

        {/* Floating Food Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 text-white/10 animate-float" style={{ animationDelay: '0s' }}>
            <UtensilsCrossed className="w-16 h-16" />
          </div>
          <div className="absolute bottom-32 right-24 text-white/10 animate-float" style={{ animationDelay: '2s' }}>
            <UtensilsCrossed className="w-20 h-20 rotate-45" />
          </div>
          <div className="absolute top-1/3 right-16 text-white/10 animate-float" style={{ animationDelay: '1s' }}>
            <UtensilsCrossed className="w-12 h-12 -rotate-12" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 relative z-10 px-12 text-center">
          {/* Logo with Enhanced Animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl shadow-black/20 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <UtensilsCrossed className="w-16 h-16 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
            </div>
          </div>

          {/* Brand Name with Animation */}
          <div className="space-y-4">
            <h1 className="text-7xl font-black text-white tracking-tighter drop-shadow-lg animate-in slide-in-from-bottom duration-700">
              MenuPrice
            </h1>
            <div className="h-1.5 w-32 bg-white/80 rounded-full mx-auto shadow-lg"></div>
          </div>

          {/* Tagline */}
          <p className="text-yellow-50 text-xl font-semibold tracking-wide animate-in slide-in-from-bottom duration-700 delay-150">
            Honest pricing, always.
          </p>

          {/* Feature Highlights */}
          <div className="mt-8 space-y-4 animate-in slide-in-from-bottom duration-700 delay-300">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Compare prices across restaurants</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
              <span className="text-white font-medium text-sm">Find the best deals in your city</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
              <span className="text-white font-medium text-sm">Save money on every order</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 w-full max-w-lg">
            <div className="text-center">
              <div className="text-3xl font-black text-white">1000+</div>
              <div className="text-yellow-100 text-xs mt-1 font-medium">Restaurants</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl font-black text-white">50K+</div>
              <div className="text-yellow-100 text-xs mt-1 font-medium">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white">10K+</div>
              <div className="text-yellow-100 text-xs mt-1 font-medium">Happy Users</div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="lg:hidden w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="mt-2 text-gray-500">Please enter your details to sign up</p>
          </div>

          <form onSubmit={handleSignup} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-[34px] text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-yellow-500 text-white rounded-xl font-bold text-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all shadow-lg shadow-yellow-500/30"
            >
              {loading ? "Creating account..." : "Sign Up"}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-yellow-600 hover:text-yellow-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
