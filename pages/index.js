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
      >
        <li>HOME</li>
        <li>HOME</li>
        <li>HOME</li>
        <li>HOME</li>
        <li>HOME</li>
      </Box>

      <Button
        onClick={() =>
          setToggleMenu(() => {
            return toggleMenu === true ? false : true;
          })
        }
      >
        SHOW
      </Button>

      <Flex direction="row" width="100vw" justifyContent="space-between">
        {/* <Menu>
          <MenuButton as={Button}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList width="100vw" height="100vh" padding="0" margin="0">
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu> */}

        <Heading>Mixlist</Heading>
        <SearchIcon />
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
