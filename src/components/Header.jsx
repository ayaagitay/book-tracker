export default function Header({ booksRead, totalBooks }) {
  return (
    <header>
      <h1>My little library</h1>
      <p>{booksRead} of {totalBooks} books read</p>
    </header>
  )
}
