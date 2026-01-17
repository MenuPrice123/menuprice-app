
import { Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, Store, UtensilsCrossed, Settings, LogOut, ChevronRight } from "lucide-react";

export const AdminLayout = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(`${path}/`);
    };

    const navItems = [
        { path: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { path: "/admin/restaurants", icon: Store, label: "Restaurants" },
        { path: "/admin/menu", icon: UtensilsCrossed, label: "Menu Items" },
        { path: "/admin/settings", icon: Settings, label: "Settings" },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-sm">
                <div className="p-8 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30">
                            <UtensilsCrossed className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 leading-none">MenuPrice</h1>
                            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Admin Portal</span>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {navItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`group flex items-center justify-between px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 ${active
                                        ? "bg-gray-900 text-white shadow-md shadow-gray-900/10"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className={`w-5 h-5 ${active ? "text-yellow-400" : "text-gray-400 group-hover:text-gray-600"}`} />
                                    <span>{item.label}</span>
                                </div>
                                {active && <ChevronRight className="w-4 h-4 text-gray-500" />}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            window.location.href = "/admin/login";
                        }}
                        className="flex items-center w-full px-4 py-3 text-sm font-semibold text-red-600 rounded-xl hover:bg-red-50 transition-colors group"
                    >
                        <LogOut className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        Sign Out
                    </button>
                    <div className="mt-4 px-4 text-xs text-gray-400 text-center">
                        v1.2.0 • Build 2024.1
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {navItems.find(item => isActive(item.path))?.label || "Admin Area"}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Manage your restaurant operations</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                                <p className="text-xs text-gray-500">Super Admin</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-yellow-100 border-2 border-white shadow-sm flex items-center justify-center text-yellow-700 font-bold text-lg">
                                A
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-auto bg-gray-50 p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
