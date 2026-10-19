import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { images, site } from '../data/siteData'

export default function Message() {
  usePageMeta('代表挨拶', `${site.name}代表社員からのご挨拶です。`)

  return (
    <>
      <PageHero
        image={images.message}
        en="MESSAGE"
        jp="代表挨拶"
        description={`${site.name}代表社員からのご挨拶です`}
      />
      <Breadcrumb current="代表挨拶" />
      <div className="container page-content">
        <Reveal className="contentbox message-content">
          <h2 className="ttl_fwb tal">{site.message.title}</h2>
          {site.message.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="sign">
            <span className="post">{site.representativeTitle}</span>
            <span className="name">{site.representative}</span>
          </p>
        </Reveal>
      </div>
    </>
  )
}
