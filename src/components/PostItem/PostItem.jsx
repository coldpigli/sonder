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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineMoreVert } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { AiOutlineFire, AiFillFire } from "react-icons/ai";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkHandler, deletePost, likeOrDislikePost } from "services";
import { checkIfBookmarked, checkUserPresence, getTimeDifference } from "utils";
import { EditPostModal } from "components";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { Link, useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const likeCount = post?.likes?.likeCount || 0;
  const likedBy = post?.likes?.likedBy || [];
  const { userData } = useSelector((state) => state.auth);
  const { userList } = useSelector((state) => state.users);
  const currentUser = userData.username;
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const findProfileImg = (name) => {
    const user = userList?.find((item) => item.username === name);
    return user?.profileImg;
  };

  const engageButtons = [
    {
      id: 1,
      icon: <AiOutlineFire />,
      activeIcon: <AiFillFire />,
      name: "Upvote",
      active: checkUserPresence(likedBy, currentUser),
      stat: likeCount,
      clickHandler: () => {
        checkUserPresence(likedBy, currentUser)
          ? dispatch(likeOrDislikePost({ type: "dislike", _id: post?._id }))
          : dispatch(likeOrDislikePost({ type: "like", _id: post?._id }));
      },
    },
    {
      id: 2,
      icon: <BiCommentAdd />,
      name: "Comment",
      stat: post?.comments?.length || 0,
      clickHandler: () => {
        navigate(`/post/${post?._id}`);
      },
    },
    {
      id: 3,
      icon: <MdOutlineBookmarkBorder />,
      activeIcon: <MdOutlineBookmark />,
      name: "Bookmark",
      active: checkIfBookmarked(userData?.bookmarks, post),
      clickHandler: () => {
        checkIfBookmarked(userData?.bookmarks, post)
          ? dispatch(
              bookmarkHandler({ type: "remove-bookmark", _id: post?._id })
            )
          : dispatch(bookmarkHandler({ type: "bookmark", _id: post?._id }));
      },
    },
  ];

  return (
    <Box padding="1rem" borderRadius="1rem" bg="#242731">
      <VStack align="stretch">
        <HStack justify="space-between">
          <Link to={`/people/${post?.username}`}>
            <HStack>
              <Avatar
                size="md"
                name={post?.username}
                src={findProfileImg(post?.username)}
              />
              <VStack align="stretch" spacing="0">
                <Heading size="sm">{post?.username}</Heading>
                <Text fontSize="xs" color="#808191">
                  {getTimeDifference(post?.createdAt)}
                </Text>
              </VStack>
            </HStack>
          </Link>
          {post?.username === currentUser ? (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<MdOutlineMoreVert />}
                variant="outline"
                _focus={{ boxShadow: "none" }}
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
              />
              <MenuList bg="#21242D">
                <MenuItem
                  _hover={{ backgroundColor: "#242731", color: "white" }}
                  _focus={{ backgroundColor: "#242731", color: "white" }}
                  onClick={onOpen}
                >
                  Edit Post
                </MenuItem>
                <EditPostModal isOpen={isOpen} onClose={onClose} post={post} />
                <MenuItem
                  _hover={{ backgroundColor: "#242731", color: "white" }}
                  _focus={{ backgroundColor: "#242731", color: "white" }}
                  onClick={() => dispatch(deletePost(post))}
                >
                  Delete Post
                </MenuItem>
              </MenuList>
            </Menu>
          ) : null}
        </HStack>
        <Box>
          <Text fontSize="sm" color="#c5c5c5">
            {post?.content}
          </Text>
        </Box>
        <HStack justify="space-between">
          {engageButtons.map((item) => (
            <HStack color="#808191" align="center">
              <IconButton
                fontSize="1.5rem"
                icon={item.active ? item.activeIcon : item.icon}
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
          <WhatsappShareButton
            title={`Hi! Check this thought from ${userData?.username}`}
            url="https://google.com"
          >
            <WhatsappIcon size="1.8rem" borderRadius="1rem" />
          </WhatsappShareButton>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PostItem;
