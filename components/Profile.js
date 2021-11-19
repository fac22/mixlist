import UserInfo from './UserInfo';
import FavAlbums from './FavAlbums';
import RecReviews from './RecReviews';
import RecLogged from './RecLogged';

export default function Profile() {
  const colours = {
    text: 'WHITE',
    username: 'BLUEPRO',
    favtitle: 'PINKPRO',
    reviewtitle: 'PURPLEPRO',
    loggedtitle: 'GREENPRO',
  };
  return (
    <div className="text-WHITE p-5 mb-20">
      <UserInfo userTitleColour={colours.username} />
      <FavAlbums favTitleColour={colours.favtitle} />
      <RecReviews reviewTitleColour={colours.reviewtitle} />
      <RecLogged loggedTitleColour={colours.loggedtitle} />
    </div>
  );
}
