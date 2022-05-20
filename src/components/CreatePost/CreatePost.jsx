import { Box, Flex, HStack, IconButton, Textarea, VStack } from "@chakra-ui/react";
import { MdAddBox, MdImage, MdOutlineEmojiEmotions } from "react-icons/md";
import { grayscale } from "utils/grayscale";

const CreatePost = () => {
  return (
    <Box p="1rem" border="2px solid" borderRadius="1rem" boxShadow='lg'>
      <Flex align="center" w='full'>
      <Box flex="1">
        <Textarea
          placeholder="Pen your thoughts down"
          variant="unstyled"
          focusBorderColor="black"
          resize="none"
          rows="1"
          sx={grayscale}
        />
      </Box>
      <Box>
        <IconButton
          variant="ghost"
          colorScheme="black"
          fontSize="3rem"
          icon={<MdAddBox />}
          _focus={{
            outline: "none",
          }}
        />
      </Box>
      </Flex>
      <HStack>
        <IconButton
          variant="ghost"
          colorScheme="black"
          fontSize="1.5rem"
          icon={<MdImage />}
          _focus={{
            outline: "none",
          }}
        />
        <IconButton
          variant="ghost"
          colorScheme="black"
          fontSize="1.5rem"
          icon={<MdOutlineEmojiEmotions />}
          _focus={{
            outline: "none",
          }}
        />
      </HStack>
    </Box>
  );
};

export default CreatePost;
