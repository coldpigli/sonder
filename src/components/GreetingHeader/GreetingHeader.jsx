import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { urls } from "constants";
import React from "react";

const GreetingHeader = () => {
  return (
    <Flex
      justify="space-around"
      align="center"
      border="2px solid"
      borderRadius="1rem"
      w="100%"
      boxShadow="lg"
    >
      <Box>
        <Heading>Hello Josh !</Heading>
        <p>It's good to see you again</p>
      </Box>
      <Box>
        <Image src={urls.helloBoy} alt="Hello" />
      </Box>
    </Flex>
  );
};

export default GreetingHeader;
