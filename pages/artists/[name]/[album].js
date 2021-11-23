import { useRouter } from 'next/router';
import React from 'react';
import AlbumResults from '../../../components/AlbumSearchResults';
import Search from '../../../components/AlbumSearch';
import Link from 'next/link';
const ArtistAlbum = () => {
  const router = useRouter();
  console.log(router.query);
  const { name, album } = router.query;

  const [albInfo, setAlbInfo] = React.useState();
  React.useEffect(() => {
    console.log('index', albInfo);
    // if (albInfo === undefined || albInfo === '') {
    //   return;
    // }
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e836ddbce95921744c7e9efe110bcd54&format=json&artist=${name}&album=${album}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setAlbInfo(data.album);
      });
  }, [album]);

  if (!albInfo || albInfo.artist === 'Undefined') return <div>Loading...</div>;
  // console.log(albInfo.tracks.track[0]);

  return (
    <>
      <div className="text-WHITE align-center w-full h-full p-20">
        <img src={`${albInfo.image[4][`#text`]}`} alt="" />
        <h1>{name}</h1>
        <h1>{album}</h1>
        {/* {albInfo.wiki.published ? (
          <h2>Released: {albInfo.wiki.published.split(',')[0]}</h2>
        ) : (
          ''
        )} */}

        {/* {albInfo.tags.tag.map((song) => {
          <li>{song.name}</li>;
        })} */}

        {/* <span>{albInfo.tracks.track[0].name}</span> */}
      </div>
    </>
  );
};

export default ArtistAlbum;
