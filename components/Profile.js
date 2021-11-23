import UserInfo from './UserInfo';
import FavAlbums from './FavAlbums';
import RecReviews from './RecReviews';
import RecLogged from './RecLogged';

export default function Profile({ username, imageURL, reviewsTotal }) {
  const colours = {
    text: 'WHITE',
    username: 'BLUEPRO',
    favtitle: 'PINKPRO',
    reviewtitle: 'PURPLEPRO',
    loggedtitle: 'GREENPRO',
  };
  return (
    <div className="text-WHITE p-5 mb-20">
      <UserInfo
        username={username}
        userTitleColour={colours.username}
        imageURL={imageURL}
        reviewsTotal={reviewsTotal}
      />
      <FavAlbums favTitleColour={colours.favtitle} />
      <RecReviews reviewTitleColour={colours.reviewtitle} />
      <RecLogged loggedTitleColour={colours.loggedtitle} />
    </div>
  );
}
