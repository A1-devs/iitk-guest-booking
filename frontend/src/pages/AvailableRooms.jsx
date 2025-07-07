import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AvailableRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [dates, setDates] = useState({ from: "", to: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Today's date in YYYY-MM-DD format
  const todayStr = new Date().toISOString().split('T')[0];

  // Helper function for date validation
  const isValidDateRange = (from, to) => {
    if (!from || !to) return { valid: false, message: "Select both check-in and check-out dates." };

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const fromDate = new Date(from);
    fromDate.setHours(0, 0, 0, 0);
    const toDate = new Date(to);
    toDate.setHours(0, 0, 0, 0);

    if (fromDate < today) return { valid: false, message: "Check-in date cannot be in the past." };
    if (toDate <= fromDate) return { valid: false, message: "Check-out date must be after check-in date." };

    return { valid: true };
  };

  const fetchRooms = async () => {
    const { valid, message } = isValidDateRange(dates.from, dates.to);
    if (!valid) {
      toast.error(message);
      return;
    }
    setLoading(true);
    try {
      const res = await api.get(`/rooms/available?from=${dates.from}&to=${dates.to}`);
      setRooms(res.data);
    } catch {
      toast.error("Failed to fetch rooms");
    }
    setLoading(false);
  };

  const handleSelectRoom = (room) => {
    navigate("/book", { state: { ...dates, room } });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-4 items-end">
        <div>
          <label className="label">Check-in</label>
          <input
            type="date"
            className="input input-bordered"
            value={dates.from}
            min={todayStr}
            onChange={e => {
              setDates({ ...dates, from: e.target.value });
              // Reset check-out if it's now before the new check-in
              if (dates.to && e.target.value && dates.to <= e.target.value) {
                setDates(prev => ({ ...prev, to: "" }));
              }
            }}
          />
        </div>
        <div>
          <label className="label">Check-out</label>
          <input
            type="date"
            className="input input-bordered"
            value={dates.to}
            min={dates.from ? dates.from : todayStr}
            onChange={e => setDates({ ...dates, to: e.target.value })}
            disabled={!dates.from}
          />
        </div>
        <button className="btn btn-primary" onClick={fetchRooms} disabled={loading}>
          {loading ? "Searching..." : "Show Available"}
        </button>
      </div>
      {rooms.length ? (
        <div className="grid gap-4">
          {rooms.map((room) => (
            <div key={room._id} className="card bg-base-100 p-6 shadow">
              <div>
                <span className="font-semibold">{room.name}</span> | {room.hall} | {room.type}
              </div>
              <div className="mt-1"><b>Price:</b> ₹{room.price}</div>
              <button className="btn btn-outline mt-2" onClick={() => handleSelectRoom(room)}>
                Book This Room
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>No rooms found. Try different dates.</div>
      )}
    </div>
  );
};

export default AvailableRooms;
