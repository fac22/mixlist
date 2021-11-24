import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function TopAlbums() {
  const [topAlbums, setTopAlbums] = useState();
  const [topTags, setTopTags] = useState();
  useEffect(() => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data.tags.tag);
        setTopTags(
          data.tags.tag
            .sort(
              (a, b) =>
                parseInt(b.taggings + b.reach) - parseInt(a.taggings + a.reach)
            )
            .slice(0, 5)
        );
      });
  }, []);
  // useEffect(() => {
  //   fetch(
  //     `http://ws.audioscrobbler.com/2.0/?method=tag.getweeklychartlist&tag=${topTags[0].name}&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('data', data);
  //       setTopAlbums(data);
  //     });
  // }, [topTags]);
  console.log({ topTags });

  //   topAlbums.sort(function (a, b) {
  //     return a.taggings.localeCompare(b.taggings);
  //   });
  return <>Hello</>;
}
