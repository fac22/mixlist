import Image from 'next/image';
import Avatar from './Avatar';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import getProfile from '../utils/getProfile';

// export default function UserInfo({
//   username,
//   setUsername,
//   userTitleColour,
//   imageURL,
// }) {
//   const [loading, setLoading] = useState(true);
//   const [profile_img, setProfileImg] = useState(null);

//   useEffect(() => {
//     console.log('Changed image');
//   }, [profile_img]);

//   async function updateProfile({ username, profile_img }) {
//     try {
//       setLoading(true);
//       const user = supabase.auth.user();

//       const updates = {
//         id: user.id,
//         username,
//         profile_img,
//         updated_at: new Date(),
//       };

//       let { error } = await supabase.from('profiles').upsert(updates, {
//         returning: 'minimal', // Don't return the value after inserting
//       });
//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

export default function UserInfo({
  username,
  userTitleColour,
  imageURL,
  reviewsTotal,
  followedAlbums,
  ratings,
}) {
  return (
    <div className=" flex flex-row">
      {/* <div className="mr-4">
        <Image src={imageURL} width={100} height={100} alt=""></Image>
      </div> */}
      <Avatar
        url={imageURL}
        size={100}
        onUpload={(url) => {
          setProfileImg(url);
          updateProfile({ username, profile_img: url });
        }}
      />
      <ul className="font-body ml-4">
        <li className={`text-${userTitleColour}`}>
          <span className="block">{username}</span>
          <div>
            <input
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <button
              className="button primary block"
              onClick={() => updateProfile({ username, profile_img })}
            >
              {loading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </li>
        <li className="text-xs">{reviewsTotal} Reviews</li>
        <li className="text-xs">{followedAlbums} Albums in collection</li>
        <li className="text-xs">{ratings} Ratings</li>
      </ul>
    </div>
  );
}
