import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { urls } from "constants";

const EmptyCard = ({message}) => {
  return (
    <Box p='1rem' bg='lightBlue' borderRadius='1rem'>
        <VStack align='center'>
        <Heading>** Cricket Noises **</Heading>
        <Text fontSize='x-large' color='red.400'>{message}</Text>
        <Image src={urls.emptyImg} boxSize='30rem' />
        </VStack>
    </Box>
  )
}

export default EmptyCard;