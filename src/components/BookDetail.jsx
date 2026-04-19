import { useState } from 'react'

export default function BookDetail({ book, onClose, onSave }) {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ ...book })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSave() {
    onSave(form)
    setEditing(false)
  }

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        {editing ? (
          <div className="detail-edit">
            <div className="modal-field">
              <label>Book name</label>
              <input name="title" value={form.title} onChange={handleChange} />
            </div>
            <div className="modal-field">
              <label>Author</label>
              <input name="author" value={form.author} onChange={handleChange} />
            </div>
            <div className="modal-field">
              <label>Cover photo URL</label>
              <input name="photoUrl" value={form.photoUrl} onChange={handleChange} placeholder="https://..." />
              {form.photoUrl && <img className="modal-preview" src={form.photoUrl} alt="preview" />}
            </div>
            <div className="modal-field">
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="reading">Reading now</option>
                <option value="completed">Completed</option>
                <option value="wishlist">Wishlist</option>
              </select>
            </div>
            <div className="modal-field">
              <label>Started reading</label>
              <input name="startedReading" value={form.startedReading} onChange={handleChange} placeholder="DD.MM.YYYY" />
            </div>
            <div className="modal-field">
              <label>Comments</label>
              <textarea name="comments" value={form.comments} onChange={handleChange} rows={4} />
            </div>
            <div className="detail-actions">
              <button className="modal-submit" onClick={handleSave}>Save</button>
              <button className="detail-cancel" onClick={() => { setForm({ ...book }); setEditing(false) }}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="detail-view">
            {book.photoUrl && <img className="detail-cover" src={book.photoUrl} alt={book.title} />}
            <div className="detail-info">
              <h2 className="detail-title">{book.title}</h2>
              <p className="detail-author">by {book.author}</p>
              <span className={`book-card-status book-card-status--${book.status}`}>{book.status}</span>
              {book.startedReading && <p className="detail-date">Started: {book.startedReading}</p>}
              {book.comments && <p className="detail-comments">"{book.comments}"</p>}
              <button className="modal-submit detail-edit-btn" onClick={() => setEditing(true)}>Edit book</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
