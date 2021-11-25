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
              <BiLike size={20} className="mr-2" onClick />
            </H4>
          </div>
        </div>
      </article>
    </>
  );
}
