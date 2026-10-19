import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { images, site } from '../data/siteData'

export default function Company() {
  usePageMeta('会社概要', `${site.name}の概要をご確認いただけます。`)

  return (
    <>
      <PageHero
        image={images.company}
        en="COMPANY"
        jp="会社概要"
        description={`${site.name}の概要をご確認いただけます`}
      />
      <Breadcrumb current="会社概要" />
      <div className="container page-content">
        <Reveal className="contentbox">
          <table className="table_02">
            <tbody>
              {site.company.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>
                    {row.value.split('\n').map((line, index) => (
                      <span key={`${row.label}-${line}`}>
                        {line}
                        {index < row.value.split('\n').length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="map-box">
            {site.mapEmbedUrl ? (
              <iframe
                src={site.mapEmbedUrl}
                title={`${site.name}の地図`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="map-placeholder">
                <span className="map-pin" aria-hidden="true" />
                <p>Google Map</p>
                <small>地図の埋め込みは準備中です</small>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </>
  )
}
