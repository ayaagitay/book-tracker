import { useState } from 'react'
import Header from './components/Header'
import BookCard from './components/BookCard'
import AddBookModal from './components/AddBookModal'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const booksRead = books.filter(b => b.read).length

  function handleAddBook(book) {
    setBooks(prev => [...prev, book])
  }

  return (
    <>
      <Header
        booksRead={booksRead}
        totalBooks={books.length}
        onAddBook={() => setModalOpen(true)}
      />

      <main className="books-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
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
