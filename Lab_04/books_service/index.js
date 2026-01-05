const express = require("express");
const sequelize = require("./database");
const Book = require("./Book");
const verifyToken = require("./verifyToken");

const app = express();
app.use(express.json());

app.get("/api/books", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

app.get("/api/books/:bookId", async (req, res) => {
  const book = await Book.findByPk(req.params.bookId);
  if (!book) return res.status(404).json({ error: "Brak książki" });
  res.json(book);
});

app.post("/api/books", verifyToken, async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({ id: newBook.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/books/:bookId", verifyToken, async (req, res) => {
  const deletedCount = await Book.destroy({ where: { id: req.params.bookId } });

  if (deletedCount === 0) {
    return res
      .status(404)
      .json({ error: "Nie znaleziono książki do usunięcia" });
  }

  res.json({ message: "Usunięto książkę" });
});

sequelize.sync().then(() => {
  app.listen(3001, () => console.log("Books Service działa na porcie 3001"));
});
