const express = require("express");
const axios = require("axios");
const sequelize = require("./database");
const Order = require("./Order");
const auth = require("./verifyToken");

const app = express();
app.use(express.json());

app.get("/api/orders/:userId", auth, async (req, res) => {
  const orders = await Order.findAll({ where: { userId: req.params.userId } });
  res.json(orders);
});

app.post("/api/orders", auth, async (req, res) => {
  const { bookId, quantity } = req.body;
  const userId = req.user.id;

  try {
    await axios.get(`http://localhost:3001/api/books/${bookId}`);

    const order = await Order.create({ userId, bookId, quantity });

    res.status(201).json({ id: order.id });
  } catch (error) {
    res
      .status(404)
      .json({ error: "Książka nie istnieje lub serwis książek nie działa" });
  }
});

app.delete("/api/orders/:orderId", auth, async (req, res) => {
  await Order.destroy({ where: { id: req.params.orderId } });
  res.json({ message: "Usunięto zamówienie" });
});

app.patch("/api/orders/:orderId", auth, async (req, res) => {
  const { quantity } = req.body;

  if (quantity) {
    await Order.update(
      { quantity: quantity },
      { where: { id: req.params.orderId } }
    );
    res.json({ message: "Zaktualizowano zamówienie" });
  } else {
    res.status(400).json({ error: "Brak danych do aktualizacji" });
  }
});

sequelize.sync().then(() => {
  app.listen(3002, () => console.log("Orders Service działa na porcie 3002"));
});
