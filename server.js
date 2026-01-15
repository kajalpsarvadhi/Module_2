const express = require('express')
const app = express()
const db = require("./db")
const userRoutes = require("./Routes/userRoutes")

app.use(express.json()) //its a middleware to read JSON

db();

app.use("/users", userRoutes);


const PORT = 3002
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    
})