import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';

import { Header } from '../components/Header';

import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Input from '../components/Input';
import { Button } from '../components/Button';
export default function SearchPage() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <title>SEARCH</title>
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
        content={'SEARCH'}
      />
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <form className="flex flex-col items-center justify-center w-screen h-screen">
          <Input
            placeHolder="SEARCH"
            bgColor="REDT"
            textColor="DRED"
            bgColorHover={'REDHOVER'}
            type={'email'}
          />

          <Button
            bgColor={'GREENT'}
            textColor={'DGREEN'}
            bgColorHover={'GREENHOVER'}
            title={'SEARCH'}
          />
        </form>
      </BackgroundWrapper>
    </>
  );
}
