import TopAlbums from '../components/TopAlbums';
import TopTracks from '../components/TopTracks';
import Head from 'next/head';
import { Header } from '../components/Header';
import React from 'react';

import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Layout from '../components/Layout';

export default function Top() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <Layout title="TOP 10" />
      </Head>
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
        textColor={'WHITE'}
        content={'TOP 10'}
      />
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <TopAlbums />
        <TopTracks />
      </BackgroundWrapper>
      {/* <TopAlbums />
      <TopTracks /> */}
    </>
  );
}
