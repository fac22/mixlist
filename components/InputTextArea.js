import React from 'react';

export default function InputTextArea(props) {
  return (
    <textarea
      placeholder={props.placeHolder}
      className={`flex flex-col rounded-md	bg-${props.bgColor} placeholder-${props.textColor} text-${props.textColor}  text-left mb-4 mt-4 p-4 focus:outline-none focus:placeholder-opacity-0 w-full h-40 transition duration-150 ease-in-out font-header hover:bg-${props.bgColorHover} active:bg-${props.bgColorHover} text-base md:w-80 tracking-wider ring-2 ring-${props.bgColorHover}`}
      type={props.type}
    ></textarea>
  );
}
