import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import Search from '../components/AlbumSearch';
import AlbumResults from '../components/AlbumSearchResults';

// export async function getServerSideProps({ req, res }) {
//   return await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       // const { data, error } = await
//       return {
//         props: {
//           albums: data.results.albummatches.album,
//         },
//       };
//     });
// }
export default function Home() {
  return <AlbumResults />;
}
