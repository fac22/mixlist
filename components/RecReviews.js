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
    <div className="">
      <p className={`text-${props.reviewTitleColour} m-5 text-lg`}>
        RECENT REVIEWS
      </p>
      <ul className="flex flex-col">
        <li className="sm:w-4/5 flex flex-col">
          {albumImgs.slice(0, 2).map((item) => (
            <div className={`flex flex-row m-auto w-5/6`} key={props.id}>
              <img
                src={item.src}
                alt=""
                key={item.id}
                className="w-1/4 mb-5"
              ></img>
              <p className="w-3/4 ml-2">Lorem, ipsum dolor sit ... More</p>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}
