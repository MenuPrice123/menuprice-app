
import { Users, Store, Utensils, TrendingUp } from "lucide-react";

export const AdminDashboard = () => {
    const stats = [
        { label: "Total Restaurants", value: "12", icon: Store, change: "+2 this week", color: "blue" },
        { label: "Menu Items", value: "1,248", icon: Utensils, change: "+156 new items", color: "green" },
        { label: "Active Users", value: "8.5k", icon: Users, change: "+12% vs last month", color: "purple" },
        { label: "Avg Savings", value: "18%", icon: TrendingUp, change: "Consistent", color: "orange" },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">{stat.change}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales by Restaurant Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Sales by Restaurant</h3>
                    {/* Removed items-end to allow columns to stretch full height */}
                    <div className="flex space-x-4 h-64">
                        {[
                            { label: "Varalakshmi", value: 85, color: "#3B82F6" }, // blue-500
                            { label: "Pista House", value: 65, color: "#60A5FA" }, // blue-400
                            { label: "Bawarchi", value: 92, color: "#2563EB" },    // blue-600
                            { label: "Mehfil", value: 45, color: "#93C5FD" },    // blue-300
                            { label: "Cream Stone", value: 30, color: "#BFDBFE" }, // blue-200
                        ].map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group">
                                {/* Flex-1 to take available space, items-end to push bar down */}
                                <div className="relative w-full flex-1 flex items-end justify-center">
                                    <div
                                        className="w-full max-w-[40px] rounded-t-lg transition-all duration-500 group-hover:opacity-80"
                                        style={{ height: `${item.value}%`, backgroundColor: item.color }}
                                    >
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-10">
                                            {item.value}%
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 truncate w-full text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Customer Services Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Customer Services</h3>
                    <div className="flex space-x-4 h-64">
                        {[
                            { label: "Dine-in", value: 40, color: "#22C55E" },   // green-500
                            { label: "Takeaway", value: 75, color: "#16A34A" },  // green-600
                            { label: "Delivery", value: 60, color: "#4ADE80" },  // green-400
                            { label: "Catering", value: 25, color: "#86EFAC" },  // green-300
                        ].map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group">
                                <div className="relative w-full flex-1 flex items-end justify-center">
                                    <div
                                        className="w-full max-w-[60px] rounded-t-lg transition-all duration-500 group-hover:opacity-80"
                                        style={{ height: `${item.value}%`, backgroundColor: item.color }}
                                    >
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity z-10">
                                            {item.value}%
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-4"></div>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium text-gray-900">Admin User</span> updated prices for
                                <span className="font-medium text-gray-900"> Varalakshmi Tiffins</span>
                            </p>
                            <span className="ml-auto text-xs text-gray-400">2 hours ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
