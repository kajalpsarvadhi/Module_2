const router = require("express").Router();
const controller = require("../Controllers/authController");

// console.log("AUTH CONTROLLER:", controller); 
router.post("/login", controller.login);
router.post("/register", controller.register);

module.exports = router;
