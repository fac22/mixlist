import { supabase } from './supabaseClient';

export default async function getReviews({
  setUsersReview,
  setReviewsTotal,
  setUsersReviewArtwork,
}) {
  try {
    // Get JSON object for logged in user
    const user = supabase.auth.user();

    //Data stores the information from the 'reviews' table

    let { data, error, status } = await supabase
      .from('reviews')
      .select('*, ALBUMS(*)')
      .eq(`user_id`, user.id);

    let reviewIDArray = data.map((e) => e.id);
    let reviewsArray = data.map((e) => {
      return [e.review, e.ALBUMS.src];
    });
    let src = data.map((e) => e.ALBUMS.src);

    console.log(reviewIDArray);
    console.log({ reviewsArray });

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUsersReview(reviewsArray);
      setReviewsTotal(reviewsArray.length);
      setUsersReviewArtwork(src);
      // setUSerReviewID;
    }
  } catch (error) {
    alert(error.message);
  }
}
