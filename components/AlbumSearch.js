import React from 'react';

export default function AlbumSearch({ search, setSearch, result }) {
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSearch(event.target.album.value);
          console.log(search);
        }}
      >
        <label htmlFor="album" className="text-WHITE">
          Search an album
        </label>
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
