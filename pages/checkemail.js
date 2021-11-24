import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';
import { H2 } from '../components/H2';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Main } from '../components/Main';
import { motion } from 'framer-motion';

import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Layout from '../components/Layout';
import Link from 'next/link';

const settings = {
  initial: {
    opacity: 1,
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

export default function DiscoverPage() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <motion.div initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
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
        <motion.div variants={settings}>
          <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
            <section className="mt-52">
              <H2 color={'GREENT'}>{"We've sent you an email!"}</H2>
              <Button
                className="mt-10"
                bgColor={'GREENT'}
                textColor={'DGREEN'}
                bgColorHover={'GREENHOVER'}
                title={'CHECK YOUR EMAIL'}
                route={
                  'https://mail.google.com/mail/u/?authuser=cemalokten@gmail.com'
                }
              />
            </section>
          </Main>
        </motion.div>
        ,
      </BackgroundWrapper>
    </motion.div>
  );
}
