import { Avatar, Box, Heading, HStack, VStack } from "@chakra-ui/react";

const CommentCard = ({comment}) => {
  return (
    <Box border="1px solid rgba(128, 129, 145, 0.25)" p="1rem">
      <HStack>
        <Avatar size="sm" name={comment.username} />
        <VStack align="stretch" spacing="0">
          <Heading size="xs">{comment.username}</Heading>
        </VStack>
      </HStack>
      <Box fontSize="sm">{comment.text}</Box>
    </Box>
  );
};

export default CommentCard;
