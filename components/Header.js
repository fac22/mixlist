import Image from 'next/image';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';

export const Header = ({
  toggleMenu,
  setToggleMenu,
  toggleSearch,
  setToggleSearch,
  content,
  textColor,
}) => {
  const toggleMenuFn = () => {
    setToggleMenu(() => (toggleMenu === true ? false : true));
  };

  const toggleSearchFn = () => {
    setToggleSearch(() => (toggleSearch === true ? false : true));
  };

  const searchJustify = toggleSearch ? 'justify-end' : 'justify-between';
  const menuToggle =
    toggleMenu || toggleSearch
      ? 'z-30 bg-none'
      : 'visible bg-DPURPLE bg-opacity-95';
  const toggleCloseButton = toggleMenu ? 'visible' : 'hidden';
  const searchToggle = toggleSearch ? 'visible' : 'hidden';
  const hideMenuButton = toggleMenu || toggleSearch ? 'hidden' : 'visible';
  const iconStyle = 'text-WHITE fill-current';

  return (
    <div
      className={`flex flex-row w-full p-5 fixed z-30 ${menuToggle} ${searchJustify}`}
    >
      {/* Left Menu Buttons*/}
      <button onClick={toggleMenuFn} className={`${hideMenuButton}`}>
        <HiOutlineMenu className={iconStyle} size={24} />
      </button>

      {/* Left Close Button */}
      <button onClick={toggleMenuFn} className={`${toggleCloseButton}`}>
        <MdOutlineClose
          className={`${iconStyle} transform translate-y-px`}
          size={24}
        />
      </button>

      {/* Right Close Button */}
      <button
        onClick={() => setToggleSearch(toggleSearchFn)}
        className={`${searchToggle}`}
      >
        <MdOutlineClose
          className={`${iconStyle} transform translate-y-px self-end`}
          size={24}
        />
      </button>

      {/* MixList Header */}
      <h2
        className={`font-header text-xl text-${textColor} tracking-widest ${hideMenuButton}`}
      >
        {content}
      </h2>

      {/* Right Search Button */}
      <button
        onClick={() => setToggleSearch(toggleSearchFn)}
        className={`${hideMenuButton}`}
      >
        <AiOutlineSearch className={iconStyle} size={24} />
      </button>
    </div>
  );
};
