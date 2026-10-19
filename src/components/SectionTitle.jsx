export default function SectionTitle({ en, jp }) {
  return (
    <h2 className="section-title">
      <span className="en">{en}</span>
      <span className="jp">{jp}</span>
    </h2>
  )
}
