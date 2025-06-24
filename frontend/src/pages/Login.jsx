import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login successful!");
      navigate("/bookings");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Invalid email or password."
      );
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        className="card w-full max-w-sm bg-base-100 p-8 shadow-xl space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
        <input
          type="email"
          className="input input-bordered w-full"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="input input-bordered w-full"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="text-center">
          <Link to="/register" className="link link-primary">No account? Register</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
