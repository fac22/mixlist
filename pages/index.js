import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  const [toggleMenu, setToggleMenu] = React.useState(true);
  const menuValues =
    'flex flex-col w-screen h-screen bg-red-300 fixed justify-center';

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mixlist</title>
      </head>
      <div className={`${menuValues} ${toggleMenu ? 'visible' : 'invisible'}`}>
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
      {/* </Flex>
      <Flex direction="row" mb={5} rounded width="500px">
        <img src=""></img>
        <div>
          <p>
            Track your music, recommend albums to your friends, save tracks for
            later
          </p>
        </div>
        <p>Explore</p>
      </Flex> */}
      {/* <footer>
        <p>Contact us</p>
        <button>Help</button>
      </footer> */}
    </>
  );
}
