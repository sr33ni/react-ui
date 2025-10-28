import React from 'react';
import { ChakraProvider, extendTheme, Box, Button, Heading } from '@chakra-ui/react';
import theme from './theme.js';


function ChakraUi() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8} bg="gray.100">
        <Heading mb={4}>Chakra UI v2 is Working 🎉</Heading>
        <Button colorScheme="teal">Click Me</Button>
      </Box>
    </ChakraProvider>
  );
}

export default ChakraUi;
