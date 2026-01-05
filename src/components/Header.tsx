import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { UtensilsCrossed, Menu, X } from "lucide-react";
import { CartSheet } from "./CartSheet";
import { InstallPrompt } from "./InstallPrompt";

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header-nav sticky top-0 z-50 bg-white">
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
            <span className="text-xl sm:text-2xl font-bold gradient-text">
              MenuPrice
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("hero")}>Home</button>
            <button onClick={() => scrollToSection("restaurants")}>
              Restaurants
            </button>
            <button onClick={() => scrollToSection("about")}>About</button>

            <InstallPrompt />
            <CartSheet />

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="btn-secondary text-sm px-4 py-2"
              >
                Log out
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <InstallPrompt />
            <CartSheet />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
