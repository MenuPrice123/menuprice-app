import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { UtensilsCrossed } from "lucide-react";
import { CartSheet } from "./CartSheet";
import { InstallPrompt } from "./InstallPrompt";

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsAuthenticated(!!data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <header className="header-nav sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6 text-gray-900" />
            </div>
<<<<<<< HEAD
            <span className="text-xl sm:text-2xl font-bold gradient-text">
              MenuPrice
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("hero")}>Home</button>
            <button onClick={() => scrollToSection("restaurants")}>Restaurants</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <InstallPrompt />
            <CartSheet />

            {!isAuthenticated ? (
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold"
              >
                Sign In
              </button>
=======
            <span className="text-xl font-bold text-gray-900">Menuprice</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <CartSheet />
                <button
                  onClick={handleLogout}
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Log out
                </button>
              </>
>>>>>>> source/main
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Log in
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="btn-primary text-sm px-4 py-2"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
<<<<<<< HEAD

          <div className="flex items-center gap-4 md:hidden">
            <InstallPrompt />
            <CartSheet />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
=======
>>>>>>> source/main
        </div>
      </nav>
    </header>
  );
};
