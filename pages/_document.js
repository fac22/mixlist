import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400&family=IBM+Plex+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="bg-WHITE h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
