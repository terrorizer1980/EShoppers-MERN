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

const updatedOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404);
    throw new Error("No order found with this id");
  }
});

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  if (!orders) {
    res.status(404);
    throw new Error("No order Found with this user");
  } else {
    res.json(orders);
  }
});

export { addOrderItems, getOrderById, updatedOrderToPaid, getMyOrders };
