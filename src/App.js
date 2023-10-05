import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data)
  }

  useEffect(()=>{
    fetchBooks()
  }, []);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    })

    const newBooks = [...books, response.data];
    setBooks(newBooks)
  }

  const deleteBookById = async (bookId) => {
    await axios.delete(`http://localhost:3001/books/${bookId}`)

     const newBooks = books.filter(book => {
      return book.id !== bookId;
     })

     setBooks(newBooks)
  }

  const editBookById = async(bookId, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      title: newTitle
    })

    const newBooks = books.map(book => {
      if(book.id === bookId){
        return {...book, ...response.data}
      }
      return book;
    })
    setBooks(newBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onUpdate={editBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
