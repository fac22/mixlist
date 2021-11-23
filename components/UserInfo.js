import Image from 'next/image';

export default function UserInfo({ username, imageURL, userTitleColour }) {
  return (
    <div className=" flex flex-row">
      <div className="mr-4">
        <Image src={imageURL} width={100} height={100} alt=""></Image>
      </div>
      <ul className="font-body">
        <li className={`text-${userTitleColour}`}>
          <span className="text-GREENT block">{username}</span>
        </li>
        <li className="text-xs">52 Reviews</li>
        <li className="text-xs">3120 Albums in collection</li>
        <li className="text-xs">5400 Ratings</li>
      </ul>
    </div>
  );
}
