import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newBooks = [...books, {id: Math.round(Math.random() * 9999),title}];
    setBooks(newBooks)
  }

  const deleteBookById = (bookId) => {
     const newBooks = books.filter(book => {
      return book.id !== bookId;
     })

     setBooks(newBooks)
  }

  const editBookById = (bookId, newTitle) => {
    const newBooks = books.map(book => {
      if(book.id === bookId){
        return {...book, title: newTitle}
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
