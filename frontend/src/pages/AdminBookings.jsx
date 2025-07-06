import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/admin/bookings', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => {
        console.log("Fetched bookings:", res.data); // Debug log
        setBookings(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Booked Rooms</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2 text-left">Room</th>
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Booking Dates</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={b._id || i} className="border-t">
                <td className="px-4 py-2">{b.roomId?.name || 'N/A'}</td>
                <td className="px-4 py-2">{b.userId?.name || 'N/A'}</td>
                <td className="px-4 py-2">
                  {b.fromDate?.slice(0, 10)} - {b.toDate?.slice(0, 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {bookings.length === 0 && (
          <div className="text-center text-gray-500 mt-4">No bookings found.</div>
        )}
      </div>
    </div>
  );
};

export default AdminBookings;
