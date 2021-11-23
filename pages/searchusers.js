import { Button } from '../components/Button';
import { supabase } from '../utils/supabaseClient';
import { useState, useEffect, createRef, useRef } from 'react';

export default function SearchUsers() {
  const [username, setUsername] = useState('SASHA');
  const inputRef = createRef();

  async function getUser() {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .textSearch('username', username)
      .single();
    setUsername(data.username);
  }

  useEffect(() => {
    getUser();
    console.log(username);
  }, [username]);

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <form>
          <input
            placeholder="TYPE USERNAME"
            bgcolor="REDT"
            textcolor="DRED"
            bgcolorhover={'REDHOVER'}
            type={'text'}
            onSubmit={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
          />

          <button
            bgcolor={'GREENT'}
            textcolor={'DGREEN'}
            bgcolorhover={'GREENHOVER'}
            title={'SEARCH'}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            SEARCH
          </button>
        </form>
      </section>
    </>
  );
}
