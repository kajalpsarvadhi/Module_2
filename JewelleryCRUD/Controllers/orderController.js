
const { Cart } = require("../Models/cartModel")
const { Order } = require("../Models/orderModel")
const { OrderItem } = require("../Models/orderItemModel");

exports.placeOrder = async (req, res) => {
  const cartItems = await Cart.findAll({
    where: { user_id: req.user.id },
  });

  let total = 0;
  cartItems.forEach(i => total += i.quantity * i.price_at_time);

  const order = await Order.create({
    user_id: req.user.id,
    total_amount: total,
    order_status: "PLACED",
    order_date: new Date(),
  });

  for (let item of cartItems) {
    await OrderItem.create({
      order_id: order.order_id,
      product_id: item.prod_id,
      quantity: item.quantity,
      price: item.price_at_time,
    });
  }

  await Cart.destroy({ where: { user_id: req.user.id } });

  res.json({ message: "Order placed" });
};
