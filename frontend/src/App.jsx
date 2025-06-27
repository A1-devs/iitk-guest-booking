import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserBookings from "./pages/UserBookings";
import AvailableRooms from "./pages/AvailableRooms";
import BookRoom from "./pages/BookRoom";
import PrivateRoute from "./components/PrivateRoute";
import Gallery from "./pages/Gallery";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Navigate to="/bookings" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/bookings" element={<PrivateRoute><UserBookings /></PrivateRoute>} />
        <Route path="/rooms" element={<PrivateRoute><AvailableRooms /></PrivateRoute>} />
        <Route path="/book" element={<PrivateRoute><BookRoom /></PrivateRoute>} />
        <Route path="/gallery" element={<PrivateRoute><Gallery /></PrivateRoute>} />
      </Routes>
    </div>
  );
}
export default App;
