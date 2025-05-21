import express from "express";
import { SignUp, LogIn, LogOut, checkAuthStatus } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", LogIn);
router.post("/logout", LogOut);
router.get("/checkAuthStatus", checkAuthStatus);
export default router; 