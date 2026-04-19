import Header from './components/Header'
import './App.css'

function App() {
  const books = [
    { title: 'The Hobbit', read: true },
    { title: '1984', read: true },
    { title: 'Dune', read: false },
  ]

  const booksRead = books.filter(b => b.read).length

  return (
    <>
      <Header booksRead={booksRead} totalBooks={books.length} />
    </>
  )
}

export default App
