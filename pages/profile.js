import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';

import { Header } from '../components/Header';

import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Layout from '../components/Layout';

export default function ProfilePage() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <Layout title="PROFILE" />
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
        <Profile />
      </BackgroundWrapper>
    </>
  );
}
