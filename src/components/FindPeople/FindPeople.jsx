import {Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

const FindPeople = () => {
  return (
    <VStack  p='1rem' borderRadius='1rem' bg='white' shadow='md' align='stretch'>
        <HStack justify='space-between'>
            <Heading size='sm'>
                Explore
            </Heading>
            <Text fontSize="sm">See all</Text>
        </HStack>
        <HStack spacing='8' over>
            <VStack>
            <Image
                boxSize='80px'
                borderRadius='md'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
            />
            <Text fontSize="xs">Dan Abramov</Text>
            </VStack>
            <VStack>
            <Image
                boxSize='80px'
                borderRadius='md'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
            />
            <Text fontSize="xs">Dan Abramov</Text>
            </VStack>
            <VStack>
            <Image
                boxSize='80px'
                borderRadius='md'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
            />
            <Text fontSize="xs">Dan Abramov</Text>
            </VStack>
        </HStack>
    </VStack>
  )
}

export default FindPeople