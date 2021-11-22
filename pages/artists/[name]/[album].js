import { useRouter } from 'next/router';
import React from 'react';
import AlbumResults from '../../../components/AlbumSearchResults';
import Search from '../../../components/AlbumSearch';

const Comment = () => {
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

  if (!albInfo) return <div>Loading...</div>;
  console.log(albInfo.tracks.track[0]);

  return (
    <>
      <div className="text-WHITE align-center w-full h-full p-20">
        <img src={`${albInfo.image[4][`#text`]}`} alt="" />
        <h1>{name}</h1>
        <h1>{album}</h1>

        {/* {albInfo.tags.tag.map((song) => {
          <li>{song.name}</li>;
        })} */}

        {/* <span>{albInfo.tracks.track[0].name}</span> */}
      </div>
    </>
  );
  //   return (
  //     <>
  //       <div className="text-WHITE align-center w-full h-full p-20">
  //         <h1 className="align-center">{art.name} page</h1>
  //         <img src={`${art.image[1][`#text`]}`} alt="" />
  //         <p>{art.bio.summary.split('.')[0] + '.'}</p>
  //         <h2 className="p-5">Top Albums</h2>
  //         {ta.slice(0, 10).map((e) => (
  //           <div key={e.mbid} className="mt-5">
  //             <li>
  //               <Link
  //                 href="/artists/[name]/[track]"
  //                 as={`/artists/${artist}/${e.name}`}
  //               >
  //                 {e.name}
  //               </Link>
  //             </li>
  //             <img src={`${e.image[1][`#text`]}`} />
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   );
};

export default Comment;
