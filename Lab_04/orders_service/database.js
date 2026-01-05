const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./orders.sqlite",
});

module.exports = sequelize;
