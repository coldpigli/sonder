import { Box, VStack } from "@chakra-ui/react";
import { AdditionalInfo, CreatePost, Feedlisting, GreetingHeader, Sidebar, TopNav, UserSnippet} from "components";

const Feed = () => {
  return (
    <Box display="flex" gap="12">
      <Sidebar />
      <VStack minH="100vh" flex="2" gap="4" align="stretch" p='1.5rem 0'>
        <UserSnippet/>
        <GreetingHeader />
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
