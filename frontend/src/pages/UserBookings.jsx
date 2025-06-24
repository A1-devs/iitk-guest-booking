import { useEffect, useState } from "react";
import api from "../api/axios";
import BookingCard from "../components/BookingCard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await api.get("/bookings/me");
      setBookings(res.data);
    } catch {
      toast.error("Failed to load bookings");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const cancelBooking = async (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        await api.delete(`/bookings/${id}`);
        toast.success("Booking cancelled");
        setBookings(bookings.filter((b) => b._id !== id));
      } catch {
        toast.error("Failed to cancel booking");
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">My Bookings</h2>
        <button className="btn btn-primary" onClick={() => navigate("/rooms")}>
          Book a Room
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : bookings.length ? (
        bookings.map((booking) => (
          <BookingCard
            key={booking._id}
            booking={booking}
            onCancel={() => cancelBooking(booking._id)}
          />
        ))
      ) : (
        <div>No bookings found.</div>
      )}
    </div>
  );
};
export default UserBookings;
