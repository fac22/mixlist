import React from 'react';

export default function Input(props) {
  return (
    <input
      placeholder={props.placeHolder}
      className={`flex flex-col rounded-md	bg-${props.bgColor} placeholder-${props.textColor} text-${props.textColor}  text-center mb-4 focus:outline-none focus:placeholder-opacity-0 w-full h-12 transition duration-150 ease-in-out font-header hover:bg-${props.bgColorHover} active:bg-${props.bgColorHover} text-lg md:w-80 tracking-wider ring-2 ring-${props.bgColorHover}`}
      type={props.type}
      onChange={props.onChange}
    ></input>
  );
}
