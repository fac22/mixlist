import React from 'react';
import Home from '../pages';

export default function Search({ search, setSearch, result }) {
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSearch(event.target.album.value);
          console.log(search);
        }}
      >
        <label htmlFor="album">Search an album</label>
        <input
          type="text"
          aria-label="Search album"
          placeholder="Search an album"
          name="album"
        />
        <button type="submit" />
      </form>
    </article>
  );
}
