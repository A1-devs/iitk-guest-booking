import React, { useEffect, useState } from 'react';
import { getBookingsCount, getAllBookings } from '../../api/adminApi';

const BookingsTab = () => {
  const [count, setCount] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getBookingsCount(token).then(data => setCount(data.count));
  }, [token]);

  const handleShowDetails = async () => {
    try {
      const data = await getAllBookings(token);
      console.log("Fetched bookings:", data); // Confirm structure
      setBookings(data);
      setShowDetails(true);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div>
      <h2>Bookings</h2>
      <p>Total bookings: {count}</p>

      {!showDetails && (
  <button onClick={() => {
    console.log("Button clicked!");
    handleShowDetails();
  }}>
    Show Details
  </button>
)}


      {showDetails && bookings.length === 0 && <p>No bookings found.</p>}

      {showDetails && bookings.length > 0 && (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Room</th>
              <th>Hall</th>
              <th>User</th>
              <th>Email</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(b => (
              <tr key={b._id}>
                <td>{b.roomId?.name || 'N/A'}</td>
                <td>{b.roomId?.hall || 'N/A'}</td>
                <td>{b.userId?.name || 'N/A'}</td>
                <td>{b.userId?.email || 'N/A'}</td>
                <td>{b.fromDate?.slice(0, 10)}</td>
                <td>{b.toDate?.slice(0, 10)}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingsTab;
