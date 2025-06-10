import express from "express";
import {
  SignUp,
  LogIn,
  LogOut,
  checkAuthStatus,
  fetchUser,
} from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifytoken.js";
const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", LogIn);
router.post("/logout", LogOut);
router.get("/checkAuthStatus", checkAuthStatus);
router.get("/me", verifyToken, fetchUser);
export default router;
