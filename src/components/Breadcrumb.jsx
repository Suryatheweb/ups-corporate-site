import { Link } from 'react-router-dom'

export default function Breadcrumb({ current }) {
  return (
    <nav className="breadcrumb" aria-label="パンくずリスト">
      <ol>
        <li>
          <Link to="/">TOP</Link>
        </li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  )
}
