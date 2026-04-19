import { useState } from 'react'
import Header from './components/Header'
import BookCard from './components/BookCard'
import BookDetail from './components/BookDetail'
import AddBookModal from './components/AddBookModal'
import ReadingView from './components/ReadingView'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)
  const [view, setView] = useState('all')

  const booksRead = books.filter(b => b.status === 'completed').length

  function handleAddBook(book) {
    setBooks(prev => [...prev, book])
  }

  function handleSaveBook(updated) {
    setBooks(prev => prev.map(b => b.id === updated.id ? updated : b))
    setSelectedBook(updated)
  }

  const filtered = view === 'all' ? books : books.filter(b => b.status === view)

  return (
    <>
      <Header
        booksRead={booksRead}
        totalBooks={books.length}
        onAddBook={() => setModalOpen(true)}
        books={books}
        view={view}
        onViewChange={setView}
      />

      <main>
        {view === 'reading'
          ? <ReadingView books={filtered} onSelect={setSelectedBook} />
          : (
            <div className="books-grid">
              {filtered.map(book => (
                <BookCard key={book.id} book={book} onClick={() => setSelectedBook(book)} />
              ))}
            </div>
          )
        }
      </main>

      {modalOpen && (
        <AddBookModal
          onClose={() => setModalOpen(false)}
          onAdd={handleAddBook}
        />
      )}

      {selectedBook && (
        <BookDetail
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onSave={handleSaveBook}
        />
      )}
    </>
  )
}

export default App
