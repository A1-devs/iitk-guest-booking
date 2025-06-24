import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const BookRoom = () => {
  const { state } = useLocation(); // contains room and date info
  const navigate = useNavigate();

  // Dummy payment handler — replace with real payment logic!
  const handlePaymentAndBook = async () => {
    // You'd invoke Razorpay checkout here, get payment_id/UTR on success
    const paymentUTR = prompt("Enter Payment UTR (replace with Razorpay in production):");
    if (!paymentUTR) return toast.error("Payment failed or cancelled.");
    try {
      await api.post("/bookings", {
        roomId: state.room._id,
        fromDate: state.from,
        toDate: state.to,
        paymentUTR, // in production, use payment_id returned by Razorpay
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
        <div>
          <b>From:</b> {state.from} <b>To:</b> {state.to}
        </div>
        <button className="btn btn-primary mt-6 w-full" onClick={handlePaymentAndBook}>
          Pay & Book
        </button>
      </div>
    </div>
  );
};

export default BookRoom;
