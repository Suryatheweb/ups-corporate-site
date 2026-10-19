import { Link } from 'react-router-dom'
import NewsList from '../components/NewsList'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import WaterScroll from '../components/WaterScroll'
import usePageMeta from '../hooks/usePageMeta'
import { images, site } from '../data/siteData'

const features = [
  {
    to: '/message',
    en: 'MESSAGE',
    jp: '代表挨拶',
    text: '代表社員からのご挨拶です',
    image: images.message,
    alt: '代表挨拶',
  },
  {
    to: '/service',
    en: 'SERVICE',
    jp: '事業内容',
    text: 'アップスのサービスを紹介します',
    image: images.service,
    alt: '事業内容',
  },
  {
    to: '/company',
    en: 'COMPANY',
    jp: '会社概要',
    text: 'アップスの概要をご確認いただけます',
    image: images.company,
    alt: '会社概要',
  },
]

export default function Home() {
  usePageMeta(null, '合同会社アップスのホームページです。')

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${images.hero})` }}
        aria-label="メインビジュアル"
      >
        <div className="hero-overlay" aria-hidden="true" />
        <WaterScroll />
        <div className="hero-content">
          <Reveal>
            <h1>
              <span className="en">
                Pride in <span>supporting everyday life</span>
              </span>
              <span className="jp">毎日の暮らしに安心と快適を</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section news-section" aria-labelledby="home-news-title">
        <Reveal>
          <SectionTitle en="NEWS" jp="お知らせ" />
        </Reveal>
        <Reveal delay={80}>
          <NewsList items={site.news} />
        </Reveal>
        <div className="btn-wrap">
          <Link to="/news" className="btn">
            VIEW MORE
          </Link>
        </div>
      </section>

      <section className="feature-rows" aria-label="サイト内のご案内">
        {features.map((feature, index) => (
          <Reveal key={feature.to} className="feature-row" delay={index * 60}>
            <div className="feature-pic">
              <img src={feature.image} alt={feature.alt} loading="lazy" />
            </div>
            <div className="feature-txt">
              <div className="feature-inner">
                <SectionTitle en={feature.en} jp={feature.jp} />
                <p>{feature.text}</p>
                <Link to={feature.to} className="btn">
                  VIEW MORE
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  )
}
