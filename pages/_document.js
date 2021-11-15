import Document, { Html, Head, Main, NextScript } from 'next/document';

import Image from 'next/image';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const [toggleMenu, setToggleMenu] = React.useState(true);
    const menuValues =
      'flex flex-col w-screen h-screen bg-red-300 fixed justify-center ';
    return (
      <Html lang="en">
        <Head>
          <>
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Mixlist</title>
          </>
        </Head>

        <body>
          <Main>
            <div
              className={`${menuValues} ${
                toggleMenu ? 'visible' : 'invisible'
              }`}
            >
              <ul className="w-screen h-3/5 flex flex-col justify-around items-center list-none">
                <li>HOME</li>
                <li>PROFILE</li>
                <li>TREND</li>
                <li>LOGIN</li>
              </ul>
            </div>
            <div className="w-screen flex flex-row justify-between">
              <button
                onClick={() =>
                  setToggleMenu(() => {
                    return toggleMenu === true ? false : true;
                  })
                }
              >
                <div className="tham tham-e-squeeze tham-w-6">
                  <div className="tham-box">
                    <div className="tham-inner" />
                  </div>
                </div>
              </button>
              <h1>Mixlist</h1>

              <span>🔍</span>
            </div>
          </Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
