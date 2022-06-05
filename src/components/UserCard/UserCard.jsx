import { Avatar, Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserCard = ({userData}) => {

    const {firstName, lastName, profileImg, username} = userData;

  return (
    <Box p='0.5rem' bg='#242731' borderRadius='1rem'>
        <HStack justify='space-between'>
            <Link to={`/people/${username}`}>
            <HStack spacing='4'>
                <Box>
                    <Avatar name={username} src={profileImg} borderRadius='1rem'/>
                </Box>
                <VStack align='stretch' spacing='1'>
                    <Heading size='xs'>{firstName+' '+lastName}</Heading>
                    <Text fontSize='sm' color="#808191">@{username}</Text>
                </VStack>
            </HStack>
            </Link>
            <Box>
                <Button bg='#6C5DD3' color='white' size='sm'>Follow</Button>
            </Box>
        </HStack>
    </Box>
  )
}

export default UserCard;