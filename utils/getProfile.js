import { supabase } from './supabaseClient';

export default async function getProfile({
  setUsername,
  setProfileImg,
  setLoading,
  setFollowedAlbums,
  setRatings,
}) {
  try {
    setLoading(true);
    // Get JSON object for logged in user
    const user = supabase.auth.user();

    //Data stores the information from the 'profiles' table
    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, profile_img, followed_albums, rated_albums`)
      .eq('id', user.id)
      .single();

    let followedAlbumsCount = Object.keys(data.followed_albums).length;

    let ratingsCount =
      Object.keys(data.rated_albums).length * 100 + followedAlbumsCount * 200;

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUsername(data.username);
      setProfileImg(data.profile_img);
      setFollowedAlbums(followedAlbumsCount);
      setRatings(ratingsCount);
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
}
