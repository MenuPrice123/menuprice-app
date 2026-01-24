import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, UtensilsCrossed, ArrowRight, Mail, Lock, X } from "lucide-react";

const ALLOWED_EMAIL = "chintalamaheshbabu1005@gmail.com";
const ALLOWED_PASSWORD = "Mahesh@12";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Credential validation is handled by Supabase
    // Removed hardcoded check

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      navigate("/");
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    setResetMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setResetLoading(false);

    if (error) {
      setResetMessage(error.message);
    } else {
      setResetMessage("Password reset link sent! Check your email.");
      setTimeout(() => {
        setShowForgotPassword(false);
        setResetEmail("");
        setResetMessage("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Left Side - Enhanced Brand Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-500 items-center justify-center relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[128px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2 animate-pulse delay-700"></div>
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

      {/* Right Side - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20"></div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Header */}
          <div className="text-center animate-in slide-in-from-top duration-500">
            <div className="lg:hidden w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <UtensilsCrossed className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-500">Sign in to continue to MenuPrice</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6 animate-in slide-in-from-bottom duration-500">
            <div className="space-y-5">
              {/* Email Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all font-medium text-gray-900 placeholder:text-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-14 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all font-medium text-gray-900 placeholder:text-gray-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 focus:ring-offset-0" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full flex items-center justify-center gap-2 py-4 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 transition-all shadow-lg shadow-yellow-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-br from-gray-50 to-white text-gray-500">New to MenuPrice?</span>
            </div>
          </div>

          <Link
            to="/signup"
            className="block w-full text-center py-3 px-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-yellow-500 hover:text-yellow-600 hover:bg-yellow-50/50 transition-all"
          >
            Create an account
          </Link>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Reset Password</h3>
              <button
                onClick={() => {
                  setShowForgotPassword(false);
                  setResetEmail("");
                  setResetMessage("");
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">Enter your email address and we'll send you a link to reset your password.</p>

            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>

              {resetMessage && (
                <div className={`p-4 rounded-xl text-sm font-medium ${resetMessage.includes("sent")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                  {resetMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={resetLoading}
                className="w-full py-3 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resetLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
