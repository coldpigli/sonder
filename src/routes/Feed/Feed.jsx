import { Box, VStack } from "@chakra-ui/react";
import { AdditionalInfo, CreatePost, Feedlisting, GreetingHeader, Sidebar} from "components";

const Feed = () => {
  return (
    <Box p="1rem" display="flex" gap="12">
      <Sidebar />
      <VStack minH="100vh" flex="2" gap="4" align="stretch">
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
