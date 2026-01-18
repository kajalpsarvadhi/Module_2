const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/api/products", require("./Routes/productRoutes"));
app.use("/api/cart", require("./Routes/cartRoutes"));
app.use("/api/orders", require("./Routes/orderRoutes"));

module.exports = app;
