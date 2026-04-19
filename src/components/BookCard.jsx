export default function BookCard({ book }) {
  return (
    <div className="book-card">
      {book.photoUrl && (
        <img className="book-card-cover" src={book.photoUrl} alt={book.title} />
      )}
      <div className="book-card-info">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">by {book.author}</p>
        {book.startedReading && (
          <p className="book-card-date">Started: {book.startedReading}</p>
        )}
        {book.comments && (
          <p className="book-card-comments">"{book.comments}"</p>
        )}
      </div>
    </div>
  )
}
