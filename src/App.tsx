
import { Outlet, Link } from 'react-router-dom'
import './styles.css'

export default function App() {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="brand">KA‑Lite</Link>
        <div className="spacer" />
        <a href="https://www.khanacademy.org/" target="_blank" rel="noreferrer">Khan Academy</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <main className="main"><Outlet /></main>
      <footer className="footer">© {new Date().getFullYear()} KA‑Lite — Demo</footer>
    </div>
  )
}
