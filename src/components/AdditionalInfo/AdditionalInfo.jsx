import { Box, Heading, VStack } from '@chakra-ui/react'
import { FindPeople, InfoBar } from 'components'

const AdditionalInfo = () => {
  return (
    <Box
        flex="1"
        h='100vh'
        position="sticky"
        top='0'
        borderLeft="0.5px solid rgba(128, 129, 145, 0.25)"
        p='1rem'
      >
        <VStack align='stretch' spacing="8" borderRadius='1rem' p='0 1rem'>
            <Heading alignSelf='center'>Basic Stats</Heading>
            <VStack spacing='4' align='stretch'>
              <InfoBar/>
              <InfoBar/>
              <InfoBar/>
            </VStack>
            <FindPeople/>
        </VStack>
      </Box>
  )
}

export default AdditionalInfo