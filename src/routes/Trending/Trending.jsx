import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import {
  AdditionalInfo,
  GreetingHeader,
  PostItem,
  Sidebar,
  TopBar,
} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { urls } from "constants";
import { fallbackData } from "constants";
import { useSelector } from "react-redux";

const Trending = () => {
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");
  const { postList } = useSelector((state) => state.posts);
  const sortedPostList = [...postList].sort(
    (a, b) => a?.likes?.likeCount - b?.likes?.likeCount
  );

  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav /> : <Sidebar />}
      <VStack
        minH="100vh"
        flex="2"
        gap="4"
        align="stretch"
        p={`${smallerDevice ? "1rem 1rem 6rem 1rem" : "1rem 0"}`}
      >
        <TopBar />
        <GreetingHeader
          greetingSubHeader={fallbackData.greetingSubHeaderTrending}
          greetingDescription={fallbackData.greetingDescriptionTrending}
          greetingImg={urls.trendingImg}
        />
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
              {sortedPostList?.map((post) => {
                return <PostItem post={post} />;
              })}
            </Stack>
          </Box>
        </Box>
      </VStack>
      {!smallerDevice && <AdditionalInfo />}
    </Box>
  );
};

export default Trending;
