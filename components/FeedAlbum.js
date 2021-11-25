import Image from 'next/image';
import { H4 } from '../components/H4';
import { BiLike } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';

export default function FeedAlbum({
  albumArt,
  artistName,
  albumTitle,
  username,
}) {
  console.log(albumArt, artistName, albumTitle, username);
  //FUNCTION TO ADD ALBUM TO DATABASE
  //PASS IN ALBUM NAME, ARTIST NAME, AND USER NAME
  return (
    <>
      <section className=" mb-2">
        <img src={albumArt} alt="Album Art" />
      </section>
      <article>
        <div className="flex flex-row justify-between mb-10">
          <div className="flex flex-col">
            <H4 color={'PINKT'}>
              {albumTitle} by {artistName}
            </H4>
            <H4 color={'BLUET'}>Added by {username}</H4>
          </div>
          <div className="flex flex-row items-end">
            <H4 color={'GREENT'}>
              <BiLike size={20} className="mr-2" onClick />
            </H4>
          </div>
        </div>
      </article>
    </>
  );
}
