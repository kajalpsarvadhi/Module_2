
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.CHAR(72),
      allowNull: false,
    },
    user_phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    user_address: {
      type: DataTypes.STRING(30),
    },
  },
  {
    tableName: "tbl_users",
    timestamps: false,
  }
);

module.exports = User;
