import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { images, site } from '../data/siteData'

export default function Service() {
  usePageMeta('事業内容', `${site.name}のサービスを紹介します。`)

  return (
    <>
      <PageHero
        image={images.service}
        en="SERVICE"
        jp="事業内容"
        description={`${site.name}のサービスを紹介します`}
      />
      <Breadcrumb current="事業内容" />
      <div className="container page-content">
        <Reveal className="contentbox">
          <h2 className="ttl_bb">{site.service.heading}</h2>
          <p className="txtbox tac">
            {site.service.lead.split('\n').map((line, index) => (
              <span key={line}>
                {line}
                {index < site.service.lead.split('\n').length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal className="contentbox" delay={80}>
          <div className="pictxtbox">
            <div className="pictxtbox-pic">
              <img src={images.service} alt={site.service.cardTitle} loading="lazy" />
            </div>
            <div className="pictxtbox-txt">
              <div className="pictxtbox-inner">
                <h2 className="ttl_fwb">{site.service.cardTitle}</h2>
                <ul>
                  {site.service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  )
}
