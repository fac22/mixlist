import { supabase } from './supabaseClient';

export default async function getReviews({ setUsersReview, setReviewsTotal }) {
  try {
    // Get JSON object for logged in user
    const user = supabase.auth.user();

    //Data stores the information from the 'reviews' table

    let { data, error, status } = await supabase
      .from('reviews')
      .select('*')
      .eq(`user_id`, user.id);

    let reviewIDArray = data.map((e) => e.id);
    let reviewsArray = data.map((e) => e.review);

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUsersReview('bla');
      setReviewsTotal(reviewsArray.length);
      // setUSerReviewID;
    }
  } catch (error) {
    alert(error.message);
  }
}
