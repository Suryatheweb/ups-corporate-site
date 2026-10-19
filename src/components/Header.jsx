import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, site } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${open ? ' menu-open' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="site-logo" aria-label={`${site.name} トップページ`}>
          {site.name}
        </Link>

        <button
          type="button"
          className={`menu-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          aria-controls="global-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle-bars" aria-hidden="true">
            <span />
          </span>
        </button>

        <nav id="global-nav" className="global-nav" aria-label="メインメニュー">
          <ul>
            {navigation.map((item) => {
              const isContact = item.to === '/contact'
              return (
                <li key={item.to} className={isContact ? 'is-contact' : ''}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  >
                    <span className="jp">{item.label}</span>
                    <span className="en">{item.en}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
