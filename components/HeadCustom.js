import Head from 'next/head';

const HeadCustom = (props) => (
  <div>
    <Head>
      <title>The page title</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@500&family=IBM+Plex+Mono&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  </div>
);

export default House;
