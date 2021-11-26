import { H3 } from './H3';
import Image from 'next/image';

export default function FavAlbums({ favTitleColour, userFavAlbums }) {
  console.log(userFavAlbums);

  return (
    <div className="mt-4">
      <H3 color={favTitleColour}>FAVOURITES</H3>
      <div className="sm: grid-cols-three grid gap-4 mt-4">
        {userFavAlbums.map((item) => (
          <Image
            className={'rounded-2xl'}
            src={item}
            alt=""
            key={item}
            width={99}
            height={'100'}
          ></Image>
        ))}
      </div>
    </div>
  );
}
