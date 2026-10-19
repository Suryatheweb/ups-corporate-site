import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { images, site } from '../data/siteData'

const initialStatus = { type: 'idle', message: '' }

export default function Contact() {
  usePageMeta('お問い合わせ', `${site.name}へのお問い合わせはこちらから。`)
  const [status, setStatus] = useState(initialStatus)
  const [sending, setSending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (!site.formEndpoint) {
      setStatus({
        type: 'notice',
        message:
          'フォームの送信先が未設定です。お手数ですが、お電話にてお問い合わせください。',
      })
      return
    }

    setSending(true)
    setStatus(initialStatus)

    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('送信に失敗しました')
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          '送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてお問い合わせください。',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageHero
        image={images.contact}
        en="CONTACT"
        jp="お問い合わせ"
        description="ご質問・ご相談は以下のフォームからお問い合わせください"
      />
      <Breadcrumb current="お問い合わせ" />
      <div className="container page-content">
        <Reveal className="contentbox">
          <p className="txtbox">
            ご質問・ご相談等ございましたら、以下のフォーム又はお電話にてお気軽にお問い合わせください。
            <br />
            なお、お問い合わせの内容によっては、お返事を差し上げるまでにお時間がかかる場合がございます。
          </p>
        </Reveal>

        <Reveal className="contentbox" delay={80}>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-label="お問い合わせフォーム"
          >
            <input type="hidden" name="_subject" value={`${site.name} お問い合わせ`} />

            <div className="form-row">
              <label htmlFor="name">
                お名前 <span className="required">必須</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={400}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="tel">
                電話番号 <span className="required">必須</span>
              </label>
              <input
                id="tel"
                name="tel"
                type="tel"
                autoComplete="tel"
                maxLength={400}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">
                メールアドレス <span className="required">必須</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={400}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">
                お問い合わせ内容 <span className="required">必須</span>
              </label>
              <textarea id="message" name="message" rows={8} maxLength={2000} required />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? '送信中…' : '送信'}
              </button>
            </div>

            {status.message ? (
              <p className={`form-status is-${status.type}`} role="status">
                {status.message}
              </p>
            ) : null}
          </form>

          <div className="contact-tel-box">
            <p className="contact-tel-label">お電話でのお問い合わせ</p>
            <a href={site.telHref} className="contact-tel">
              {site.tel}
            </a>
            <p>{site.hours}</p>
          </div>
        </Reveal>
      </div>
    </>
  )
}
