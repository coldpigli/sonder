import { Avatar, Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfPost } from "services";

const CommentList = ({ postId }) => {

  const {comments} = useSelector((state)=>state.comments);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCommentsOfPost(postId));
  },[])


  return (
    <Box p="1rem" borderTop="1px solid rgba(128, 129, 145, 0.25)">
      {comments?.map((comment) => (
        <Box border="1px solid rgba(128, 129, 145, 0.25)" p="1rem">
          <HStack>
            <Avatar size="sm" name={comment.username} />
            <VStack align="stretch" spacing="0">
              <Heading size="xs">{comment.username}</Heading>
            </VStack>
          </HStack>
          <Box fontSize="sm">{comment.text}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default CommentList;
