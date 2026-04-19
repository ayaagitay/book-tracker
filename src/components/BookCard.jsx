export default function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={onClick}>
      <div className="book-card-placeholder">
        {book.photoUrl
          ? <img className="book-card-cover" src={book.photoUrl} alt={book.title} />
          : <span className="book-card-no-cover">No cover</span>
        }
      </div>
      <div className="book-card-info">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">by {book.author}</p>
        <span className={`book-card-status book-card-status--${book.status}`}>{book.status}</span>
      </div>
    </div>
  )
}
