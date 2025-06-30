import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your registered email.");
    setLoading(true);
    try {
      await api.post("/auth/forgot-password", { email });
      toast.success("Reset link sent — check your mail or console.");
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error sending reset link.");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        className="card w-full max-w-sm bg-base-100 p-8 shadow-xl space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">Forgot Password</h2>
        <input
          type="email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your registered email"
          required
        />
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
