import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import FooterContact from './FooterContact'
import Header from './Header'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div id="wrap">
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <FooterContact />
      <Footer />
    </div>
  )
}
