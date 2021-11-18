import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { H2 } from '../components/H2';
import Input from '../components/Input';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';

export default function Home() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <title>MIXLIST</title>
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
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
          <section className="mt-40 mb-20">
            <H2 color={'GREENT'}>DISCOVER</H2>
            <H2 color={'BLUET'}>YOUR NEXT</H2>
            <H2 color={'PINK'}>FAVOURITE</H2>
            <H2 color={'PINKT'}>ALBUM</H2>
          </section>

          <section className="flex flex-col items-center justify-center">
            <Input
              placeHolder="EMAIL"
              bgColor="REDT"
              textColor="DRED"
              bgColorHover={'REDHOVER'}
              type={'email'}
            />
            <Input
              placeHolder="PASSWORD"
              bgColor="BLUET"
              textColor="DBLUE"
              bgColorHover={'BLUEHOVER'}
              type={'password'}
            />
            <Button
              bgColor={'GREENT'}
              textColor={'DGREEN'}
              bgColorHover={'GREENHOVER'}
              title={'DISCOVER'}
            />
          </section>
        </Main>
      </BackgroundWrapper>
    </>
  );
}
