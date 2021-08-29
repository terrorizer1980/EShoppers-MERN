import express from "express";
import { addOrderItems } from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
export default router;
