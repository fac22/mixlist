import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function TopTracks() {
  const [topTracks, setTopTracks] = useState();
  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setTopTracks(data.tracks.track.slice(0, 10));
        // setTopAlbums(
        //   data.tags.tag
        //     .sort(
        //       (a, b) =>
        //         parseInt(b.taggings + b.reach) - parseInt(a.taggings + a.reach)
        //     )
        //     .slice(0, 9)
        // );
        // console.log(
        //   data.tags.tag
        //     .sort(
        //       (a, b) =>
        //         parseInt(b.taggings + b.reach) - parseInt(a.taggings + a.reach)
        //     )
        //     .slice(0, 9)
        // );
      });
  }, []);
  useEffect(() => {});
  console.log({ topTracks });

  //   topAlbums.sort(function (a, b) {
  //     return a.taggings.localeCompare(b.taggings);
  //   });
  if (!topTracks) return <>Hello</>;
  return (
    <>
      <div>
        <h1>Top 10 Songs ️‍🔥 ️‍🔥</h1>
        {topTracks.map((track, index) => (
          <div key={track.name}>
            {/* <img
              src={`${track.image[2][`#text`]}`}
              alt={`${track.name} by ${track.artist}`}
            /> */}
            <h3>
              {index + 1}: {track.name} by {track.artist.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
