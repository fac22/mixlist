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
  const menuToggle = toggleMenu ? 'z-30' : 'visible';
  const closeToggle = toggleMenu ? 'visible' : 'hidden';
  const searchToggle = toggleSearch ? 'visible' : 'hidden';
  const menuSearchToggle = toggleMenu || toggleSearch ? 'hidden' : 'visible';
  const iconStyle = 'text-WHITE fill-current';

  return (
    <div
      className={`bg-DPURPLE flex flex-row w-full p-5 fixed z-30 ${menuToggle} ${searchJustify}`}
    >
      <button onClick={toggleMenuFn} className={`${menuSearchToggle}`}>
        <HiOutlineMenu className={iconStyle} size={24} />
      </button>

      <button onClick={toggleMenuFn} className={`${closeToggle}`}>
        <MdOutlineClose
          className="text-WHITE transform translate-y-px fill-current"
          size={24}
        />
      </button>

      <button
        onClick={() => setToggleSearch(toggleSearchFn)}
        className={`${searchToggle}`}
      >
        <MdOutlineClose
          className="text-WHITE self-end transform translate-y-px fill-current"
          size={24}
        />
      </button>

      <h2
        className={`font-header text-xl text-${textColor} tracking-widest ${menuSearchToggle}`}
      >
        {content}
      </h2>

      <button
        onClick={() => setToggleSearch(toggleSearchFn)}
        className={`${menuSearchToggle}`}
      >
        <AiOutlineSearch className="text-WHITE fill-current" size={24} />
      </button>
    </div>
  );
};
