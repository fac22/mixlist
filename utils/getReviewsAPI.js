import { supabase } from './supabaseClient';

export default async function getReviewsData({ setNewData, name, album }) {
  try {
    // Get JSON object for logged in user

    //Data stores the information from the 'profiles' table

    let { data, error, status } = await supabase.rpc('get_albumReview', {
      artist: 'Ben Folds',
      album: 'Way to Normal',
    });

    console.log('datafromAPI', data);
    console.log(error);
    console.log(status);

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setNewData(data);
    }
  } catch (error) {
    alert(error.message);
  }
}
