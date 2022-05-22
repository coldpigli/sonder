import { Box, Heading, HStack, Icon, IconButton, Image, Link, Text, VStack } from '@chakra-ui/react'
import {RiEditBoxFill, RiExternalLinkLine, RiInstagramLine, RiFacebookCircleFill, RiGithubFill} from 'react-icons/ri'


const ProfileHeader = () => {
  return (
    <Box p='1rem' bg='#F8F8F8' borderRadius='1rem'>
          <HStack alignItems='flex-start'>
            <Box p='1rem' border="2px solid" borderRadius='1rem'>
              <Image minW='150px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius='1rem' />
            </Box>
            <VStack align='stretch'>
              <HStack justify='space-between'>
                <Heading size='lg'>Dan Abramov</Heading>
                <IconButton
                    variant="ghost"
                    colorScheme="black"
                    fontSize="2 rem"
                    icon={<RiEditBoxFill />}
                    _focus={{
                      outline: "none",
                    }}
                  />
              </HStack>
              <Text fontSize='sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est aperiam accusantium inventore quas reiciendis? Mollitia quo vitae deserunt architecto!</Text>
              <HStack>
                <Link href='http://localhost:3000/profile' isExternal>Personal Website</Link>
                <RiExternalLinkLine mx='2px' />
              </HStack>
              <HStack>
                <Link href='https://chakra-ui.com' isExternal><Icon as={RiInstagramLine} w={8} h={8}/></Link>
                <Link href='https://chakra-ui.com' isExternal><Icon as={RiFacebookCircleFill} w={8} h={8}/></Link>
                <Link href='https://chakra-ui.com' isExternal><Icon as={RiGithubFill} w={8} h={8}/></Link>
              </HStack> 
            </VStack>
          </HStack>
        </Box>
  )
}

export default ProfileHeader