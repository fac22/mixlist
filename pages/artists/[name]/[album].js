import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Layout from '../../../components/Layout';
import Search from '../../../components/Search';
import { Header } from '../../../components/Header';
import { BackgroundWrapper } from '../../../components/BackgroundWrapper';
import { Main } from '../../../components/Main';
import Menu from '../../../components/Menu';
import { H3 } from '../../../components/H3';
import { BiLike } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { Button } from '../../../components/Button';
import InputTextArea from '../../../components/InputTextArea';
import { supabase } from '../../../utils/supabaseClient';
import { ReviewComp } from '../../../components/ReviewComp';

const ArtistAlbum = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  const [reviews, setReviews] = React.useState(null);
  const [artistID, setArtistID] = React.useState(1);
  const [albumID, setAlbumID] = React.useState(1);
  const textInput = React.createRef();

  const router = useRouter();
  const { name, album } = router.query;

  const [albInfo, setAlbInfo] = React.useState(null);
  const [userWroteRiviews, setUserWroteRiviews] = React.useState('');
  const user = supabase.auth.user();

  React.useEffect(() => {
    getReviews().then((data) => setReviews(data));
    console.log({ reviews });
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e836ddbce95921744c7e9efe110bcd54&format=json&artist=${name}&album=${album}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbInfo(data.album);
      });
    console.log(albInfo, userWroteRiviews);

    if (albInfo !== null && userWroteRiviews !== '') {
      getAlbumID();
      getArtistID();
      if (albumID && artistID) {
        updateReview();
        setUserWroteRiviews('');
      }
    }
  }, [album, userWroteRiviews]);

  async function getReviews() {
    let { data, error } = await supabase.rpc('get_albumreview', {
      album: album,
      artist: name,
    });
    console.log(data);
    if (error) console.error(error);
    else return data;
  }

  async function updateReview() {
    let { error } = await supabase.from('reviews').insert({
      review: userWroteRiviews,
      album_id: albumID,
      user_id: user.id,
      artist_id: artistID,
    });
    console.log('updating');
    if (error) console.error(error);
  }

  async function getArtistID() {
    let { data, error, status } = await supabase
      .from('ARTIST')
      .select('id')
      .eq(`artist_name`, name);
    if (error) console.error(error);

    console.log('get artist', data);
    if (data) {
      setArtistID(data[0].id);
    }
  }

  async function getAlbumID() {
    let { data, error, status } = await supabase
      .from('ALBUMS')
      .select('id')
      .eq(`album_name`, album);
    console.log('get album', data);
    if (error) console.error(error);

    if (data) {
      setAlbumID(data[0].id);
    }
  }

  if (
    !albInfo ||
    albInfo.artist === 'Undefined' ||
    reviews === null ||
    artistID === null ||
    albumID === null
  )
    return <div>Loading...</div>;

  return (
    <>
      <Head>
        <Layout title={name} />
      </Head>

      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
        textColor={'WHITE'}
        content={'MIXLIST'}
        session="album_page"
      />
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
          <section className="mt-14 mb-2">
            <Image
              src={`${albInfo.image[4][`#text`]}`}
              alt=""
              width={100}
              height={100}
            />
          </section>
          <section>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <H3 color={'PINKT'} fontSize={'lg'}>
                  {album}{' '}
                </H3>
                <H3 color={'BLUET'} fontSize={'xs'}>
                  by {name}
                </H3>
              </div>
              <div className="flex flex-row items-start">
                <H3 color={'WHITE'}>
                  <BiLike size={22} className="mr-2" />
                </H3>
                <H3 color={'WHITE'}>
                  <BiPlus size={26} />
                </H3>
              </div>
            </div>
          </section>

          <section>
            {reviews.map((obj) => {
              return (
                <li key={obj.key} className="pl-0 ml-0 list-none">
                  <ReviewComp username={obj.username}>{obj.review}</ReviewComp>
                </li>
              );
            })}
          </section>

          <section className="divide-dotted divide-BLUET grid grid-cols-1 divide-y">
            <article className="flex flex-col pt-4">
              <H3 color={'WHITE'}>ADD REVIEW</H3>

              <textarea
                ref={textInput}
                className={`flex flex-col rounded-md	bg-${'REDT'} placeholder-${'DRED'} text-${'DRED'}  text-center mb-4 focus:outline-none focus:placeholder-opacity-0 w-full h-12 transition duration-150 ease-in-out font-header hover:bg-${'REDT'} active:bg-${'REDT'} text-lg md:w-80 tracking-wider ring-2 ring-${'REDT'} mt-2`}
              ></textarea>
              <button
                className={`rounded-md bg-${'GREENT'} text-${'DGREEN'} hover:bg-${'GREENHOVER'} w-full md:w-80 h-12 transition duration-150 ease-in-out font-header tracking-wider mb-4 text-lg flex flex-col justify-center items-center ring-2 ring-${'GREENHOVER'} mt-2`}
                onClick={(e) => {
                  setUserWroteRiviews(textInput.current.value);
                  textInput.current.value = '';
                }}
              >
                Submit
              </button>

              <p>{userWroteRiviews}</p>
            </article>
          </section>
        </Main>
      </BackgroundWrapper>
    </>
  );
};

export default ArtistAlbum;
