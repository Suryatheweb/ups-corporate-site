import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('ページが見つかりません', 'お探しのページは見つかりませんでした。')

  return (
    <div className="container not-found">
      <p className="not-found-code">404</p>
      <h1>ページが見つかりません</h1>
      <p>お探しのページは移動または削除された可能性があります。</p>
      <Link to="/" className="btn">
        TOPへ戻る
      </Link>
    </div>
  )
}
