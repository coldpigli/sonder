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
import {
  MdOutlineIosShare,
  MdOutlineMoreVert,
} from "react-icons/md";
import { BiUpvote, BiDownvote, BiCommentAdd, BiBookmark } from "react-icons/bi";

const PostItem = ({ post }) => {
  const { username, content, comments, likes } = post;
  console.log("the likes", likes);
  const engageButtons = [
    {
      id: 1,
      icon: <BiUpvote />,
      name: "Upvote",
      stat: likes.likeCount
    },
    {
      id: 2,
      icon: <BiCommentAdd />,
      name: "Comment",
    },
    {
      id: 3,
      icon: <BiBookmark />,
      name: "Bookmark",
    },
    {
      id: 4,
      icon: <MdOutlineIosShare />,
      name: "Share",
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
                variant="ghost"
                fontSize="1.5rem"
                icon={item.icon}
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
