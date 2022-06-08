import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { EmptyCard, PostItem } from "components";
import { useSelector } from "react-redux";

const Bookmarks = () => {
  const { userData } = useSelector((state) => state.auth);
  const { postList } = useSelector((state) => state.posts);

  const getPostById = (id) => {
    return postList.find((post) => post._id === id);
  };

  return (
    <Box mt="1rem">
      <HStack justify="space-between" mb="1rem">
        <Heading size="md">Bookmarks</Heading>
        <Text fontSize="sm">Showing All</Text>
      </HStack>
      <Stack
        align="stretch"
        spacing="6"
        borderRadius="1rem"
        direction="column-reverse"
      >
        {(userData?.bookmarks?.length!==0) ? userData?.bookmarks?.map((id) => {
          return <PostItem post={getPostById(id)} />;
        }):<EmptyCard message="You have no thought bookmarked"/>}
      </Stack>
    </Box>
  );
};

export default Bookmarks;
