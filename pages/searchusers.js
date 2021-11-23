import { Button } from '../components/Button';
import { supabase } from '../utils/supabaseClient';
import { useState, useEffect, createRef, useRef } from 'react';
import { useFormik } from 'formik';

export default function SearchUsers() {
  const [username, setUsername] = useState('SASHA');

  async function getUser(userSearch) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .textSearch('username', userSearch)
        .single();
      setUsername(data);
    } catch {
      console.log('USER NOT FOUND');
    }
  }

  useEffect(() => {
    console.log(username.profile_img);
  }, [username]);

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      getUser(values.search);
    },
  });

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="search">Search</label>
          <input
            id="search"
            name="search"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
