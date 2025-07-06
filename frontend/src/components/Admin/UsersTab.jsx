import React, { useEffect, useState } from 'react';
import { getUsersCount, getAllUsers } from '../../api/adminApi';


const UsersTab = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getUsersCount(token).then(data => setCount(data.count));
  }, [token]);

  const handleShowDetails = () => {
    getAllUsers(token).then(setUsers);
    setShowDetails(true);
  };

  return (
    <div>
      <h2>Registered Users</h2>
      <p>Total users: {count}</p>
      {!showDetails && (
        <button onClick={handleShowDetails}>Show Details</button>
      )}
      {showDetails && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.isAdmin ? "Admin" : "User"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTab;
