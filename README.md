# 合同会社アップス コーポレートサイト

既存サイトの構成を参考に、React + Vite で作り直したコーポレートサイトです。
GitHub Pages にそのまま公開できる構成になっています。

**公開URL:** https://suryatheweb.github.io/ups-corporate-site/

## ローカルで動かす

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173/` を開きます。

本番ビルドの確認:

```bash
npm run build
npm run preview
```

## ページ構成

| ページ | パス |
| --- | --- |
| トップ | `/` |
| お知らせ | `/news` |
| 代表挨拶 | `/message` |
| 事業内容 | `/service` |
| 会社概要 | `/company` |
| お問い合わせ | `/contact` |

GitHub Pages でも直接リンクが開けるように `HashRouter` を採用しています。
公開URLは `https://ユーザー名.github.io/リポジトリ名/#/news` のようになります。

## 文章・会社情報の変更

`src/data/siteData.js` に会社情報・文章・ニュースをまとめています。

- `site.name` / `site.nameEn`: 会社名
- `site.tel` / `site.telHref`: 電話番号
- `site.representative` / `site.representativeTitle`: 代表者
- `site.postal` / `site.address`: 住所
- `site.mapEmbedUrl`: Googleマップの埋め込みURL
- `site.formEndpoint`: お問い合わせフォームの送信先
- `site.news`: お知らせ一覧
- `site.message`: 代表挨拶
- `site.service`: 事業内容
- `site.company`: 会社概要テーブル

**住所・代表者名・電話番号は必ず公開前に確認してください。**
現在、住所とGoogleマップは仮の内容です。

## 画像の差し替え

`public/images/` の画像を差し替えてください。ファイル名を同じにすればコード変更は不要です。

| ファイル | 用途 | 推奨サイズ |
| --- | --- | --- |
| `top_mv.jpg` | トップ・お知らせのメインビジュアル | 1920 x 1080 |
| `mv_message.jpg` | 代表挨拶 | 1200 x 800 |
| `mv_service.jpg` | 事業内容 | 1200 x 900 |
| `mv_company.jpg` | 会社概要 | 1200 x 800 |
| `contact_mv.jpg` | お問い合わせ・フッター | 1600 x 900 |

> **重要:** `public/images/` の現在の画像は [Unsplash](https://unsplash.com/license) の
> フリー素材を仮画像として使用しています。公開前には、自社で撮影した写真や
> 権利を保有している画像に差し替えることをおすすめします。

元サイトのHTML・CSS・画像は `_reference/` に保存してあります（`.gitignore` 対象）。
見た目の比較用に残しているもので、公開サイトには含まれません。

## お問い合わせフォーム

GitHub Pages は静的サイトのため、フォーム送信には外部サービスが必要です。
[Formspree](https://formspree.io/) などの送信先URLを取得し、`src/data/siteData.js` の
`formEndpoint` に設定してください。

```js
formEndpoint: 'https://formspree.io/f/xxxxxxxx'
```

未設定の場合は、入力内容を送信せず「お電話にてお問い合わせください」と表示します。

## GitHub Pages へ公開

### 1. GitHub リポジトリを作成して push

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
```

### 2. GitHub Pages を有効化

1. リポジトリの **Settings** → **Pages** を開く
2. **Build and deployment** の **Source** を **GitHub Actions** に変更
3. `main` ブランチへ push すると `.github/workflows/deploy.yml` が自動でビルド・公開

公開URL:

```text
https://ユーザー名.github.io/リポジトリ名/
```

`vite.config.js` の `base` は `./` にしているため、リポジトリ名を変更しても
ビルド設定の修正は不要です。

## カラーの変更

`src/styles/global.css` の先頭にある CSS 変数を変更すると、サイト全体の色を調整できます。

```css
:root {
  --accent: #ff7800;
  --accent-dark: #e56a00;
  --highlight: #fff200;
  ...
}
```
