import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';
import { H2 } from '../components/H2';
import { Header } from '../components/Header';

import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Layout from '../components/Layout';

export default function DiscoverPage() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <Layout title="DISCOVER" />
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
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <section className="mt-28 mb-20">
          <H2 color={'GREENT'}>DISCOVER</H2>
          <H2 color={'BLUET'}>YOUR NEXT</H2>
          <H2 color={'PINK'}>FAVOURITE</H2>
          <H2 color={'PINKT'}>ALBUM</H2>
        </section>
      </BackgroundWrapper>
    </>
  );
}
