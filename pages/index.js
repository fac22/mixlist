import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Input, Box, Button, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <head>
        <title>Mixlist</title>
      </head>
      <Box w="100%" h="200px" bgGradient="linear(to-r, pink.200, pink.500)">
        <header>
          <div>Menu</div>
          <h1>Mixlist</h1>
          <button>Search</button>
        </header>
        <Input colorScheme="blue" variant="filled" />
        <Flex direction="row" mb={5} rounded width="500px">
          <img src=""></img>
          <div>Explanation</div>
          <p>Explore</p>
          <Button colorScheme="blue">Sign up/ Log in</Button>
        </Flex>
        <footer>
          <p>Contact us</p>
          <button>Help</button>
        </footer>
      </Box>
    </>
  );
}
