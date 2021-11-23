import { H3 } from './H3';
import { Review } from './Review';
import Image from 'next/image';

export default function RecReviews(props) {
  const albumImgs = [];
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
                {userReview}
              </Review>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
