import {Box, Heading, HStack,StackDivider,Text, VStack } from "@chakra-ui/react";
import { PostItem } from "components";

const Feedlisting = () => {
  return (
    <Box>
      <HStack justify="space-between" mb="1rem">
        <Heading size="md">Scroll</Heading>
        <Text fontSize="sm">Showing Recent</Text>
      </HStack>
      <VStack align="stretch" spacing="6" borderRadius='1rem' bg="#E1E1E1" p='1rem'>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
      </VStack>
    </Box>
  );
};

export default Feedlisting;
