import { Avatar, Box, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { MdFavoriteBorder, MdOutlineModeComment, MdBookmarkBorder } from "react-icons/md";

const PostItem = () => {
  return (
    <Box padding="1rem" borderRadius='1rem' bg='white' border='2px solid'>
          <VStack align="stretch">
            <HStack>
              <Avatar size="md" name="Dan Abrahmov" />
              <VStack align="stretch" spacing="0">
                <Heading size="sm">Dan Abrahmov</Heading>
                <Text fontSize="sm">31m ago</Text>
              </VStack>
            </HStack>
            <Box>
              <Text>
                Please don't take your health for granted! Work on it when you
                are fit and having maximum energy. Do regular health
                checkups.Aur haa, health insurance karwa lena please. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Qui, modi
                amet facilis quibusdam iste laboriosam cupiditate maxime ipsum
                dolorum reiciendis sunt id eius eum, praesentium sapiente
                corporis.
              </Text>
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
  )
}

export default PostItem