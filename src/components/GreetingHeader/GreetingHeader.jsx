import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { urls } from "constants";
import React from "react";

const GreetingHeader = () => {
  return (
    <Flex
      align="center"
      borderRadius="1rem"
      w="100%"
    >
      <Box color="white">
        <Heading>Hello Josh !</Heading>
        <p>It's good to see you again</p>
      </Box>
      {/* <Box>
        <Image src={urls.helloBoy} alt="Hello" />
      </Box> */}
    </Flex>
  );
};

export default GreetingHeader;
