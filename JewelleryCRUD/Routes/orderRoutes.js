const express = require("express");
const router = express.Router();

const orderController = require("../Controllers/orderController");
const authMiddleware = require("../authMiddleware");

/* USER ORDER ROUTES */

// Place order
router.post(
  "/",
  authMiddleware.authenticate,
  orderController.placeOrder
);


// router.get("/my-orders",authMiddleware.authenticate,orderController.getUserOrders);

module.exports = router;
