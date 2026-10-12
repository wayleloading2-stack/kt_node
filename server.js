const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Books.js");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/library")
  .catch(err => console.error("БД:", err));

app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post("/books", async (req, res) => {
  const newBook = await Book.create(req.body);
  res.status(201).json(newBook);
});

app.patch("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).send("Книга не найдена");
  res.json(book);
});

app.delete("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).send("Книга не найдена");
  res.send("Книга удалена");
});

app.listen(5000);
