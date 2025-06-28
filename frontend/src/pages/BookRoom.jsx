import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const BookRoom = () => {
  const { state } = useLocation(); // contains room and date info
  const navigate = useNavigate();

  const handleBook = async () => {
    const confirm = window.confirm(
      `Are you sure you want to book ${state.room.name} for ₹${state.room.price}?`
    );
    if (!confirm) return;

    try {
      await api.post("/bookings", {
        roomId: state.room._id,
        fromDate: state.from,
        toDate: state.to,
      });
      toast.success("Booking successful!");
      navigate("/bookings");
    } catch {
      toast.error("Booking failed. Try again.");
    }
  };

  if (!state?.room) return <div>Room details missing. Go back and select a room.</div>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="card bg-base-100 shadow p-8">
        <h2 className="text-xl font-bold mb-4">Book Room: {state.room.name}</h2>
        <div>Hall: {state.room.hall}</div>
        <div>Type: {state.room.type}</div>
        <div>Price: <b>₹{state.room.price}</b></div>
        <div>
          <b>From:</b> {state.from} <b>To:</b> {state.to}
        </div>
        <button className="btn btn-primary mt-6 w-full" onClick={handleBook}>
          Book Room
        </button>
      </div>
    </div>
  );
};

export default BookRoom;
