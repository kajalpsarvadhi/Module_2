const jwt = require("jsonwebtoken");
const Admin = require("../Models/adminModel");
const User = require("../Models/userModel");
const { comparePassword, hashPassword } = require("../password")

const { secret } = require("../jwt");

exports.login = async (req, res) => {
  const { email, password } = req.body;

 
  const admin = await Admin.findOne({ where: { email } });
  if (admin) {
    console.log("PLAIN:", password);
console.log("HASH:", admin.admin_password);

    const match = await comparePassword(password, admin.admin_password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin.admin_id, role: "ADMIN" },
      secret,

      { expiresIn: "1h" }
    );
    return res.json({ token, role: "ADMIN" });
  }


  const user = await User.findOne({ where: { user_email: email } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await comparePassword(password, user.user_password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.user_id, role: "USER" },
    secret,
    { expiresIn: "1h" }
  );

  res.json({ token, role: "USER" });
};


exports.register = async (req, res) => {
  const data = req.body;
  data.user_password = await hashPassword(data.user_password);
  await User.create(data);
  res.status(201).json({ message: "User registered" });
};
