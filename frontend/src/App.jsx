import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserBookings from "./pages/UserBookings";
import AvailableRooms from "./pages/AvailableRooms";
import BookRoom from "./pages/BookRoom";
import PrivateRoute from "./components/PrivateRoute";
import Gallery from "./pages/Gallery";
import ForgotPassword from "./pages/ForgotPassword";      // 👈 import added
import ResetPassword from "./pages/ResetPassword";        // 👈 import added
import { Toaster } from "react-hot-toast";
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminUsers from './pages/AdminUsers';

// Inside your <Routes>
// This route is for the admin dashboard, which is protected by the PrivateRoute component.
function App() {
  return (
    <div>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Navigate to="/bookings" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />   {/* 👈 added */}
        <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* 👈 added */}
        <Route path="/bookings" element={<PrivateRoute><UserBookings /></PrivateRoute>} />
        <Route path="/rooms" element={<PrivateRoute><AvailableRooms /></PrivateRoute>} />
        <Route path="/book" element={<PrivateRoute><BookRoom /></PrivateRoute>} />
        <Route path="/gallery" element={<PrivateRoute><Gallery /></PrivateRoute>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </div>
  );
}

export default App;
