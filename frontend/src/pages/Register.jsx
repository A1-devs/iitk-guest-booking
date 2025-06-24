import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/auth/register", form);
      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Something went wrong, try again."
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
        <h2 className="text-2xl font-bold mb-2 text-center">Register</h2>
        <input
          type="text"
          className="input input-bordered w-full"
          name="name"
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
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
          {loading ? "Registering..." : "Register"}
        </button>
        <div className="text-center">
          <Link to="/login" className="link link-primary">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
