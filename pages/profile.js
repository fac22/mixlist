import React from 'react';
import Hamburger from '../components/Hamburger';
import UserInfo from '../components/UserInfo';
import FavAlbums from '../components/FavAlbums';
import RecReviews from '../components/RecReviews';
import RecLogged from '../components/RecLogged';

export default function Profile() {
  const colours = {
    text: 'WHITE',
    username: 'BLUEPRO',
    favtitle: 'PINKPRO',
    reviewtitle: 'PURPLEPRO',
    loggedtitle: 'GREENPRO',
  };
  return (
    <main className="flex flex-col bg-PURPLET text-WHITE">
      <Hamburger />
      <UserInfo userTitleColour={colours.username} />
      <FavAlbums favTitleColour={colours.favtitle} />
      <RecReviews reviewTitleColour={colours.reviewtitle} />
      <RecLogged loggedTitleColour={colours.loggedtitle} />
    </main>
  );
}
