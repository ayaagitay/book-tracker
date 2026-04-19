export default function ReadingView({ books, onSelect }) {
  if (books.length === 0) {
    return <p className="empty-msg">No books here yet.</p>
  }

  return (
    <div className="reading-view">
      {books.map(book => (
        <div key={book.id} className="reading-card" onClick={() => onSelect(book)} style={{ cursor: 'pointer' }}>
          {book.photoUrl
            ? <img className="reading-card-cover" src={book.photoUrl} alt={book.title} />
            : <div className="reading-card-no-cover">No cover</div>
          }
          <div className="reading-card-info">
            <h2 className="reading-card-title">{book.title}</h2>
            <p className="reading-card-author">by {book.author}</p>
            {book.startedReading && <p className="reading-card-date">Started: {book.startedReading}</p>}
            {book.comments && <p className="reading-card-comments">"{book.comments}"</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
