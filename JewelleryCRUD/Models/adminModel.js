// models/admin.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Admin = sequelize.define(
  "Admin",
  {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    admin_password: {
      type: DataTypes.CHAR(70),
      allowNull: false,
    },
  },
  {
    tableName: "tbl_admin",
    timestamps: false,
    
  }
);

module.exports = Admin;
