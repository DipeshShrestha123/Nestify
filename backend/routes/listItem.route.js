import express from "express";
import {
  getAllListings,
  getListingById,
  addPost,
  updateProfile,
} from "../controller/listItem.controller.js";
import { verifyToken } from "../middleware/verifytoken.js";

const router = express.Router();

router.get("/", getAllListings);
router.get("/:id", getListingById);
router.post("/addpost", addPost); // THIS is required
router.put("/updateprofile", verifyToken, updateProfile);
export default router;
