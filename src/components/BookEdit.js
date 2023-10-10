import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, handleSubmit}){
    const [title, setTitle] = useState(book.title)
    const {editBookById} = useBooksContext()

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();

        if(title !== ''){
            handleSubmit()
            editBookById(book.id, title)
        }
    }
    return (
        <form className="book-deit" onSubmit={handleSubmitClick}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleInputChange}/>
            <button className="button is-primary" style={{marginTop: '7px'}}>Save</button>
        </form>
    )
}

export default BookEdit;