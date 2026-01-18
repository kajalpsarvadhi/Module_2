const app = require("./app");
const sequelize  = require("./db");
require("./Models/modelIndex");


sequelize.authenticate()
  .then(() => console.log("DB connected"))
  .catch(console.error);

app.listen(5000, () => console.log("Server running"));
