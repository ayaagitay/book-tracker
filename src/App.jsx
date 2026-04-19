import { useState } from 'react'
import Header from './components/Header'
import BookCard from './components/BookCard'
import AddBookModal from './components/AddBookModal'
import ReadingView from './components/ReadingView'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [view, setView] = useState('all')

  const booksRead = books.filter(b => b.status === 'completed').length

  function handleAddBook(book) {
    setBooks(prev => [...prev, book])
  }

  const filtered = view === 'all'
    ? books
    : books.filter(b => b.status === view)

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
          ? <ReadingView books={filtered} />
          : (
            <div className="books-grid">
              {filtered.map(book => (
                <BookCard key={book.id} book={book} />
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
    </>
  )
}

export default App
