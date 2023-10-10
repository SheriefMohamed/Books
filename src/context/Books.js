import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const newBooks = [...books, response.data];
    setBooks(newBooks);
  };

  const deleteBookById = async (bookId) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`);

    const newBooks = books.filter((book) => {
      return book.id !== bookId;
    });

    setBooks(newBooks);
  };

  const editBookById = async (bookId, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      title: newTitle,
    });

    const newBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(newBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    fetchBooks,
    createBook
  }

  return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
