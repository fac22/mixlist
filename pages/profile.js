import React from 'react';
import Hamburger from '../components/Hamburger';
import UserInfo from '../components/UserInfo';
import FavAlbums from '../components/FavAlbums';
import RecReviews from '../components/RecReviews';
import RecLogged from '../components/RecLogged';

export default function Profile() {
  return (
    <main className="flex flex-col bg-PURPLET text-WHITE">
      <Hamburger />
      <UserInfo />
      <FavAlbums />
      <RecReviews />
      <RecLogged />
    </main>
  );
}
