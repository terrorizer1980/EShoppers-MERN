import express from "express";
import {
  addOrderItems,
  getOrderById,
  updatedOrderToPaid,
} from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/myOrders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updatedOrderToPaid);
export default router;
