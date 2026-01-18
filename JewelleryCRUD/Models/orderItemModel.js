// models/orderItem.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const OrderItem = sequelize.define(
  "OrderItem",
  {
    order_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL(8, 2),
    },
  },
  {
    tableName: "tbl_orderItems",
    timestamps: false,
  }
);

module.exports = OrderItem;
