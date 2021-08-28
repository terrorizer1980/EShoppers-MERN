import express from "express";

import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/login").post(authUser);
router.route("/").post(registerUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
