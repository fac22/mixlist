import React from 'react';
import Head from 'next/head';
import Profile from '../components/Profile';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Avatar from '../components/Avatar';
import getProfile from '../utils/getProfile';
import { Header } from '../components/Header';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Layout from '../components/Layout';

export default function ProfilePage() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [profile_img, setProfileImg] = useState(null);

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const setStateFunctions = {
    setUsername,
    setProfileImg,
    setLoading,
  };

  useEffect(() => {
    getProfile(setStateFunctions);
  }, [session]);

  return (
    <>
      <Head>
        <Layout title="PROFILE" />
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
        <Profile username={username} imageURL={profile_img} />
      </BackgroundWrapper>
    </>
  );
}
