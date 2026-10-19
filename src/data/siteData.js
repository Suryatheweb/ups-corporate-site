const base = import.meta.env.BASE_URL

export const images = {
  hero: `${base}images/top_mv.jpg`,
  message: `${base}images/mv_message.jpg`,
  service: `${base}images/mv_service.jpg`,
  company: `${base}images/mv_company.jpg`,
  contact: `${base}images/contact_mv.jpg`,
}

export const navigation = [
  { to: '/', label: 'トップ', en: 'TOP', end: true },
  { to: '/news', label: 'お知らせ', en: 'NEWS' },
  { to: '/message', label: '代表挨拶', en: 'MESSAGE' },
  { to: '/service', label: '事業内容', en: 'SERVICE' },
  { to: '/company', label: '会社概要', en: 'COMPANY' },
  { to: '/contact', label: 'お問い合わせ', en: 'CONTACT' },
]

export const site = {
  name: '合同会社アップス',
  nameEn: 'UPS LLC',
  tel: '080-9351-0137',
  telHref: 'tel:08093510137',
  hours: '営業時間 9:00〜18:00（土日祝日を除く）',
  representative: '雪丸勇貴',
  representativeTitle: '代表社員',

  // TODO: 公開前に実際の住所・郵便番号に変更してください。
  postal: '〒000-0000',
  address: '東京都○○区○○ 0-0-0',

  // TODO: Googleマップの「地図を埋め込む」URLを貼り付けてください。
  mapEmbedUrl: '',

  // TODO: Formspree などの送信先URLを設定するとフォームが実際に送信されます。
  // 例: 'https://formspree.io/f/xxxxxxx'
  formEndpoint: '',

  news: [
    {
      date: '2026.10.19',
      datetime: '2026-10-19',
      category: 'お知らせ',
      title: 'Webサイトを公開しました。',
    },
  ],

  message: {
    title: '暮らしに寄り添い、信頼される会社でありたい',
    paragraphs: [
      '合同会社アップスのホームページをご覧いただき、ありがとうございます。代表社員の雪丸勇貴と申します。',
      '当社は、お客様の毎日の暮らしに安心と快適をお届けすることを使命として設立いたしました。時代やライフスタイルの変化を捉え、品質と信頼性を大切にしながら、一人ひとりのお客様に寄り添うサービスを提供してまいります。',
      'これからも誠実な事業運営を心がけ、地域社会やお取引先様との信頼関係を大切にしながら、社会に貢献できる企業を目指してまいります。今後とも変わらぬご支援を賜りますようお願い申し上げます。',
    ],
  },

  service: {
    heading: '合同会社アップスが手がけること',
    lead: '合同会社アップスは、ネット通販事業を通じて、\nお客様のくらしをサポートする事業活動を行なっております。',
    cardTitle: 'ネット通販事業',
    points: [
      '自社ECサイトによる商品の企画・販売',
      'ECモール（Amazon・楽天等）を利用した商品の販売',
      'インターネットを利用した国内外商品の通信販売',
    ],
  },

  company: [
    { label: '会社名', value: '合同会社アップス' },
    { label: '代表者', value: '代表社員 雪丸勇貴' },
    { label: '所在地', value: '〒000-0000\n東京都○○区○○ 0-0-0' },
    { label: '電話番号', value: '080-9351-0137' },
    { label: '事業内容', value: 'ネット通販事業' },
  ],
}
