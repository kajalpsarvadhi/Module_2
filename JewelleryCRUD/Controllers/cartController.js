const Cart = require("../Models/cartModel");
const Product = require("../Models/productModel")



exports.addToCart = async (req, res) => {
  try{
    // console.log("REQ.USER IN CART:", req.user);
  const { prod_id, quantity } = req.body;
  const product = await Product.findByPk(prod_id);

  await Cart.create({
    user_id: req.user.id,
    prod_id,
    quantity,
    price_at_time: product.prod_price,
  });

  res.json({ message: "Added to cart" });

  }catch(err){
    // console.error("ADD TO CART FULL ERROR:", err);
  // console.error("PG ERROR MESSAGE:", err.original?.message);
  // console.error("PG ERROR DETAIL:", err.original?.detail);
    res.status(500).json({ message: err.message });
  }
  

};

exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cartItems = await Cart.findAll({
      where: { user_id: userId },
      include: [{ model: Product }],
    });

    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Cart.destroy({
      where: { cart_id: id },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};