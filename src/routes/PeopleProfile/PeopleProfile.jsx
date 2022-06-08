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
  EmptyCard,
  PostItem,
  ProfileHeader,
  Sidebar,
  TopBar,
} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "services";
const PeopleProfile = () => {
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");
  const { userList } = useSelector((state) => state.users);
  const { postList } = useSelector((state) => state.posts);
  const { username } = useParams();
  const [viewingUser, setViewingUser] = useState();
  const getUserId = (username) => {
    const user = userList?.find((user) => user.username === username);
    return user._id;
  };

  const getUsersPosts = (username) => {
    return postList?.filter((item) => item.username === username);
  };

  useEffect(() => {
    (async () => {
      const { user } = await getUser(getUserId(username));
      setViewingUser(user);
    })();
  }, [username, userList]);

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
        {viewingUser && <ProfileHeader user={viewingUser} />}
        <Box>
          <Box mt="1rem">
            <HStack justify="space-between" mb="1rem">
              <Heading size="md">Scroll</Heading>
              <Text fontSize="sm">Showing {username}'s thoughts</Text>
            </HStack>
            <Stack
              align="stretch"
              spacing="6"
              borderRadius="1rem"
              direction="column-reverse"
            >
              {getUsersPosts(username).length !== 0 ? (
                getUsersPosts(username)?.map((post) => <PostItem post={post} />)
              ) : (
                <EmptyCard message={`${username} has not shared any thoughts yet`}/>
              )}
            </Stack>
          </Box>
        </Box>
      </VStack>
      {!smallerDevice && <AdditionalInfo />}
    </Box>
  );
};

export default PeopleProfile;
