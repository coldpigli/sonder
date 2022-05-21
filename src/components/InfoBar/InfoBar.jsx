import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import {SiCloudfoundry} from 'react-icons/si'
import {BiChevronRight} from 'react-icons/bi'

const InfoBar = () => {
  return (
        <Box p='0.5rem' borderRadius='1rem' bg='white' shadow='md'>
          <HStack justify='space-between'>
            <HStack>
              <Box bg='#FFE7CA' p='0.5rem' borderRadius='1rem'>
                <Icon w={8} h={8} as={SiCloudfoundry}/>
              </Box>
              <VStack align='stretch' spacing='0'>
                <Text fontSize='sm'>Thoughts Shared</Text>
                <Heading size='md'>80</Heading>
              </VStack>
            </HStack>
            <Box>
              <Icon w={8} h={8} as={BiChevronRight} />
            </Box>
          </HStack>
        </Box>
  )
}

export default InfoBar