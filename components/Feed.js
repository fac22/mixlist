import album0 from '../public/album.jpg';
import album1 from '../public/album1.jpg';
import album2 from '../public/album2.jpg';
import album3 from '../public/album3.jpg';
import album4 from '../public/album4.jpg';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import { Header } from '../components/Header';
import Layout from '../components/Layout';
import { Main } from '../components/Main';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import FeedAlbum from './FeedAlbum';
import { menuOptions } from './menuOptions';
import { motion } from 'framer-motion';
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

export default function Feed({ session }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <motion.div initial={'initial'} animate={'animate'} exit={{ opacity: 0 }}>
      <Head>
        <Layout title="MIXLIST" />
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
        session={session}
      />
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <motion.div variants={settings}>
          <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
            <FeedAlbum albumArt={album0}></FeedAlbum>
            <FeedAlbum albumArt={album1}></FeedAlbum>
            <FeedAlbum albumArt={album2}></FeedAlbum>
            <FeedAlbum albumArt={album3}></FeedAlbum>
            <FeedAlbum albumArt={album4}></FeedAlbum>
          </Main>
        </motion.div>
      </BackgroundWrapper>
    </motion.div>
  );
}
