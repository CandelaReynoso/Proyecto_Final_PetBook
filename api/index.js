const server = require("./src/app.js");
const { sequelize } = require("./src/database/db.js");
const { Role } = require('./src/database/db.js');
require("dotenv").config();
<<<<<<< HEAD
const { PORT } = process.env || 3001; //Puerto 3001 en caso de no estar el link a Railway.

//Conectado a Railway.
sequelize.sync({force:true }).then( async () => {
=======
const { PORT } = process.env;
const loadPets = require('./src/DataBase/scriptPets.js')


sequelize.sync({force:true }).then( async () => {

  await loadPets();
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950
  console.log("estoy conectado a", sequelize.getDatabaseName());
  await Role.findOrCreate({ where: { role: "admin_role" }, defaults: { role: "admin_role" } });
  await Role.findOrCreate({ where: { role: "user_role" }, defaults: { role: "user_role" } });
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    
  })
})
