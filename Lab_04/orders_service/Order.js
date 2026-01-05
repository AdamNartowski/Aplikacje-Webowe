const { DataTypes } = require("sequelize");
const sequelize = require("./database");

const Order = sequelize.define("Order", {
  userId: { type: DataTypes.INTEGER },
  bookId: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
});

module.exports = Order;
