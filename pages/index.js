import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import {
  Input,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import {
  AddIcon,
  HamburgerIcon,
  ExternalLinkIcon,
  RepeatIcon,
  IconButton,
  EditIcon,
  SearchIcon,
} from '@chakra-ui/icons';

export default function Home() {
  const [toggleMenu, setToggleMenu] = React.useState(true);
  const [search, setSearch] = React.useState({});
  function Fetch({ album }) {
    React.useEffect(() => {
      fetch(
        `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Not a valid album');
          }
          return response.json();
        })
        .then((data) => {
          setSearch(data.results.albummatches.album);
          console.log(data.results.albummatches.album);
          return AlbumData(data.results.albummatches.album);
        });
    });
  }
  // React.useEffect(() => {
  //   fetch(
  //     `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Not a valid album');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => AlbumData(data.results.albummatches.album));
  // });

  let arr = [];

  async function AlbumData(album) {
    React.useEffect(() => {
      for (let i = 0; i < 5; i++) {
        console.log(album[i]);
        let image = album[i].image[1][`#text`];
        let name = album[i].name;
        let artist = album[i].artist;
        let link = album[i].url;
        arr.push({ image, name, artist, link });
      }
      console.log(arr);
      arr.forEach(CreateCardUsingTemplate);
    });

    // await fetch(
    //   `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=e836ddbce95921744c7e9efe110bcd54&artist=${artist}&album=${name}&format=json`
    // )
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Not a valid album');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => console.log(data));
  }

  //const results = this.querySelector('#albumResults');

  function CreateCardUsingTemplate(e) {
    const results = document.querySelector('#albumResults');
    const { image, name, artist, link } = e;
    const template = document.querySelector('#template');
    const domFragment = template.content.cloneNode(true);
    let card = domFragment.querySelector('#templateCard');
    // card.setAttribute('data-name', `${name}`);
    domFragment.querySelector('img').src = image;
    domFragment.querySelector('#album_name').textContent = name;
    domFragment.querySelector('#album_artist').textContent = artist;
    domFragment.querySelector('#album_link').href = link;
    results.append(domFragment);
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mixlist</title>
      </Head>
      {/* <Box
        width="100%"
        height="100%"
        bg="red"
        visibility={toggleMenu ? 'visible' : 'hidden'}
        position="fixed"
        paddingTop="40px"
      >
        <UnorderedList
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          listStyleType="none"
        >
          <ListItem>HOME</ListItem>
          <ListItem>HOME</ListItem>
          <ListItem>HOME</ListItem>
          <ListItem>HOME</ListItem>
          <ListItem>HOME</ListItem>
        </UnorderedList>
      </Box>

      <Flex direction="row" width="100vw" justifyContent="space-between">
        <Button
          onClick={() =>
            setToggleMenu(() => {
              return toggleMenu === true ? false : true;
            })
          }
        >
          <HamburgerIcon />
        </Button>
        <Heading>Mixlist</Heading>

        <SearchIcon margin="7px" />
      </Flex>
      <Flex direction="row" mb={5} rounded width="500px">
        <img src=""></img>
        <div>
          <p>
            Track your music, recommend albums to your friends, save tracks for
            later
          </p>
        </div>
        <p>Explore</p>
        
      </Flex>
      <footer>
        <p>Contact us</p>
        <button>Help</button>
      </footer> */}
      <main>
        <section>
          <h1>Last.fm Testing</h1>

          <p>Search an album</p>

          <form id="albumForm">
            <label htmlFor="album">Album</label>
            <input
              type="text"
              id="album"
              name="album"
              maxLength="20"
              required
            />
            <button type="submit" id="albumSubmit">
              Submit
            </button>
          </form>
        </section>
        <section>
          <h2>Your results</h2>
          <div id="albumResults"></div>
        </section>
        <template id="template">
          <article className="card" id="templateCard">
            <p>Name: </p>
            <b>
              <p id="album_name"></p>
            </b>

            <i>
              <p id="album_artist"></p>
            </i>

            <p>Tracks</p>
            <ul id="album_tracks"></ul>

            <a href="" id="album_link" target="_blank">
              <small>More info ...</small>
            </a>
          </article>
        </template>
      </main>
    </>
  );
}
