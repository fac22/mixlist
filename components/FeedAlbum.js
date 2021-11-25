import Image from 'next/image';
import { H4 } from '../components/H4';
import { BiLike } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function FeedAlbum({
  albumArt,
  artistName,
  albumTitle,
  username,
}) {
  const [like, setLike] = useState(false);
  const [likedList, setLikedList] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  async function getLike() {
    let { data, error } = await supabase.from('favourite_albums').select('*');
    return data;
  }

  async function likeAlbum() {
    getLike().then((value) => {
      setLikedList(value);
      if (likedList !== null) {
        likedList.map((obj) => {
          if (obj.album_title === 'Something Good') {
            setLike(true);
          }
        });
      }
    });
    if (session) {
      if (!like) {
        setLike(true);

        const { data, error } = await supabase.from('favourite_albums').insert([
          {
            album_title: 'Something Good',
            artist_name: 'Someone Cool',
            user_id: session.user.id,
          },
        ]);
        return console.log('NOT LIKED YET');
      }
    }
    setLike(true);
    return console.log('LIKED 🍉');
  }

  //FUNCTION TO ADD ALBUM TO DATABASE
  //PASS IN ALBUM NAME, ARTIST NAME, AND USER NAME
  return (
    <>
      <section className=" mb-2">
        <Image src={albumArt} alt="Album Art"></Image>
      </section>
      <article>
        <div className="flex flex-row justify-between mb-10">
          <div className="flex flex-col">
            <H4 color={'PINKT'}>SIXTEEN OCEANS By Someone</H4>
            <H4 color={'BLUET'}>Added by SASHA123</H4>
          </div>
          <div className="flex flex-row items-end">
            <H4 color={'GREENT'}>
              <BiLike
                size={20}
                className={`mr-2 cursor-pointer  ${
                  like ? 'text-GREENT' : 'text-WHITE'
                }`}
                onClick={likeAlbum}
              />
            </H4>
          </div>
        </div>
      </article>
    </>
  );
}
