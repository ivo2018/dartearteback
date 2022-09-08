import { Sequelize } from "sequelize";

const db = new Sequelize("dartearte", "root", "password", {
  host: "localhost",

  dialect: "mysql",
});
export default db;
