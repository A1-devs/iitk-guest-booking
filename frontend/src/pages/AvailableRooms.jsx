import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AvailableRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [dates, setDates] = useState({ from: "", to: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchRooms = async () => {
    if (!dates.from || !dates.to) {
      toast.error("Select both check-in and check-out dates.");
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
          <input type="date" className="input input-bordered" value={dates.from}
            onChange={e => setDates({ ...dates, from: e.target.value })} />
        </div>
        <div>
          <label className="label">Check-out</label>
          <input type="date" className="input input-bordered" value={dates.to}
            onChange={e => setDates({ ...dates, to: e.target.value })} />
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
