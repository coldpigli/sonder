import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const GreetingHeader = ({greetingSubHeader, greetingDescription, greetingImg}) => {
  const { userData } = useSelector((state) => state.auth);

  return (
    <Flex
      align="center"
      justify="space-between"
      borderRadius="1rem"
      p="1rem"
      bg="lightBlue"
      w="100%"
    >
      <VStack align="stretch">
        <Text fontSize="1.5rem">{`Hi ${userData.firstName},`}</Text>
        <Text>{greetingSubHeader}</Text>
        <Text color="lightGrey">
          {greetingDescription}
        </Text>
      </VStack>
      <Box maxW="200px">
        <Image src={greetingImg} alt="Hello" />
      </Box>
    </Flex>
  );
};

export default GreetingHeader;
