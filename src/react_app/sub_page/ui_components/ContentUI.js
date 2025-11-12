import React from "react";
import { Box, Button, Heading,  useColorMode, Card, Container } from '@chakra-ui/react';
import BlockBox from "../../components/BlockBox.jsx";
function ContentUI() {
  const { toggleColorMode } = useColorMode();
  return (
    <div>
            <Container size={100}>
           <Button size={"lg"} variant="outlined" onClick={toggleColorMode}>Click Me</Button>
        <Heading mb={4} >v2</Heading>
        <Button size={"lg"} variant="outlined">Click Me</Button>
        <BlockBox>
          This is a card component with custom styles.
        </BlockBox>
      </Container>
    </div>
  );
}

export default ContentUI;
