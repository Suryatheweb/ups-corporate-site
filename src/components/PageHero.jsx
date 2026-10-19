import Reveal from './Reveal'
import WaterScroll from './WaterScroll'

export default function PageHero({ image, en, jp, description }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-overlay" aria-hidden="true" />
      <WaterScroll />
      <div className="page-hero-inner">
        <Reveal className="page-hero-copy">
          <h1 className="page-title">
            <span className="en">{en}</span>
            <span className="jp">{jp}</span>
          </h1>
          {description ? <p className="page-description">{description}</p> : null}
        </Reveal>
      </div>
    </section>
  )
}
