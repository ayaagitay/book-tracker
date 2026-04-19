import { useState } from 'react'

const empty = { title: '', author: '', photoUrl: '', startedReading: '', comments: '' }

export default function AddBookModal({ onClose, onAdd }) {
  const [form, setForm] = useState(empty)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title || !form.author) return
    onAdd({ ...form, id: Date.now(), read: false })
    setForm(empty)
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="modal-heading">Add a book</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-field">
            <label>Book name *</label>
            <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Dune" required />
          </div>

          <div className="modal-field">
            <label>Author *</label>
            <input name="author" value={form.author} onChange={handleChange} placeholder="e.g. Frank Herbert" required />
          </div>

          <div className="modal-field">
            <label>Cover photo URL</label>
            <input name="photoUrl" value={form.photoUrl} onChange={handleChange} placeholder="https://..." />
            {form.photoUrl && (
              <img className="modal-preview" src={form.photoUrl} alt="cover preview" />
            )}
          </div>

          <div className="modal-field">
            <label>Started reading</label>
            <input name="startedReading" type="date" value={form.startedReading} onChange={handleChange} />
          </div>

          <div className="modal-field">
            <label>Comments <span className="optional">(optional)</span></label>
            <textarea name="comments" value={form.comments} onChange={handleChange} placeholder="Your thoughts..." rows={3} />
          </div>

          <button className="modal-submit" type="submit">Add book</button>
        </form>
      </div>
    </div>
  )
}
