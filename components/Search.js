import React from 'react';
import MenuList from './MenuItem';
import Input from './Input';
import { Button } from './Button';
import { Styles } from './Styles';

export default function Search(props) {
  const STYLE = 'font-header text-4xl tracking-widest text-center mt-3';
  return (
    <>
      <div
        className={`fixed w-full h-full 
        ${
          Styles.transition
        } p-5 flex flex-col justify-center items-center z-30 ${
          props.toggleSearch ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Input
          placeHolder="..."
          bgColor="PINKT"
          textColor="DPINK"
          bgColorHover={'PINKHOVER'}
          type={'text'}
        />
        <Button
          bgColor={'GREENT'}
          textColor={'DGREEN'}
          bgColorHover={'GREENHOVER'}
          title={'SEARCH'}
        />
      </div>
    </>
  );
}
