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
  MdFavoriteBorder,
  MdOutlineModeComment,
  MdBookmarkBorder,
  MdOutlineMoreVert,
} from "react-icons/md";

const PostItem = ({post}) => {

  const {username, content, comments, likes} = post;

  return (
    <Box padding="1rem" borderRadius="1rem" bg="#242731">
      <VStack align="stretch">
        <HStack justify="space-between">
          <HStack>
            <Avatar size="md" name={username} />
            <VStack align="stretch" spacing="0">
              <Heading size="sm">{username}</Heading>
              <Text fontSize="xs" color="#808191">31m ago</Text>
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
          <Text fontSize='sm'>{content}</Text>
        </Box>
        <HStack>
          <IconButton
            variant="ghost"
            colorScheme="black"
            fontSize="1.7rem"
            icon={<MdFavoriteBorder />}
            _focus={{
              outline: "none",
            }}
          />
          <IconButton
            variant="ghost"
            colorScheme="black"
            fontSize="1.5rem"
            icon={<MdOutlineModeComment />}
            _focus={{
              outline: "none",
            }}
          />
          <IconButton
            variant="ghost"
            colorScheme="black"
            fontSize="1.5rem"
            icon={<MdBookmarkBorder />}
            _focus={{
              outline: "none",
            }}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default PostItem;
