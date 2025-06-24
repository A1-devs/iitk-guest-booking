import { Trash2 } from "lucide-react";

const BookingCard = ({ booking, onCancel }) => (
  <div className="card bg-base-100 shadow-md p-6 mb-4 relative">
    <div className="card-body flex flex-col gap-3">
      <h3 className="text-xl font-semibold">{booking.roomId?.name}</h3>
      <div className="flex flex-col sm:flex-row gap-2">
        <div><b>Hall:</b> {booking.roomId?.hall}</div>
        <div><b>Type:</b> {booking.roomId?.type}</div>
      </div>
      <div>
        <b>From:</b> {new Date(booking.fromDate).toLocaleDateString()} <b>To:</b> {new Date(booking.toDate).toLocaleDateString()}
      </div>
      <div><b>Status:</b> {booking.status}</div>
      <div><b>Payment UTR:</b> {booking.paymentUTR}</div>
      <button className="btn btn-error w-fit gap-2" onClick={onCancel}>
        <Trash2 size={16} /> Cancel Booking
      </button>
    </div>
  </div>
);

export default BookingCard;
