import { Box, VStack } from "@chakra-ui/react";
import { AdditionalInfo, CreatePost, Feedlisting, GreetingHeader, Sidebar, TopNav} from "components";

const Feed = () => {
  return (
    <Box display="flex" gap="12">
      <Sidebar />
    </Box>
  );
};

export default Feed;
