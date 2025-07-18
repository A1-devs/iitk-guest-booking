import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = !!localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin"); // Optional: Clear isAdmin on logout
    navigate("/login");
  };

  return (
    <nav className="navbar bg-base-200 px-8">
      <div className="flex-1 text-xl font-bold">IITK Booking</div>
      <div className="flex-none space-x-4">
        {loggedIn ? (
          <>
            <Link to="/gallery" className="btn btn-ghost">
              Gallery
            </Link>
            <Link to="/bookings" className="btn btn-ghost">
              My Bookings
            </Link>
            {isAdmin && (
              <Link to="/admin/dashboard" className="btn btn-ghost">
                Admin Dashboard
              </Link>
            )}
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
