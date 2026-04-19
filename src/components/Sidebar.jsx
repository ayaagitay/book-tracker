export default function Sidebar({ open, onClose, books, view, onViewChange }) {
  const sorted = [...books].sort((a, b) => a.title.localeCompare(b.title))

  function navigate(v) {
    onViewChange(v)
    onClose()
  }

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">×</button>

        <nav className="sidebar-nav">
          <button className={`sidebar-link ${view === 'all' ? 'sidebar-link--active' : ''}`} onClick={() => navigate('all')}>All Books</button>
          <button className={`sidebar-link ${view === 'reading' ? 'sidebar-link--active' : ''}`} onClick={() => navigate('reading')}>Reading Now</button>
          <button className={`sidebar-link ${view === 'completed' ? 'sidebar-link--active' : ''}`} onClick={() => navigate('completed')}>Completed</button>
          <button className={`sidebar-link ${view === 'wishlist' ? 'sidebar-link--active' : ''}`} onClick={() => navigate('wishlist')}>Wishlist</button>
        </nav>

        {sorted.length > 0 && (
          <div className="sidebar-books">
            <p className="sidebar-books-label">All books A–Z</p>
            {sorted.map(book => (
              <div key={book.id} className="sidebar-book-item">
                {book.photoUrl && <img src={book.photoUrl} alt={book.title} className="sidebar-book-thumb" />}
                <div>
                  <p className="sidebar-book-title">{book.title}</p>
                  <p className="sidebar-book-author">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </>
  )
}
