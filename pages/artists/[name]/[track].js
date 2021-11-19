import { useRouter } from 'next/router';
import Header from '../../../components/header';
import React from 'react';

const Comment = () => {
  const router = useRouter();
  const { artist, track } = router.query;

  return (
    <>
      <Header />
      <h1>Post: {artist}</h1>
      <h1>Comment: {track}</h1>
    </>
  );
};

export default Comment;
