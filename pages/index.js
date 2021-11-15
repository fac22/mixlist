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
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mixlist</title>
      </head>
      <Box
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
        {/* <Button colorScheme="blue">Sign up/ Log in</Button> */}
      </Flex>
      <footer>
        <p>Contact us</p>
        <button>Help</button>
      </footer>
    </>
  );
}
