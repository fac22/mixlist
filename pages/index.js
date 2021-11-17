import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  const [toggleMenu, setToggleMenu] = React.useState(true);
  const menuValues =
    'flex flex-col w-screen h-screen bg-red-300 fixed justify-center ';

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mixlist</title>
      </head>

      <body className="bg-red text-white">
        <div
          className={`${menuValues} ${toggleMenu ? 'visible' : 'invisible'}`}
        >
          <h1 className="bg-mixlistPurple text-center	">🎸</h1>

          <ul className="w-screen h-screen flex flex-col justify-around items-center list-none bg-mixlistPurple">
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
                return toggleMenu ? false : true;
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
      </body>
    </html>
  );
}
