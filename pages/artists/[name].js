import { useRouter } from 'next/router';
import React from 'react';

export default function ArtistDetails() {
  const router = useRouter();
  const artist = router.query.name;

  const [art, setArt] = React.useState();
  React.useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
    )
      .then((a) => a.json())
      .then((data) => {
        setArt(data.artist);
      });
  }, [artist]);

  console.log(art);

  if (!art) return <div>Loading...</div>;
  return (
    <>
      <div>
        <h1>{art.name} page</h1>
        <img src={`${art.image[1][`#text`]}`} alt="" />
        <p>{art.bio.summary.split('.')[0] + '.'}</p>
      </div>
    </>
  );
}
