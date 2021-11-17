import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import { Button } from '../components/Button';
import { Header } from '../components/Header';
import Input from '../components/Input';
import { Main } from '../components/Main';


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
  const [toggleMenu, setToggleMenu] = React.useState(false);
  // const menuValues =
  //   'flex flex-col w-screen h-screen bg-red-300 fixed justify-center ';

  return (
    <>
      <Head>
        <title>Mixlist</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        textColor={'WHITE'}
      >
        MIXLIST
      </Header>

      <main className="w-full mt-20 mb-20">
        <h2
          className={`font-header text-4xl text-GREENT tracking-widest text-center`}
        >
          DISCOVER
        </h2>
        <h2
          className={`font-header text-4xl text-BLUET tracking-widest text-center mt-3`}
        >
          YOUR NEXT
        </h2>
        <h2
          className={`font-header text-4xl text-PINK tracking-widest text-center mt-3`}
        >
          FAVOURITE
        </h2>
        <h2
          className={`font-header text-4xl text-PINKT tracking-widest text-center mt-3`}
        >
          ALBUM
        </h2>
      </main>

      <Input
        placeHolder="EMAIL"
        bgColor="REDT"
        textColor="DRED"
        bgColorHover={'REDHOVER'}
        type={'email'}
      />
      <Input
        placeHolder="PASSWORD"
        bgColor="BLUET"
        textColor="DBLUE"
        bgColorHover={'BLUEHOVER'}
        type={'password'}
      />
      <Button
        bgColor={'GREENT'}
        textColor={'DGREEN'}
        bgColorHover={'GREENHOVER'}
      >
        DISCOVER
      </Button>
      {/* <Button bgColor={'PINKT'} textColor={'DPINK'} bgColorHover={'PINKHOVER'}>
        DISCOVER
      </Button> */}
    </>
  );
}
