import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserBookings from "./pages/UserBookings";
import AvailableRooms from "./pages/AvailableRooms";
import BookRoom from "./pages/BookRoom";
import PrivateRoute from "./components/PrivateRoute";
import Gallery from "./pages/Gallery";
import ForgotPassword from "./pages/ForgotPassword";      
import ResetPassword from "./pages/ResetPassword";        
import { Toaster } from "react-hot-toast";
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminUsers from './pages/AdminUsers';
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster position="top-center" />
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
        <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>}/>
        <Route path="/admin/bookings" element={<AdminRoute><AdminBookings /></AdminRoute>} />
        <Route path="/admin/users" element={<AdminRoute><AdminUsers /></AdminRoute>} />
      </Routes>
    </div>
  );
}

export default App;
