import { useState } from "react";

function BookCreate({onCreate}){
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !== ''){
            onCreate(title);
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