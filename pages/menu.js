import React from 'react';
import MenuList from '../components/MenuList';

export default function Menu() {
  const menu = [
    { id: 1, title: 'HOME', color: 'BLUE' },
    { id: 2, title: 'TREND', color: 'PINK' },
    { id: 3, title: 'DISCOVER', color: 'WHITE' },
    { id: 4, title: 'SEARCH', color: 'GREEN' },
    { id: 5, title: 'LOGIN', color: 'BLUE' },
  ];
  return (
    <ul className="h-screen flex flex-col align-center justify-center bg-PURPLET text-2xl">
      {menu.map((item) => (
        <MenuList key={item.id} title={item.title} tCol={item.color} />
      ))}
    </ul>
  );
}
