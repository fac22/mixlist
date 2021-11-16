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

export default function Test() {
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.search&album=beacon&api_key=e836ddbce95921744c7e9efe110bcd54&format=json`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Not a valid album');
      }
      return response.json();
    })
    .then((data) => console.log(data.results.albummatches.album));
}
