import {  Box, useMediaQuery, VStack } from "@chakra-ui/react";
import { AdditionalInfo, CreatePost, Feedlisting, GreetingHeader, Sidebar, TopBar} from "components";
import BottomNav from "components/BottomNav/BottomNav";

const Feed = () => {

  const [smallerDevice] = useMediaQuery('(max-width: 900px)') // checking if the device is less than 900px

  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav/>: <Sidebar />}
      <VStack minH="100vh" flex="2" gap="4" align="stretch" p = {`${smallerDevice?"1rem":"1rem 0"}`}>
        <TopBar/>
        <GreetingHeader/>
        <Box>
          <CreatePost />
        </Box>
        <Box>
          <Feedlisting />
        </Box>
      </VStack>
      {!smallerDevice && <AdditionalInfo/>}
    </Box>
  );
};

export default Feed;
