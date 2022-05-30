import {  Box, VStack } from "@chakra-ui/react";
import { AdditionalInfo, CreatePost, Feedlisting, GreetingHeader, Sidebar, TopBar} from "components";

const Feed = () => {

  return (
    <Box display="flex" gap="12" color="white">
      <Sidebar />
      <VStack minH="100vh" flex="2" gap="4" align="stretch" p='1rem 0'>
        <TopBar/>
        <GreetingHeader/>
        <Box>
          <CreatePost />
        </Box>
        <Box>
          <Feedlisting />
        </Box>
      </VStack>
      <AdditionalInfo/>
    </Box>
  );
};

export default Feed;
