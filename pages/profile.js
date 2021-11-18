import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';

import { Header } from '../components/Header';

import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';

export default function ProfilePage() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <title>PROFILE</title>
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
        content={'MYPROFILE'}
      />
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <Profile />
      </BackgroundWrapper>
    </>
  );
}
