import { H3 } from './H3';
import Image from 'next/image';

export default function FavAlbums({ favTitleColour, userFavAlbums }) {
  console.log(userFavAlbums);

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
