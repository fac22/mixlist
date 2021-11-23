import { H3 } from './H3';
import { Review } from './Review';
import Image from 'next/image';

export default function RecReviews(props) {
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
      <H3 color="BLUE">LATEST REVIEWS</H3>
      <ul className=" flex flex-col">
        <li className="sm:w-4/5 flex flex-col">
          {albumImgs.slice(0, 2).map((item) => (
            <div className={`flex flex-row mt-2 mb-2`} key={props.id}>
              <Review
                image={item.src}
                alt={'Album Art'}
                username={'LEVEL87 (3123)'}
                key={item.id}
              >
                Something in this album is far more beautiful than sounds should
                be able to convey. The album that accompanied the deepest and
                most profound moments of my lockdown. Favorite track: Something
                In The Sadness.
              </Review>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
