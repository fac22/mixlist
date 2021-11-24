import { H3 } from './H3';
import { Review } from './Review';
import Image from 'next/image';

export default function RecReviews({ usersReview, usersReviewArtwork }) {
  const albumImgs = [];
  const reviewArray = usersReview;
  return (
    <div className="mt-4">
      <H3 color="BLUE">LATEST REVIEWS</H3>
      <ul className=" flex flex-col">
        {usersReview.map((e) => (
          <Review
            src={
              e[1]
                ? e[1]
                : 'https://lastfm.freetls.fastly.net/i/u/34s/b1e27d1c27654ab78d07947a8a30dd24.png/n/n'
            }
            alrt={'enjoy'}
            key={e}
          >
            {e[0]}
          </Review>
        ))}
        {/* {usersReview} */}
      </ul>

      {/* {usersReview.slice(0, 2).map((item) => (
            <div className={`flex flex-row mt-2 mb-2`} key={item.id}>
              <Review
                image={'http://1.png'}
                alt={'Album Art'}
                username={'LEVEL87 (3123)'}
                key={item.id}
              >
                {item}
              </Review>
            </div>
          ))} */}
      {/* </li>
      </ul> */}
    </div>
  );
}
