import { Box, Button, Flex, HStack, IconButton, Textarea } from "@chakra-ui/react";
import { MdImage, MdOutlineEmojiEmotions } from "react-icons/md";

const CreatePost = () => {
  return (
    <Box borderRadius="1rem">
      <Flex align="center" w="full">
        <Box flex="1">
          <Textarea
            p='1rem'
            size='sm'
            borderRadius='1rem'
            placeholder="Pen your thoughts down"
            variant="unstyled"
            bg="#242731"
            focusBorderColor="none"
            resize="none"
            border="none"
          />
        </Box>
      </Flex>
      <HStack mt='1rem' justify='space-between'>
        <Box>
        <IconButton
          variant="ghost"
          fontSize="1.5rem"
          color="#808191"
          icon={<MdImage />}
          _focus={{
            outline: "none",
          }}
        />
        <IconButton
          variant="ghost"
          fontSize="1.5rem"
          color="#808191"
          icon={<MdOutlineEmojiEmotions />}
          _focus={{
            outline: "none",
          }}
        />
        </Box>
        <Button bg='#6C5DD3'>Post</Button>
      </HStack>
    </Box>
  );
};

export default CreatePost;
