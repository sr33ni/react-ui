import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme.js';
import ContentUI from './ui_components/ContentUI.js';


function ChakraUi() {
  return (
    <ChakraProvider theme={theme}>
    <ContentUI />
    </ChakraProvider>
  );
}

export default ChakraUi;
