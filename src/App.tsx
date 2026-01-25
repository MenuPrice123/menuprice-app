// App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RestaurantDetails from "./pages/RestaurantDetails";
import OrderSummary from "./pages/OrderSummary";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import { AdminLayout } from "./components/layouts/AdminLayout";
import { AdminDashboard } from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/Login";
import { RestaurantList } from "./pages/admin/Restaurants";
import { MenuManagement } from "./pages/admin/Menu";
import { AdminSettings } from "./pages/admin/Settings";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/restaurant/:slug" element={<RestaurantDetails />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        {/* Placeholders for future routes */}
        <Route path="restaurants" element={<RestaurantList />} />
        <Route path="menu" element={<MenuManagement />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
