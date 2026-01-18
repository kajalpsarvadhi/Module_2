const express = require("express");
const router = express.Router();

const {createProduct,getAllProducts,updateProduct,deleteProduct,getProductById} = require("../Controllers/adminProductController");
const {authenticate} = require("../authMiddleware");
// const adminMiddleware = require("../adminMiddleware.js");
const { isAdmin } = require("../adminMiddleware");

/* ADMIN PRODUCT ROUTES */


router.post("/",authenticate,isAdmin,createProduct);

router.put("/:id",authenticate,isAdmin,updateProduct);

router.delete("/:id",authenticate,isAdmin,deleteProduct);

router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
