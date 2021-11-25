import UserInfo from './UserInfo';
import FavAlbums from './FavAlbums';
import RecReviews from './RecReviews';
import RecLogged from './RecLogged';

export default function Profile({ username, imageURL, setUsername }) {
  const colours = {
    text: 'WHITE',
    username: 'BLUEPRO',
    favtitle: 'PINKPRO',
    reviewtitle: 'DBLUE',
    loggedtitle: 'GREENPRO',
  };
  return (
    <div className="text-WHITE p-5 mb-20">
      <UserInfo
        username={username}
        userTitleColour={colours.username}
        imageURL={imageURL}
        setUsername={setUsername}
      />
      <FavAlbums favTitleColour={colours.favtitle} />
      <RecReviews reviewTitleColour={colours.reviewtitle} />
    </div>
  );
}
