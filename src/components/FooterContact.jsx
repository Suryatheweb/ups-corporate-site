import { Link } from 'react-router-dom'
import { images, site } from '../data/siteData'

export default function FooterContact() {
  return (
    <section
      className="footer-contact"
      style={{ backgroundImage: `url(${images.contact})` }}
      aria-labelledby="footer-contact-title"
    >
      <div className="footer-contact-inner">
        <h2 id="footer-contact-title">
          <span className="en">CONTACT</span>
          <span className="jp">お問い合わせ</span>
        </h2>

        <div className="footer-contact-body">
          <div className="footer-tel">
            <a href={site.telHref} className="tel-link">
              <span className="en">TEL</span>
              <span className="number">{site.tel}</span>
            </a>
            <p>{site.hours}</p>
          </div>

          <Link to="/contact" className="footer-mail">
            お問い合わせ・お見積り
          </Link>
        </div>
      </div>
    </section>
  )
}
