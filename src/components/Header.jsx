import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Header({ booksRead, totalBooks }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <header className="header">
        <button
          className="header-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="header-center">
          <h1 className="header-title">My little library</h1>
          <p className="header-subtitle">{booksRead} of {totalBooks} books read</p>
        </div>

        <button className="header-btn header-btn--add" aria-label="Add book">
          +
        </button>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  )
}
