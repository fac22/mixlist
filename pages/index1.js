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
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import getProfile from '../utils/getProfile';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

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

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  const [session, setSession] = useState(null);
  const router = useRouter();

  const sessionCheck = supabase.auth.session();

  useEffect(() => {
    if (!sessionCheck) {
      router.push('/search');
    }
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const setStateFunctions = {
    setUsername,
    setAvatarUrl,
    setLoading,
  };

  useEffect(() => {
    getProfile(setStateFunctions);
  }, [session]);
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
      />
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <motion.div variants={settings}>
          <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
            <section className="mt-28 mb-20">
              <H2 color={'GREENT'}>{username || 'NO USER'}</H2>
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
              {/* <Input
                placeHolder="PASSWORD"
                bgColor="BLUET"
                textColor="DBLUE"
                bgColorHover={'BLUEHOVER'}
                type={'password'}
              /> */}
              <Button
                bgColor={'GREENT'}
                textColor={'DGREEN'}
                bgColorHover={'GREENHOVER'}
                title={'SIGN UP OR LOGIN'}
                route={'login'}
              />
            </section>
          </Main>
        </motion.div>
      </BackgroundWrapper>
    </motion.div>
  );
}
