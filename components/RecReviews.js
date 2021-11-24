import { H3 } from './H3';
import { Review } from './Review';
import Image from 'next/image';

export default function RecReviews({ usersReview }) {
  const albumImgs = [];
  console.log(usersReview);
  const reviewArray = usersReview;
  return (
    <div className="mt-4">
      <H3 color="BLUE">LATEST REVIEWS</H3>
      <ul className=" flex flex-col">
        {usersReview.map((e) => (
          <Review
            src={
              'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=483d7319991824b55573c266d7009d1f&artist=Cher&album=Believe&format=json'
            }
            alrt={'enjoy'}
            key={e}
          >
            {e}
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
