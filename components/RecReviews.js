import { H3 } from './H3';
import { ReviewComp } from './ReviewComp';
import Image from 'next/image';

export default function RecReviews({ usersReview, usersReviewArtwork }) {
  return (
    <div className="mt-4">
      <H3 color="REDT">LATEST REVIEWS</H3>
      <ul className=" flex flex-col">
        {usersReview.map((e) => (
          <ReviewComp
            src={
              e[1]
                ? e[1]
                : 'https://lastfm.freetls.fastly.net/i/u/34s/b1e27d1c27654ab78d07947a8a30dd24.png/n/n'
            }
            alrt={'enjoy'}
            key={e}
          >
            {e[0]}
          </ReviewComp>
        ))}
      </ul>
    </div>
  );
}
