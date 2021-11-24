import UserInfo from './UserInfo';
import FavAlbums from './FavAlbums';
import RecReviews from './RecReviews';
import RecLogged from './RecLogged';

export default function Profile({
  username,
  imageURL,
  reviewsTotal,
  followedAlbums,
  ratings,
  usersReview,
  usersReviewArtwork,
  userFavAlbums,
}) {
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
        followedAlbums={followedAlbums}
        ratings={ratings}
      />
      <FavAlbums
        favTitleColour={colours.favtitle}
        userFavAlbums={userFavAlbums}
      />
      <RecReviews
        reviewTitleColour={colours.reviewtitle}
        usersReview={usersReview}
        usersReviewArtwork={usersReviewArtwork}
      />
      <RecLogged loggedTitleColour={colours.loggedtitle} />
    </div>
  );
}
