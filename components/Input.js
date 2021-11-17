import React from 'react';

export default function Input(props) {
  return (
    <input
      placeholder={props.placeHolder}
      className={`rounded-sm	bg-${props.bgColor} placeholder-${props.textColor} text-center m-2 focus:outline-none focus:placeholder-opacity-0`}
    ></input>
  );
}
