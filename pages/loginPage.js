import React from 'react';
import Input from '../components/Input';

export default function loginPage(props) {
  return (
    <form className="flex flex-col justify-center items-center h-screen">
      <Input placeHolder="EMAIL" bgColor="REDT" textColor="DRED" />
      <Input placeHolder="PASSWORD" bgColor="BLUET" textColor="DBLUE" />
    </form>
  );
}
