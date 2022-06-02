import {
  Avatar,
  Box,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineIosShare, MdOutlineMoreVert } from "react-icons/md";
import { BiUpvote, BiCommentAdd, BiBookmark } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkHandler, likeOrDislikePost } from "services";
import { checkIfBookmarked, checkUserPresence } from "utils";

const PostItem = ({ post }) => {
  const { username, content, comments, likes, _id } = post;
  const { likeCount, likedBy } = likes;
  const { userData } = useSelector((state) => state.auth);
  const currentUser = userData.username;
  const dispatch = useDispatch();
  const engageButtons = [
    {
      id: 1,
      icon: <BiUpvote />,
      name: "Upvote",
      active: checkUserPresence(likedBy, currentUser),
      stat: likeCount,
      clickHandler: () => {
        checkUserPresence(likedBy, currentUser)
          ? dispatch(likeOrDislikePost({ type: "dislike", _id: _id }))
          : dispatch(likeOrDislikePost({ type: "like", _id: _id }));
      },
    },
    {
      id: 2,
      icon: <BiCommentAdd />,
      name: "Comment",
      stat: likeCount,
      clickHandler: () => {
        console.log("hello") //to-do
      },
    },
    {
      id: 3,
      icon: <BiBookmark />,
      name: "Bookmark",
      active: checkIfBookmarked(userData.bookmarks, post),
      clickHandler: () => {
        checkIfBookmarked(userData.bookmarks, post)?
        dispatch(bookmarkHandler({type: "remove-bookmark", _id: _id})):
        dispatch(bookmarkHandler({type: "bookmark", _id: _id}));
      },
    },
    {
      id: 4,
      icon: <MdOutlineIosShare />,
      name: "Share",
      clickHandler: () => {
        console.log("From Share"); //to-do
      },
    },
  ];

  return (
    <Box padding="1rem" borderRadius="1rem" bg="#242731">
      <VStack align="stretch">
        <HStack justify="space-between">
          <HStack>
            <Avatar size="md" name={username} />
            <VStack align="stretch" spacing="0">
              <Heading size="sm">{username}</Heading>
              <Text fontSize="xs" color="#808191">
                31m ago
              </Text>
            </VStack>
          </HStack>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<MdOutlineMoreVert />}
              variant="outline"
              _focus={{ boxShadow: "none" }}
            />
            <MenuList>
              <MenuItem>Edit Post</MenuItem>
              <MenuItem>Delete Post</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Box>
          <Text fontSize="sm" color="#c5c5c5">
            {content}
          </Text>
        </Box>
        <HStack justify="space-between">
          {engageButtons.map((item) => (
            <HStack color="#808191" align="center">
              <IconButton
                fontSize="1.5rem"
                icon={item.icon}
                variant="unstyled"
                color={item.active ? "#6C5DD3" : "#808191"}
                onClick={item.clickHandler}
                _focus={{
                  outline: "none",
                }}
              />
              <Text>{item.stat}</Text>
            </HStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default PostItem;
