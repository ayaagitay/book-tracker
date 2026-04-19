export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          ×
        </button>
        <nav className="sidebar-nav">
          <a href="#">All Books</a>
          <a href="#">Reading Now</a>
          <a href="#">Completed</a>
          <a href="#">Wishlist</a>
        </nav>
      </aside>
    </>
  )
}
