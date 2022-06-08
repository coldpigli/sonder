import {
  Box,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import {
  AdditionalInfo,
  CreatePost,
  GreetingHeader,
  PostItem,
  Sidebar,
  TopBar,
} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { BsFilterSquare } from "react-icons/bs";
import { fallbackData, urls } from "constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getAllUsers } from "services";

const Feed = () => {
  const dispatch = useDispatch();
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");
  const { greetingSubHeaderFeed, greetingDescriptionFeed } = fallbackData;
  const { postList } = useSelector((state) => state.posts);
  const [olderFirst, setOlderFirst] = useState(false);
  console.log("post List", postList);

  useEffect(() => {
    dispatch(getAllUsers());
    if (postList.length === 0) {
      dispatch(getAllPosts());
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
        p={`${smallerDevice ? "1rem 1rem 6rem 1rem" : "1rem 0"}`}
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
              <HStack>
                <Text>{olderFirst ? "Older first" : "Showing Recent"}</Text>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<BsFilterSquare />}
                    bg="lightBlue"
                    _focus={{ boxShadow: "none" }}
                    _hover={{ bg: "none" }}
                    _active={{ bg: "none" }}
                  ></MenuButton>
                  <MenuList bg="lightBlue">
                    <MenuItem
                      _hover={{ backgroundColor: "#242731", color: "white" }}
                      _focus={{ backgroundColor: "#242731", color: "white" }}
                      onClick={() => setOlderFirst(false)}
                    >
                      Recent
                    </MenuItem>
                    <MenuItem
                      _hover={{ backgroundColor: "#242731", color: "white" }}
                      _focus={{ backgroundColor: "#242731", color: "white" }}
                      onClick={() => setOlderFirst(true)}
                    >
                      Older First
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>
            <Stack
              align="stretch"
              spacing="6"
              borderRadius="1rem"
              direction={olderFirst ? "column" : "column-reverse"}
            >
              {postList?.map((post) => {
                return <PostItem post={post} key={post._id} />;
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
