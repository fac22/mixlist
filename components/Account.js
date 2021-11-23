import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import Avatar from './Avatar';
import getProfile from '../utils/getProfile';

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [profile_img, setProfileImg] = useState(null);

  const setStateFunctions = {
    setUsername,
    setProfileImg,
    setLoading,
  };

  useEffect(() => {
    getProfile(setStateFunctions);
  }, [session]);

  async function updateProfile({ username, profile_img }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        profile_img,
        updated_at: new Date(),
      };

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget text-WHITE">
      <Avatar
        url={profile_img}
        size={150}
        onUpload={(url) => {
          setProfileImg(url);
          updateProfile({ username, profile_img: url });
        }}
      />
      <div className="text-WHITE">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, profile_img })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
