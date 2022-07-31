import {Sequelize} from "sequelize";

const db = new Sequelize('kitchen', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;