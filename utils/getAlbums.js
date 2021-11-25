import { supabase } from './supabaseClient';

export default async function getAlbums({ setUserFavAlbums }) {
  try {
    // Get JSON object for logged in user
    const user = supabase.auth.user();

    //Data stores the information from the 'reviews' table

    let { data, error, status } = await supabase
      .from('ALBUMS')
      .select('*')
      .eq('fav_user', user.id);

    const favAlbum = data.map((e) => e.src);
    console.log({ favAlbum });

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUserFavAlbums(favAlbum);
    }
  } catch (error) {
    alert(error.message);
  }
}
