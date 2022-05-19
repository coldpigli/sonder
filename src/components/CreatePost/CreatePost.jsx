import { Box, Button, Flex, IconButton, Textarea } from "@chakra-ui/react";
import { MdAddBox } from "react-icons/md";

const CreatePost = () => {
  return (
    <Flex p="1rem" border="2px solid" borderRadius="1rem" align="center" boxShadow='lg'>
      <Box flex="1">
        <Textarea
          placeholder="Pen your thoughts down"
          variant="unstyled"
          focusBorderColor="black"
          resize="none"
          rows="1"
          sx={{
            filter: `grayscale(100%)`,
            "-webkit-filter": `grayscale(100%)`,
            "-moz-filter": `grayscale(100%)`,
            "-ms-filter": `grayscale(100%)`,
          }}
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
  );
};

export default CreatePost;
