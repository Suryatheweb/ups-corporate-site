import { Link } from 'react-router-dom'
import { navigation, site } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link to="/" className="footer-logo">
          {site.name}
        </Link>

        <nav className="footer-nav" aria-label="フッターメニュー">
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <small>© {new Date().getFullYear()} {site.name}</small>
    </footer>
  )
}
