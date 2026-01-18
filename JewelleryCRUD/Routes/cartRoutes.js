const express = require("express");
const router = express.Router();

const {addToCart,getCart,removeFromCart} = require("../Controllers/cartController");
const { authenticate } = require("../authMiddleware");

router.post("/", authenticate, addToCart);
router.get("/", authenticate, getCart);
router.delete("/:id", authenticate, removeFromCart);

module.exports = router;
