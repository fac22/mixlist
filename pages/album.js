import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import Input from '../components/Input';
import Menu from '../components/Menu';
import Search from '../components/Search';
import albumArt from '../public/album.jpg';

export default function Home() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);

  const STYLE = 'font-header text-4xl tracking-widest text-center mt-3';
  return (
    <>
      <Head>
        <title>Mixlist</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
        textColor={'WHITE'}
        content={'MIXLIST'}
      />
      <main
        className={`w-full p-5 z-10 ${
          toggleMenu || toggleSearch
            ? 'filter transition duration-300 ease-out blur-max pointer-events-none'
            : 'visible'
        }`}
      >
        <section className="mt-14 mb-20">
          <Image src={albumArt} alt="Album Artwork"></Image>
        </section>
        <section className="flex flex-col items-center justify-center"></section>
      </main>
    </>
  );
}
