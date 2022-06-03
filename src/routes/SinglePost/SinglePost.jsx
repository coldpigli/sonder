import {
  Avatar,
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import {
  AdditionalInfo,
  CommentCard,
  PostItem,
  Sidebar,
  TopBar,
} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const SinglePost = () => {
  const [smallerDevice] = useMediaQuery("(max-width: 900px)"); // checking if the device is less than 900px
  const { id } = useParams();
  const { postList } = useSelector((state) => state.posts);
  const postItem = postList.find((item) => item._id === id);
  const { username, comments } = postItem;
  const navigate = useNavigate();

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
        <Box bg="#242731" borderRadius="1rem">
          <HStack
            borderBottom="1px solid rgba(128, 129, 145, 0.25)"
            p="0.5rem 1rem"
          >
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              variant="unstyled"
              fontSize="1.5rem"
              icon={<BiArrowBack />}
              onClick={() => navigate("/feed")}
            />
            <Text>Feed</Text>
          </HStack>
          {postItem && <PostItem post={postItem} />}
          <Box p="1rem" borderTop="1px solid rgba(128, 129, 145, 0.25)">
            {comments.map((comment) => (
              <CommentCard comment={comment} />
            ))}
          </Box>
        </Box>
      </VStack>
      {!smallerDevice && <AdditionalInfo />}
    </Box>
  );
};

export default SinglePost;
