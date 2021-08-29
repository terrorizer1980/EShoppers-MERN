import Order from "./../models/orderModel.js";
import asyncHandler from "express-async-handler";

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    shippingPrice,
    paymentMethod,
    taxPrice,
    itemsPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    re.status(404);
    throw new Error("No order items found.");
    return;
  } else {
    const order = new Order({
      orderItems,
      shippingAddress,
      shippingPrice,
      paymentMethod,
      taxPrice,
      itemsPrice,
      totalPrice,
      user: req.user._id,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("No order found with this id");
  }
});

export { addOrderItems, getOrderById };
