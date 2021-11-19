import Image from 'next/image';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

export const Header = ({
  toggleMenu,
  setToggleMenu,
  toggleProfile,
  setToggleProfile,
  content,
  textColor,
}) => {
  const toggleMenuFn = () => {
    setToggleMenu(() => (toggleMenu === true ? false : true));
  };

  const toggleProfileFn = () => {
    setToggleProfile(() => (toggleProfile === true ? false : true));
  };

  const profileJustify = toggleProfile ? 'justify-end' : 'justify-between';
  const menuToggle =
    toggleMenu || toggleProfile
      ? 'z-30 bg-none'
      : 'visible bg-DPURPLE bg-opacity-95';
  const toggleCloseButton = toggleMenu ? 'visible' : 'hidden';
  const profileToggle = toggleProfile ? 'visible' : 'hidden';
  const hideMenuButton = toggleMenu || toggleProfile ? 'hidden' : 'visible';
  const iconStyle = 'text-WHITE fill-current';

  return (
    <div
      className={`flex flex-row w-full p-5 fixed z-30 ${menuToggle} ${profileJustify}`}
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

      {/* MixList Header */}
      <h2
        className={`font-header text-xl text-${textColor} tracking-widest ${hideMenuButton}`}
      >
        {content}
      </h2>

      {/* Right Search Button */}
      <a href={'/profile'} className={`${hideMenuButton}`}>
        <CgProfile className={iconStyle} size={24} />
      </a>
    </div>
  );
};
