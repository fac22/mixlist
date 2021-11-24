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
            <H4 color={'WHITE'}>
              <BiLike size={16} className="mr-2" />
            </H4>
            <H4 color={'WHITE'}>
              <BiPlus size={18} />
            </H4>
          </div>
        </div>
      </article>
    </>
  );
}
