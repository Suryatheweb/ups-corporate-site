import Breadcrumb from '../components/Breadcrumb'
import NewsList from '../components/NewsList'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { images, site } from '../data/siteData'

export default function News() {
  usePageMeta('お知らせ', '合同会社アップスの最新情報をお知らせいたします。')

  return (
    <>
      <PageHero
        image={images.hero}
        en="NEWS"
        jp="お知らせ"
        description="最新情報をお知らせいたします"
      />
      <Breadcrumb current="お知らせ" />
      <div className="container page-content">
        <Reveal className="contentbox">
          <NewsList items={site.news} />
        </Reveal>
      </div>
    </>
  )
}
