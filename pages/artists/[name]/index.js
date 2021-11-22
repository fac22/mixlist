import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

function Details() {
  const router = useRouter();
  const artist = router.query.name;

  const [art, setArt] = React.useState();
  const [ta, setTa] = React.useState();
  React.useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
    )
      .then((a) => a.json())
      .then((data) => {
        setArt(data.artist);
      });
  }, [artist]);

  React.useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
    )
      .then((a) => a.json())
      .then((data) => {
        console.log(data);
        setTa(data.topalbums.album);
      });
  }, [artist]);
  console.log(ta);

  if (!art || !ta) return <div>Loading...</div>;
  return (
    <>
      <div className="text-WHITE align-center w-full h-full p-20">
        <h1 className="align-center">{art.name} page</h1>
        <img src={`${art.image[1][`#text`]}`} alt="" />
        <p>{art.bio.summary.split('.')[0] + '.'}</p>
        <h2 className="p-5">Top Albums</h2>
        {ta.slice(0, 10).map((e) => (
          <div key={e.mbid} className="mt-5">
            <li>
              <Link
                href="/artists/[name]/[album]"
                as={`/artists/${artist}/${e.name}`}
              >
                {e.name}
              </Link>
            </li>
            <img src={`${e.image[1][`#text`]}`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Details;
