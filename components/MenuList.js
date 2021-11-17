import React from 'react';

export default function Input(props) {
  return (
    <li className={`text-${props.tCol} cursor-pointer text-center m-10`}>
      <a>{props.title}</a>
    </li>
  );
}
