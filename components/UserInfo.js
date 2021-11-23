import Image from 'next/image';

export default function UserInfo(props) {
  return (
    <div className=" flex flex-row">
      <div className="mr-4">
        <Image
          src="blob:http://localhost:3000/79f9a1c8-e8a4-448e-9bc4-f1fc9997be51"
          width={100}
          height={100}
          alt=""
        ></Image>
      </div>
      <ul className="font-body">
        <li className={`text-${props.userTitleColour}`}>
          <span className="text-GREENT block">USERNAME</span>
        </li>
        <li className="text-xs">52 Reviews</li>
        <li className="text-xs">3120 Albums in collection</li>
        <li className="text-xs">5400 Ratings</li>
      </ul>
    </div>
  );
}
