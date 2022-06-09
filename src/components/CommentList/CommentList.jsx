import {
  Avatar,
  Box,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfPost } from "services";

const CommentList = ({ postId }) => {
  const { comments } = useSelector((state) => state.comments);
  const {userList} = useSelector((state)=>state.users);
  const dispatch = useDispatch();

  const getProfileImg = (username) => {
    const user = userList.find((item)=>item.username===username);
    return user?.profileImg
  }

  useEffect(() => {
    dispatch(getCommentsOfPost(postId));
  }, [postId]);

  return (
    <VStack align="stretch" p="1rem" spacing="0" flexDirection="column-reverse">
      {comments?.map((comment) => (
        <VStack
          align="stretch"
          border="1px solid rgba(128, 129, 145, 0.25)"
          p="1rem"
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Avatar size="sm" name={comment.username} src={getProfileImg(comment.username)}/>
              <VStack align="stretch" spacing="0">
                <Heading size="xs">{comment.username}</Heading>
              </VStack>
            </HStack>
          </HStack>
          <Box fontSize="sm">{comment.text}</Box>
        </VStack>
      ))}
    </VStack>
  );
};

export default CommentList;
