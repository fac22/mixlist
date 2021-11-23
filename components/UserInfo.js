import Image from 'next/image';
import Avatar from './Avatar';

export default function UserInfo({
  username,
  userTitleColour,
  imageURL,
  reviewsTotal,
}) {
  return (
    <div className=" flex flex-row">
      {/* <div className="mr-4">
        <Image src={imageURL} width={100} height={100} alt=""></Image>
      </div> */}
      <Avatar url={imageURL} size={100} alt="" />
      <ul className="font-body">
        <li className={`text-${userTitleColour}`}>
          <span className="block">{username}</span>
        </li>
        <li className="text-xs">{reviewsTotal} Reviews</li>
        <li className="text-xs">3120 Albums in collection</li>
        <li className="text-xs">5400 Ratings</li>
      </ul>
    </div>
  );
}
