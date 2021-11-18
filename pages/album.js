import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { H2 } from '../components/H2';
import { H3 } from '../components/H3';
import Input from '../components/Input';
import album from '../public/album.jpg';
import Menu from '../components/Menu';
import Search from '../components/Search';
import { P } from '../components/P';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import { BiLike } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { Review } from '../components/Review';
import InputTextArea from '../components/InputTextArea';

export default function Home() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleSearch, setToggleSearch] = React.useState(false);
  return (
    <>
      <Head>
        <title>MIXLIST</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Search toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} />
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
        textColor={'WHITE'}
        content={'MIXLIST'}
      />
      <BackgroundWrapper toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
        <Main toggleMenu={toggleMenu} toggleSearch={toggleSearch}>
          <section className="mt-14 mb-2">
            <Image src={album} alt="Album Art"></Image>
          </section>

          <section>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <H3 color={'PINKT'}>SIXTEEN OCEANS </H3>
                <H3 color={'BLUET'}>by FOUR TET</H3>
              </div>
              <div className="flex flex-row items-start">
                <H3 color={'WHITE'}>
                  <BiLike size={22} className="mr-2" />
                </H3>
                <H3 color={'WHITE'}>
                  <BiPlus size={26} />
                </H3>
              </div>
            </div>
          </section>

          <section className="divide-dotted divide-BLUET grid grid-cols-1 divide-y">
            <Review image={album} alt={'Album Art'} username={'LEVEL87 (3123)'}>
              Something in this album is far more beautiful than sounds should
              be able to convey. The album that accompanied the deepest and most
              profound moments of my lockdown. Favorite track: Something In The
              Sadness.
            </Review>
            <Review image={album} alt={'Album Art'} username={'HELLO123'}>
              Something in this album is far more beautiful than sounds should
              be able to convey. Sadness.
            </Review>
            <Review image={album} alt={'Album Art'} username={'HELLO123'}>
              Something in this album is far more beautiful than sounds should
              be able to convey. Favorite track: Something In The Sadness.
            </Review>
            <article className="pt-4">
              <H3 color={'PINKT'}>ADD REVIEW</H3>
              <InputTextArea
                placeHolder="YOUR REVIEW HERE..."
                bgColor="PINKT"
                textColor="DPINK"
                bgColorHover={'PINKHOVER'}
                type={'textarea'}
              />
              <Button
                bgColor="PINKT"
                textColor="DPINK"
                bgColorHover={'PINKHOVER'}
                title={'REVIEW'}
              />
            </article>
          </section>
        </Main>
      </BackgroundWrapper>
    </>
  );
}
