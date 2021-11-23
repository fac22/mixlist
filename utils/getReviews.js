import { supabase } from './supabaseClient';

export default async function getReviewsTotal(setReviewsTotal) {
  try {
    // Get JSON object for logged in user
    const user = supabase.auth.user();

    //Data stores the information from the 'reviews' table

    let { data, error, status } = await supabase
      .from('reviews')
      .select('*')
      .eq(`user_id`, user.id, { count: 'exact' });

    console.log('reviewsdata', data.length);
    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setReviewsTotal(data.length);
    }
  } catch (error) {
    alert(error.message);
  }
}
