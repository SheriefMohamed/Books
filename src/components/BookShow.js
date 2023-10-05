import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({book, onDelete, onUpdate}){
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onUpdate(id, newTitle);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} handleSubmit={handleSubmit}/>
    }

    return (
        <div className="book-show">
            <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;