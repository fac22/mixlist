export const Header = ({ toggleMenu, setToggleMenu, children, textColor }) => {
  return (
    <div className=" flex flex-row justify-between w-full mb-4">
      {/* <button className="text-WHITE">≡</button> */}

      <object data="menu.svg" type="image/svg+xml">
        <img src="yourfallback.jpg" />
      </object>

      <h2 className={`font-header text-xl text-${textColor} tracking-widest`}>
        {children}
      </h2>
      <object data="search.svg" type="image/svg+xml">
        <img src="yourfallback.jpg" />
      </object>
    </div>
  );
};
