import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) return toast.error("Please enter a new password.");
    setLoading(true);
    try {
      await api.post(`/auth/reset-password/${token}`, { password });
      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to reset password.");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        className="card w-full max-w-sm bg-base-100 p-8 shadow-xl space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">Reset Password</h2>
        <input
          type="password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
