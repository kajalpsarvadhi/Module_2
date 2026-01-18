
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Product = sequelize.define(
  "Product",
  {
    prod_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prod_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    prod_category: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    prod_description: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    prod_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    diamond_carat: {
      type: DataTypes.DECIMAL(5, 2),
    },
    diamond_cut: {
      type: DataTypes.ENUM(
        "Excellent",
        "Very Good",
        "Good",
        "Fair",
        "Poor"
      ),
    },
    diamond_color: {
      type: DataTypes.CHAR(1),
    },
    diamond_clarity: {
      type: DataTypes.ENUM(
        "FL","IF","VVS1","VVS2","VS1","VS2","SI1","SI2","I1","I2","I3"
      ),
    },
    prod_material: {
      type: DataTypes.STRING(20),
    },
    prod_quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "tbl_products",
    timestamps: false,
  }
);

module.exports = Product;
