import {
  Avatar,
  Box,
  Heading,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, getCommentsOfPost } from "services";
import { MdDelete } from "react-icons/md";

const CommentList = ({ postId }) => {
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfPost(postId));
  }, []);

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
              <Avatar size="sm" name={comment.username} />
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
