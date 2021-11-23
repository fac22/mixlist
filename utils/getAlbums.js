// import { supabase } from './supabaseClient';

// export default async function getAlbums(setUserAlbumsTotal) {
//   try {
//     // Get JSON object for logged in user
//     const user = supabase.auth.user();

//     //Data stores the information from the 'reviews' table

//     let { data, error, status } = await supabase
//       .from('albums')
//       .select('*')
//       .eq(`user_id`, user.id, { count: 'exact' });

//     console.log('useralbumsdata', data.length);
//     if (error && status !== 406) {
//       throw error;
//     }

//     if (data) {
//       setUserAlbumsTotal(data.length);
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }
