// App.tsx
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
    </Routes>
  );
}

export default App;
