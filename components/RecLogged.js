export default function RecLogged(props) {
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
      <p className={`text-${props.loggedTitleColour} m-5 text-lg`}>
        RECENTLY LOGGED
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-3 m-auto">
        {albumImgs.map((item) => (
          <img
            src={item.src}
            alt=""
            key={item.id}
            className="w-3/4 m-auto mb-3"
          ></img>
        ))}
      </div>
    </div>
  );
}
