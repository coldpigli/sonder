import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { urls } from "constants";
import { useSelector } from "react-redux";

const GreetingHeader = () => {
  const { userData } = useSelector((state) => state.auth);

  return (
    <Flex
      align="center"
      justify="space-between"
      borderRadius="1rem"
      p="1rem"
      bg="rgb(36, 39, 49)"
      w="100%"
    >
      <VStack align="stretch">
        <Text fontSize="1.5rem">{`Hi ${userData.firstName},`}</Text>
        <Text>How are you feeling today?</Text>
        <Text color="#808191">
          It takes courage to share how you feel, so be mindful about how you
          interact with others.
        </Text>
      </VStack>
      <Box maxW="200px">
        <Image src={urls.helloBoy} alt="Hello" />
      </Box>
    </Flex>
  );
};

export default GreetingHeader;
