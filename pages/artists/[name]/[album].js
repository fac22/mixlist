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
  const [artistID, setArtistID] = React.useState(null);
  const [albumID, setAlbumID] = React.useState(null);
  const textInput = React.createRef();

  const router = useRouter();
  const { name, album } = router.query;

  const [albInfo, setAlbInfo] = React.useState();
  const [userWroteRiviews, setUserWroteRiviews] = React.useState();
  const user = supabase.auth.user();

  React.useEffect(() => {
    // if (albInfo === undefined || albInfo === '') {
    //   return;
    // }
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e836ddbce95921744c7e9efe110bcd54&format=json&artist=${name}&album=${album}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbInfo(data.album);
      });
    getReviews().then((data) => setReviews(data));

    getArtistID();
    getAlbumID();
  }, [album]);

  if (!albInfo || albInfo.artist === 'Undefined') return <div>Loading...</div>;
  // console.log(albInfo.tracks.track[0]);

  async function getReviews() {
    let { data, error } = await supabase.rpc('get_albumreview', {
      album: album,
      artist: name,
    });
    if (error) console.error(error);
    else return data;
  }

  async function updateReview() {
    try {
      const { error } = await supabase.from('reviews').insert({
        review: userWroteRiviews,
        album_id: albumID,
        user_id: user.id,
        artist_id: artistID,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function getArtistID() {
    try {
      let { data, error, status } = await supabase
        .from('ARTIST')
        .select('id')
        .eq(`artist_name`, name);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setArtistID(data[0].id);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  async function getAlbumID() {
    try {
      let { data, error, status } = await supabase
        .from('ALBUMS')
        .select('id')
        .eq(`album_name`, album);

      console.log(data);
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setAlbumID(data[0].id);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Head>
        <Layout title={name} />
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
        <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
          <section className="mt-14 mb-2">
            <Image
              src={`${albInfo.image[4][`#text`]}`}
              alt=""
              width="335"
              height="335"
            />
          </section>
          <section>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <H3 color={'PINKT'}>{album} </H3>
                <H3 color={'BLUET'}>by {name}</H3>
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
            <article className="pt-4">
              <H3 color={'PINKT'}>ADD REVIEW</H3>
              {/* <InputTextArea
                placeHolder="YOUR REVIEW HERE..."
                bgColor="PINKT"
                textColor="DPINK"
                bgColorHover={'PINKHOVER'}
                type={'textarea'}
              /> */}
              <textarea
                ref={textInput}
                onSubmit={(e) => {
                  setUserWroteRiviews(e.target.value);
                  updateReview();
                }}
              ></textarea>
              <button
                className="text-PINKT "
                onClick={(e) => {
                  setUserWroteRiviews(textInput.value);
                  updateReview();
                  textInput.current.value = '';
                }}
              >
                Review
              </button>

              <p>{userWroteRiviews}</p>

              {/* <Button
                bgColor="PINKT"
                textColor="DPINK"
                bgColorHover={'PINKHOVER'}
                title={'REVIEW'}

              /> */}
            </article>
          </section>
        </Main>
      </BackgroundWrapper>
      {/* <div className="text-WHITE align-center w-full h-full p-20">
        <img src={`${albInfo.image[4][`#text`]}`} alt="" />
        <h1>{album}</h1>
        <h1>by {name}</h1>
        {albInfo.wiki.published ? (
          <h2>Released: {albInfo.wiki.published.split(',')[0]}</h2>
        ) : (
          ''
        )}

        {albInfo.tags.tag.map((song) => {
          <li>{song.name}</li>;
        })}

        <span>{albInfo.tracks.track[0].name}</span>
      </div> */}
    </>
  );
};

export default ArtistAlbum;
