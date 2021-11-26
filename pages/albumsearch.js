import { BackgroundWrapper } from '../components/BackgroundWrapper';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Head from 'next/head';
import { Main } from '../components/Main';
import Search from '../components/Search';
import { Header } from '../components/Header';
import { useState, useEffect } from 'react';
import AlbumResults from '../components/AlbumSearchResults';
import { supabase } from '../utils/supabaseClient';

export default function AlbumSearch() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <>
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
        <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
          <AlbumResults />
        </Main>
      </BackgroundWrapper>
    </>
  );
}
