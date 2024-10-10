const { Sequelize } = require("sequelize");
const database = new Sequelize("toDo", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
database
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

database
  .sync()
  .then(() => console.log("Database & tables synced!"))
  .catch((err) => console.log("Error syncing tables: " + err));

module.exports = database;
