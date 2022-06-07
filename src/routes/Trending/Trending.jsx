import { Box, Heading, HStack, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import {
  AdditionalInfo,
  CreatePost,
  Feedlisting,
  GreetingHeader,
  Sidebar,
  TopBar,
} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { fallbackData } from "constants";

const Trending = () => {
  const [smallerDevice] = useMediaQuery("(max-width: 900px)"); // checking if the device is less than 900px

  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav /> : <Sidebar />}
      <VStack
        minH="100vh"
        flex="2"
        gap="4"
        align="stretch"
        p={`${smallerDevice ? "1rem" : "1rem 0"}`}
      >
        <TopBar />
        <GreetingHeader greetingSubHeader = {fallbackData.greetingSubHeaderTrending}/>
        <Box>
          <Box mt="1rem">
            <HStack justify="space-between" mb="1rem">
              <Heading size="md">Trending</Heading>
              <Text fontSize="sm">Showing Trending</Text>
            </HStack>
            <Stack
              align="stretch"
              spacing="6"
              borderRadius="1rem"
              direction="column-reverse"
            >
              
            </Stack>
          </Box>
        </Box>
      </VStack>
      {!smallerDevice && <AdditionalInfo />}
    </Box>
  );
};

export default Trending;
