import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';
import { Main } from '../components/Main';
import { Header } from '../components/Header';

import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Input from '../components/Input';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

const settings = {
  initial: {
    opacity: 0,
    x: 250,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function SearchPage() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <motion.div initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
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
        <motion.div variants={settings}>
          <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
            <form className="flex flex-col items-center justify-center h-screen">
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
          </Main>
        </motion.div>
      </BackgroundWrapper>
    </motion.div>
  );
}
