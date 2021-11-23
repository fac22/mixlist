import { createClient } from '@supabase/supabase-js';
import Auth from '../components/Auth';
import Account from '../components/Account';
import Input from '../components/Input';
import { Button } from '../components/Button';
// import { supabase } from '../utils/supabaseClient';

import { useState, useEffect, createRef } from 'react';

const supabase = createClient(
  'https://lziyckwaeqxibcefiidf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjk3MjU4NiwiZXhwIjoxOTUyNTQ4NTg2fQ.OQGi0cCg5j6uzEGr_7bPd4xCIcLK355zidOzNYkWsXQ'
);

function SearchUsers() {
  const [session, setSession] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [matchKeyword, setMatchKeyword] = useState(null);
  const [userResult, setUserResult] = useState(null);
  const [match, setMatch] = useState(false);
  const [userImg, setUserImg] = useState(null);
  console.log({ searchKeyword });
  console.log({ userResult });
  console.log({ match });

  const [users, setUsers] = useState();
  useEffect(() => {
    // setSession(supabase.auth.session());

    // supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session);
    // });
    getUserName(searchKeyword);
  }, []);

  useEffect(() => {
    match
      ? setUserImg(
          `https://lziyckwaeqxibcefiidf.supabase.in/storage/v1/object/sign/avatars/${userResult[0].profile_img}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzAuMjQ5MjE2MTE4OTM0NjMwNTguanBnIiwiaWF0IjoxNjM3NjY3ODAyLCJleHAiOjE5NTMwMjc4MDJ9.BxEg-mzmqlwIQBqDOSG-ruEB6Zt_FeGzhApWM5uY-qY`
        )
      : setUserImg(
          'https://lziyckwaeqxibcefiidf.supabase.in/storage/v1/object/sign/avatars/0.24921611893463058.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzAuMjQ5MjE2MTE4OTM0NjMwNTguanBnIiwiaWF0IjoxNjM3NjY3ODAyLCJleHAiOjE5NTMwMjc4MDJ9.BxEg-mzmqlwIQBqDOSG-ruEB6Zt_FeGzhApWM5uY-qY'
        );
  }, [match]);

  async function getUserName(text) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .textSearch('username', text);

    setUserResult(data);
    console.log({ data });
    // text === data[0].username ? setMatch(true) : setMatch(false);
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <input
          placeholder="TYPE USERNAME"
          bgcolor="REDT"
          textcolor="DRED"
          bgcolorhover={'REDHOVER'}
          type={'text'}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        <button
          bgcolor={'GREENT'}
          textcolor={'DGREEN'}
          bgcolorhover={'GREENHOVER'}
          title={'SEARCH'}
          route={'searchusers'}
          onClick={(e) => {
            getUserName(searchKeyword);
            setMatch(true);
          }}
        >
          SEARCH
        </button>
      </section>

      <img src={userImg}></img>

      <p>search keyword: {searchKeyword}</p>
      <p>match keyword: {matchKeyword}</p>
    </>
  );
}

export default SearchUsers;
