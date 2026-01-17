
import { Users, Store, Utensils, TrendingUp, DollarSign, Activity } from "lucide-react";

export const AdminDashboard = () => {
    const stats = [
        { label: "Total Restaurants", value: "12", icon: Store, change: "+2 this week", color: "blue", bg: "bg-blue-50", text: "text-blue-600" },
        { label: "Menu Items", value: "1,248", icon: Utensils, change: "+156 new items", color: "green", bg: "bg-green-50", text: "text-green-600" },
        { label: "Active Users", value: "8.5k", icon: Users, change: "+12% vs last month", color: "purple", bg: "bg-purple-50", text: "text-purple-600" },
        { label: "Total Revenue", value: "₹4.2L", icon: DollarSign, change: "+18% growth", color: "yellow", bg: "bg-yellow-50", text: "text-yellow-600" },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-gray-900 mt-2 tracking-tight">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.text} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="flex items-center mt-4 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                            <span className="text-green-600 font-medium">{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sales by Restaurant Chart - Takes up 2 columns */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-gray-900">Weekly Performance</h3>
                        <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>

                    <div className="flex items-end space-x-6 h-72 pb-2">
                        {[
                            { label: "Mon", value: 45, color: "bg-gray-200" },
                            { label: "Tue", value: 65, color: "bg-gray-200" },
                            { label: "Wed", value: 92, color: "bg-yellow-400" },
                            { label: "Thu", value: 45, color: "bg-gray-200" },
                            { label: "Fri", value: 78, color: "bg-gray-300" },
                            { label: "Sat", value: 85, color: "bg-gray-800" },
                            { label: "Sun", value: 60, color: "bg-gray-300" },
                        ].map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer">
                                <div className="relative w-full flex-1 flex items-end justify-center">
                                    <div
                                        className={`w-full max-w-[48px] rounded-t-xl transition-all duration-500 group-hover:opacity-80 ${item.color}`}
                                        style={{ height: `${item.value}%` }}
                                    >
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg pointer-events-none transition-opacity z-10 shadow-lg">
                                            {item.value}%
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs font-semibold text-gray-400 mt-3">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
                    <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 ring-4 ring-yellow-50 group-hover:bg-yellow-600 transition-colors"></div>
                                    {i !== 4 && <div className="w-0.5 bg-gray-100 h-full mt-2"></div>}
                                </div>
                                <div className="pb-2">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <span className="font-bold text-gray-900">Admin User</span> updated menu prices for
                                        <span className="font-bold text-gray-900"> Paradise Biryani</span>
                                    </p>
                                    <span className="text-xs font-medium text-gray-400 mt-1 block">2 hours ago</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-gray-400 text-sm font-medium mb-1">System Health</h4>
                        <div className="flex items-end gap-2">
                            <h2 className="text-3xl font-bold">99.8%</h2>
                            <span className="text-green-400 text-sm font-semibold mb-1">Operational</span>
                        </div>
                        <div className="mt-4 w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-green-500 w-[99%] h-full"></div>
                        </div>
                    </div>
                    <Activity className="absolute right-4 bottom-4 w-24 h-24 text-white opacity-5" />
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
                        <h2 className="text-3xl font-bold text-gray-900 mt-1">24</h2>
                    </div>
                    <button className="px-4 py-2 bg-yellow-50 text-yellow-700 font-bold rounded-lg text-sm hover:bg-yellow-100 transition-colors">
                        Review
                    </button>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Support Tickets</p>
                        <h2 className="text-3xl font-bold text-gray-900 mt-1">5</h2>
                    </div>
                    <button className="px-4 py-2 bg-gray-50 text-gray-700 font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};
