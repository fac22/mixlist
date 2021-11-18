export default function UserInfo(props) {
  return (
    <div className="flex flex-row items-center m-auto justify-center sm:m-5">
      <img
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1fS_2x5rxyCW_TvpIGEEYtA8XtEGW7C1hbWtEh9jQWn_Jai2uxim3SR4KRIjo-3psR9G24_HmDuQ-cxFJBtUN9D3qWstPLw&usqp=CAc"
        className="w-1/3 h-full sm:w-1/5 border-solid border-1 "
        alt=""
      ></img>
      <ul className="w-2/4 m-4">
        <li className={`text-${props.userTitleColour} text-lg`}>
          ELECTRONIC_23
        </li>
        <li className="text-xs">52 Reviews</li>
        <li className="text-xs">3120 Albums in collection</li>
        <li className="text-xs">5400 Ratings</li>
      </ul>
    </div>
  );
}
