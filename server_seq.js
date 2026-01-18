const express = require('express')
const sequelize = require('./db_sequelize')
const app = express();
require("./Models/product_seq")
const productRoutes = require("./Routes/productRoutes")


app.use(express.json())
app.use("/api",productRoutes)
const db = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection established!!");

        // await sequelize.sync();
        // console.log("Product table created");
        
        
    } catch (err) {
        console.error(err);
        next();
    }
}

db();


app.listen(3008, () => {
    console.log("Server running on port 3008");

})

module.exports = db;