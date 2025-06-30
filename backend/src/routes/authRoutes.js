import express from "express";
import { 
  register, 
  login, 
  forgotPassword, 
  resetPassword 
} from "../controllers/authController.js";

const router = express.Router();

// Existing routes
router.post("/register", register);
router.post("/login", login);

// New routes for password reset
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
