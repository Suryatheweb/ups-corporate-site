import { Link } from 'react-router-dom'

export default function NewsList({ items }) {
  if (!items.length) {
    return <p className="news-empty">現在、お知らせはありません。</p>
  }

  return (
    <ul className="news-list">
      {items.map((item) => {
        const content = (
          <>
            <time dateTime={item.datetime}>{item.date}</time>
            <span className="news-cate">
              <span>{item.category}</span>
            </span>
            <span className="news-title">{item.title}</span>
          </>
        )

        return (
          <li key={`${item.datetime}-${item.title}`}>
            {item.to ? (
              <Link to={item.to} className="news-item">
                {content}
              </Link>
            ) : (
              <div className="news-item">{content}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
