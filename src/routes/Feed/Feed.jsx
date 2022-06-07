import { Box, Button, Heading, HStack, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import {
  AdditionalInfo,
  CreatePost,
  Feedlisting,
  GreetingHeader,
  PostItem,
  Sidebar,
  TopBar,
} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { fallbackData, urls } from "constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getAllUsers } from "services";

const Feed = () => {
  const dispatch = useDispatch();
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");
  const { greetingSubHeaderFeed, greetingDescriptionFeed } = fallbackData;
  const {postList} = useSelector((state)=>state.posts);

  useEffect(() => {
    dispatch(getAllUsers());
    if(postList.length===0)
    {
      dispatch(getAllPosts())
    }
  }, []);

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
        <GreetingHeader
          greetingSubHeader={greetingSubHeaderFeed}
          greetingDescription={greetingDescriptionFeed}
          greetingImg={urls.helloBoy}
        />
        <Box>
          <CreatePost />
        </Box>
        <Box>
          <Box mt="1rem">
            <HStack justify="space-between" mb="1rem">
              <Heading size="md">Scroll</Heading>
              <Text fontSize="sm">Showing Recent</Text>
            </HStack>
            <Stack
              align="stretch"
              spacing="6"
              borderRadius="1rem"
              direction="column-reverse"
            >
              {postList?.map((post) => {
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

export default Feed;
