const API_BASE = '/api/admin';

export const getRooms = (token) =>
  fetch(`${API_BASE}/rooms`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const getBookingsCount = (token) =>
  fetch(`${API_BASE}/bookings/count`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const getAllBookings = (token) =>
  fetch(`${API_BASE}/bookings`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const getUsersCount = (token) =>
  fetch(`${API_BASE}/users/count`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const getAllUsers = (token) =>
  fetch(`${API_BASE}/users`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());
