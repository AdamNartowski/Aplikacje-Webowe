const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("./database");
const User = require("./User");

const app = express();
app.use(express.json());

const SECRET_KEY = "jakies_haslo";

app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashedPassword });

    res.status(201).json({ id: user.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user)
    return res.status(401).json({ error: "Nie ma takiego użytkownika" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ error: "Złe hasło" });

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ token });
});

sequelize.sync().then(() => {
  app.listen(3003, () => console.log("Users Service działa na porcie 3003"));
});
