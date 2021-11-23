import { supabase } from './supabaseClient';

export default async function getProfile({
  setUsername,
  setProfileImg,
  setLoading,
}) {
  try {
    setLoading(true);
    // Get JSON object for logged in user
    const user = supabase.auth.user();

    //Data stores the information from the 'profiles' table
    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, profile_img`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUsername(data.username);
      setProfileImg(data.profile_img);

    }
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
}
