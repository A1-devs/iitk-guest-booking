
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      label: "Bookings",
      description: "See all room bookings and details",
      onClick: () => navigate("/admin/bookings"),
      color: "bg-blue-500 hover:bg-blue-600",
      icon: (
        <svg className="w-10 h-10 mb-2 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <path d="M2 10h20"></path>
        </svg>
      ),
    },
    {
      label: "Users List",
      description: "View all registered users and details",
      onClick: () => navigate("/admin/users"),
      color: "bg-blue-400 hover:bg-blue-500",
      icon: (
        <svg className="w-10 h-10 mb-2 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M5.5 21a7.5 7.5 0 0113 0"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-blue-100 rounded-2xl px-12 py-8 shadow-md mb-10 w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Welcome Admin</h1>
        <p className="text-lg text-blue-700 text-center">
          Access all bookings and user information from this dashboard.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {cards.map((card) => (
          <button
            key={card.label}
            className={`flex flex-col items-center justify-center rounded-xl shadow-lg p-8 w-64 transition text-white ${card.color}`}
            onClick={card.onClick}
          >
            {card.icon}
            <span className="text-2xl font-semibold mb-1">{card.label}</span>
            <span className="text-white text-sm">{card.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
