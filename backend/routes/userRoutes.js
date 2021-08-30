import express from "express";

import {
  authUser,
  deleteUser,
  getAllUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { admin, protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/login").post(authUser);
router.route("/").post(registerUser).get(protect, admin, getAllUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/:id").delete(protect, admin, deleteUser);

export default router;
