import { Box, VStack } from "@chakra-ui/react";
import { CreatePost, GreetingHeader, Sidebar } from "components";

const Feed = () => {
  return (
    <Box p="1rem" display="flex" gap="12">
      <Sidebar />
      <VStack minH="100vh" flex="2" gap="4">
        <GreetingHeader />
        <Box w="100%">
          <CreatePost />
        </Box>
        <Box>Feed section</Box>
      </VStack>
      <Box
        flex="1"
        border="2px solid"
        h="50vh"
        position="sticky"
        top="1rem"
        borderRadius="1rem"
        bg="black"
      ></Box>
    </Box>
  );
};

export default Feed;
