import { Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import {BiChevronRight} from 'react-icons/bi'

const InfoBar = ({text, metric, icon, bgColor}) => {
  return (
        <Box p='0.5rem' borderRadius='1rem' bg='#242731'>
          <HStack justify='space-between'>
            <HStack>
              <Box bg={bgColor} p='0.5rem' borderRadius='1rem'>
                <Icon w={8} h={8} as={icon}/>
              </Box>
              <VStack align='stretch' spacing='0'>
                <Text fontSize='sm' color="#808191">{text}</Text>
                <Heading size='md'>{metric}</Heading>
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