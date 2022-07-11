import BooksController from "../controller/booksController.js";
import express from 'express';
const router = express.Router();

router
    .get('/livros', BooksController.ListBooks)
    .post('/livros', BooksController.RegisterBook)
    .delete('/livros/:id', BooksController.DeleteBook)
    .put('/livros/:id', BooksController.UpdateBook)
export default router;