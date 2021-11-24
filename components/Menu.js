import React from 'react';
import MenuItem from './MenuItem';
import { menuOptions } from './menuOptions';
import { Styles } from './Styles';

export default function Menu(props) {
  return (
    <>
      <div
        className={`w-full h-full ${Styles.transition} p5 fixed z-20  ${
          props.toggleMenu ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="align-center absolute flex flex-col justify-center w-full h-full h-screen text-2xl opacity-100">
          {menuOptions.homeLoggedIn.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              tCol={item.color}
              href={item.href}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
