const server = require("./src/app.js");
const { sequelize } = require("./src/DataBase/db.js");
const { Role } = require('./src/DataBase/db.js');
require("dotenv").config();
const { PORT } = process.env;

// <<<<<<< HEAD
// sequelize.sync({ force:true }).then(async () => {
// =======
sequelize.sync({ alter:true }).then( async () => {
// >>>>>>> 88d312b513902f662a8e3eb4ddb08789fc0c150d
  console.log("estoy conectado a", sequelize.getDatabaseName());
  await Role.findOrCreate({ where: { role: "admin_role" }, defaults: { role: "admin_role" } });
  await Role.findOrCreate({ where: { role: "user_role" }, defaults: { role: "user_role" } });
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  })
})
