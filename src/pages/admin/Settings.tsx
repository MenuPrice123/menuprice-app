
import { Save, Bell, Globe } from "lucide-react";

export const AdminSettings = () => {
    return (
        <div className="space-y-8 max-w-4xl">
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

            {/* General Settings */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Globe className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-800">General Configuration</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                        <input type="text" defaultValue="MenuPrice" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                        <input type="email" defaultValue="admin@menuprice.com" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none">
                            <option>INR (₹)</option>
                            <option>USD ($)</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Notifications */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                        <Bell className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-800">Notifications</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-900">Price Alert Notifications</p>
                            <p className="text-sm text-gray-500">Get notified when scraped prices change by more than 10%</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-900">New Restaurant Approvals</p>
                            <p className="text-sm text-gray-500">Notify when a new restaurant requires verification</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                        </label>
                    </div>
                </div>
            </section>

            <div className="flex justify-end">
                <button className="flex items-center px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </button>
            </div>
        </div>
    );
};
