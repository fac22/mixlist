import React from 'react';
import Head from 'next/head';
import { Main } from '../components/Main';
import Input from '../components/Input';
import { Header } from '../components/Header';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import { Button } from '../components/Button';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

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

export default function LoginPage(props) {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <motion.div initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
      <Head>
        <Layout title="LOG IN" />
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
        <motion.div variants={settings}>
          <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
            <form className="flex flex-col items-center justify-center h-screen">
              <Input placeHolder="EMAIL" bgColor="REDT" textColor="DRED" />
              <Input placeHolder="PASSWORD" bgColor="BLUET" textColor="DBLUE" />
              <Button
                bgColor={'GREENT'}
                textColor={'DGREEN'}
                bgColorHover={'GREENHOVER'}
                title={'LOGIN'}
              />
            </form>
          </Main>
        </motion.div>
      </BackgroundWrapper>
    </motion.div>
  );
}
