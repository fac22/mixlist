import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Button } from '../components/Button';
import { Hambuger } from '../components/Hamburger';

export default function Home() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const menuValues =
    'flex flex-col w-screen h-screen bg-red-300 fixed justify-center ';

  return (
    // <head>
    //   <meta charSet="UTF-8" />
    //   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   <title>Mixlist</title>
    // </head>

    <p>
      {/* <div className={`${menuValues} ${toggleMenu ? 'visible' : 'invisible'}`}>
        <h1 className="bg-mixlistPurple text-center	">🎸</h1>

        <ul className="w-screen h-screen flex flex-col justify-around items-center list-none bg-mixlistPurple">
          <li>HOME</li>
          <li>PROFILE</li>
          <li>TREND</li>
          <li>LOGIN</li>
        </ul>
      </div> */}

      <Button bgColor={'DBLUE'} textColor={'PINKT'}>
        Discover
      </Button>
    </p>
  );
}
