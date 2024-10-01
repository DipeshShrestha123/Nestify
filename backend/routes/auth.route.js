import express from "express";
import { SignUp, LogIn, LogOut } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", LogIn);
router.post("/logout", LogOut);

export default router; // Use default export