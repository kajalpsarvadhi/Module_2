// models/cart.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Cart = sequelize.define(
  "Cart",
  {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    prod_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price_at_time: {
      type: DataTypes.DECIMAL(8, 2),
    },
  },
  {
    tableName: "tbl_cart",
    timestamps: false,
  }
);

module.exports = Cart;
