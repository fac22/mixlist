import React from 'react';
import Head from 'next/head';

import Input from '../components/Input';
import { Header } from '../components/Header';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import { Button } from '../components/Button';

export default function loginPage(props) {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <title>LOG IN</title>
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
        <form className="flex flex-col items-center justify-center w-screen h-screen">
          <Input placeHolder="EMAIL" bgColor="REDT" textColor="DRED" />
          <Input placeHolder="PASSWORD" bgColor="BLUET" textColor="DBLUE" />
          <Button
            bgColor={'GREENT'}
            textColor={'DGREEN'}
            bgColorHover={'GREENHOVER'}
            title={'CLICK'}
          />
        </form>
      </BackgroundWrapper>
    </>
  );
}
