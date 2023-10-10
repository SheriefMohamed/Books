import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate(){
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext()

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !== ''){
            createBook(title);
            setTitle('')
        }
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" value={title} onChange={handleChange} className="input"></input>
                <button onClick={handleSubmit} className="button">Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;