import express from "express";
import {
  addOrderItems,
  getOrderById,
  updatedOrderToPaid,
  getMyOrders,
  getOrders,
} from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myOrders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updatedOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);
export default router;
