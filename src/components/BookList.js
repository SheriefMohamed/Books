import BookShow from "./BookShow";

function BookList({books, onDelete, onUpdate}){
    const renderedBooks = books.map(book => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onUpdate={onUpdate}/>
    })

    return (
        <div className="book-list">{renderedBooks}</div>
    )
}

export default BookList;