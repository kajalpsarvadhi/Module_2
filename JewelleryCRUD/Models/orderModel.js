// models/order.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Order = sequelize.define(
  "Order",
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    total_amount: {
      type: DataTypes.DECIMAL(9, 2),
    },
    order_status: {
      type: DataTypes.ENUM("PLACED", "CANCELLED", "DELIVERED"),
    },
    payment_method: {
      type: DataTypes.ENUM("COD", "CARD"),
    },
    order_date: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    tableName: "tbl_orders",
    timestamps: false,
  }
);

module.exports = Order;
