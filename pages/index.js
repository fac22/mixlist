import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import HomeLoggedOut from '../components/HomeLoggedOut';
import Feed from '../components/Feed';
import Image from 'next/dist/client/image';
import { H4 } from '../components/H4';
import { BiLike } from 'react-icons/bi';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import { motion } from 'framer-motion';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { Header } from '../components/Header';
import Layout from '../components/Layout';
import { Main } from '../components/Main';
import Head from 'next/head';
import FeedAlbum from '../components/FeedAlbum';
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

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [session, setSession] = useState(null);
  const [feed, setFeed] = useState(null);

  async function getFeed() {
    let { data, error } = await supabase.rpc('get__feed');
    console.log(data);
    if (error) console.error(error);
    else return data;
  }
  console.log(feed);
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    getFeed().then((data) => setFeed(data));
  }, []);

  {
  }
  return (
    <div>
      {!session ? (
        <HomeLoggedOut />
      ) : !feed ? (
        <>Loading ...</>
      ) : (
        <>
          <motion.div
            initial={'initial'}
            animate={'animate'}
            exit={{ opacity: 0 }}
          >
            <Head>
              <Layout title="MIXLIST" />
            </Head>

            <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            <Search
              toggleSearch={toggleSearch}
              setToggleSearch={setToggleSearch}
            />
            <Header
              toggleMenu={toggleMenu}
              setToggleMenu={setToggleMenu}
              toggleSearch={toggleSearch}
              setToggleSearch={setToggleSearch}
              textColor={'WHITE'}
              content={'MIXLIST'}
              session={session}
            />
            <BackgroundWrapper
              toggleMenu={toggleMenu}
              toggleSearch={toggleSearch}
            >
              <motion.div variants={settings}>
                <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
                  {feed.map((obj) => {
                    return (
                      <FeedAlbum
                        key={obj.key}
                        albumArt={obj.album_image}
                        artistName={obj.artist_name}
                        albumTitle={obj.album_name}
                        username={obj.username}
                      />
                    );
                  })}
                </Main>
              </motion.div>
            </BackgroundWrapper>
          </motion.div>
        </>
      )}
    </div>
  );
}
