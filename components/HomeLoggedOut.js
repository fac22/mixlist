import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Button } from './Button';
import { Header } from './Header';
import { Main } from './Main';
import { H2 } from './H2';
import Input from './Input';
import Menu from './Menu';
import Search from './Search';
import { BackgroundWrapper } from './BackgroundWrapper';
import { motion } from 'framer-motion';
import Layout from './Layout';
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

export default function HomeLoggedOut() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      router.push('checkemail');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

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
              <H2 color={'GREENT'}>DISCOVER</H2>
              <H2 color={'BLUET'}>YOUR NEXT</H2>
              <H2 color={'PINK'}>FAVOURITE</H2>
              <H2 color={'PINKT'}>ALBUM</H2>
            </section>

            <section className="flex flex-col items-center justify-center">
              <input
                className={`flex flex-col rounded-md bg-REDT text-DRED placeholder-DRED text-center mb-4 focus:outline-none focus:placeholder-opacity-0 w-full h-12 transition duration-150 ease-in-out font-header hover:bg-REDHOVER active:bg-REDHOVER text-lg md:w-80 tracking-wider ring-2 ring-REDHOVER`}
                type="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className={`rounded-md bg-GREENT text-DGREEN hover:bg-GREENHOVER active:bg-GREENHOVER w-full md:w-80 h-12 transition duration-150 ease-in-out font-header tracking-wider mb-4 text-lg flex flex-col justify-center items-center ring-2 ring-GREENHOVER`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email);
                }}
                disabled={loading}
              >
                <span>{loading ? 'SENDING' : 'SEND MAGIC LINK'}</span>
              </button>
            </section>
          </Main>
        </motion.div>
      </BackgroundWrapper>
    </motion.div>
  );
}
