// models/index.js

const { Sequelize } = require("sequelize");
const config = require("../config/config");
const env = process.env.NODE_ENV || "development";
const sequelize = new Sequelize(config[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./userModels")(sequelize, Sequelize);
db.Products = require("./productsModels")(sequelize, Sequelize);
module.exports = db;
