import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>Liscript</title>
      </Head>
       <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/liscript/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/liscript/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/liscript/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/liscript/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/liscript/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/liscript/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
