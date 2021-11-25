import { H3 } from './H3';
import Image from 'next/image';

export default function FavAlbums(props) {
  const albumImgs = [
    {
      id: 1,
      src: 'https://lastfm.freetls.fastly.net/i/u/300x300/263880589b66186a82acd18187920c0c.png',
    },
    {
      id: 2,

      src: 'https://lastfm.freetls.fastly.net/i/u/34s/3b54885952161aaea4ce2965b2db1638.png',
    },
    {
      id: 3,

      src: 'https://lastfm.freetls.fastly.net/i/u/300x300/190429befa66419db3510a86774006cb.png',
    },
    {
      id: 4,

      src: 'https://lastfm.freetls.fastly.net/i/u/300x300/df7a337e5a38415db87b5a9f8020806c.png',
    },
  ];
  return (
    <div className="mt-4">
      <H3 color={'GREENT'}>FAVOURITES</H3>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {albumImgs.map((item) => (
          <div className="relative w-full h-full" key={item.id}>
            <img src={item.src} className="w-full h-full" alt="Album Art" />
          </div>
        ))}
      </div>
    </div>
  );
}
