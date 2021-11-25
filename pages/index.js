import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import HomeLoggedOut from '../components/HomeLoggedOut';
import Feed from '../components/Feed';

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div>
      {!session ? (
        <HomeLoggedOut />
      ) : (
        <Feed key={session.user.id} session={session} />
      )}
    </div>
  );
}
