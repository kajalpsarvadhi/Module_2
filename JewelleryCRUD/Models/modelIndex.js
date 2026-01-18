
const sequelize = require("../db");

const Admin = require("./adminModel");
const User = require("./userModel");
const Product = require("./productModel");
const Cart = require("./cartModel");
const Order = require("./orderModel");
const OrderItem = require("./orderItemModel");

User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Product.hasMany(Cart, { foreignKey: "prod_id" });
Cart.belongsTo(Product, { foreignKey: "prod_id" });

User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

Product.hasMany(OrderItem, { foreignKey: "prod_id", sourceKey: "prod_id", });
OrderItem.belongsTo(Product, { foreignKey: "prod_id", targetKey: "prod_id", });

module.exports = {
  sequelize,
  Admin,
  User,
  Product,
  Cart,
  Order,
  OrderItem,
};
