import { Box, calc, Flex, Icon, VStack } from '@chakra-ui/react';
import {MdHome, MdTrendingUp, MdGroupAdd, MdBookmark, MdPerson, MdOutlineLogout} from "react-icons/md";

const Sidebar = () => {
  return (
      <Box 
      h={calc.subtract('100vh','2rem')}  
      bg="black"
      borderRadius='1rem'
      position='sticky'
      p='1.5rem'
      top= '1rem'>
          <VStack h='100%' justify='space-between'>
            <Flex direction='column' justify='space-between' h='50%  '>
              <Icon as={MdHome} color="white" w={8} h={8}/>
                <Icon as={MdTrendingUp} color="white" w={8} h={8}/>
                <Icon as={MdGroupAdd} color="white" w={8} h={8}/>
                <Icon as={MdBookmark} color="white" w={8} h={8}/>
                <Icon as={MdPerson} color="white" w={8} h={8}/>
            </Flex>
            <Box>
              <Icon as={MdOutlineLogout} color="white" w={8} h={8}/>
            </Box>
          </VStack>
      </Box>
  )
}

export default Sidebar