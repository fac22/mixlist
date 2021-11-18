import React from 'react';
import MenuItem from './MenuItem';
import { menuOptions } from './menuOptions';
import { HiOutlineMenu } from 'react-icons/hi';

export default function Menu(props) {
  return (
    <>
      <div
        className={`w-full h-full transition filter duration-300 ease-in-out p5 fixed z-20  ${
          props.toggleMenu ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="align-center absolute flex flex-col justify-center w-full h-full h-screen text-2xl opacity-100">
          {menuOptions.homeLoggedOut.map((item) => (
            <MenuItem key={item.id} title={item.title} tCol={item.color} />
          ))}
        </ul>
      </div>
    </>
  );
}
